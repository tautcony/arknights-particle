/* eslint-disable no-unused-vars */
/* eslint-disable complexity */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/unbound-method */
import "core-js/es";
import "regenerator-runtime/runtime";

import * as THREE from "three";
import anime from "animejs/lib/anime.es.js";
import { throttle, slice, fill, random, shuffle, flattenDepth } from "lodash";

const particleImage = "./arknights/static/particle.7ff7f9a6de6e31926ddb.png";
const fireflyImage = "./arknights/static/firefly.5ec707a0de1eca4a0765.png";


interface ParticleStoreStruct {
    points: number[][];
    count: number;
    size: {
        width: number;
        height: number;
    };
}

interface ParticlePartialStruct {
    pointIdx: number;
    speed: number;
    point?: Float32Array;
    color?: Float32Array;
}

class ParticleStruct {
    public run: number;
    public pointIdx: number;
    public speed: number;
    public x: number;
    public y: number;
    public z: number;
    public r: number;
    public g: number;
    public b: number;
    public a: number;

    public point?: Float32Array;
    public color?: Float32Array;

    public constructor(t: ParticlePartialStruct) {
        this.run = 0;
        this.pointIdx = t.pointIdx;
        this.speed = t.speed;
        this.x = t.point[0];
        this.y = t.point[1];
        this.z = t.point[2];
        this.r = t.color[0];
        this.g = t.color[1];
        this.b = t.color[2];
        this.a = t.color[3];

        this.point = t.point;
        this.color = t.color;
    }
}

interface FireFlyStruct {
    x: number;
    y: number;
    z: number;
    opacity: number;
    size: number;
    speed: number;
    life: number;
    aPosition: Float32Array;
    aOpacity: Float32Array;
}

class ModelStruct {
    public count: number;
    public points: number[];
    public size: {
        width: number,
        height: number;
    }
    public shuffle? = (model: ModelStruct) => {};
    public disappear? = (model: ModelStruct) => {};
}

interface TransformStruct {
    x: number;
    y: number;
    sc: number;
    pointSize?: number;
}

enum EffectEnum {
    FIXED = 0,
    GATHER = 1,
    SPREAD = 2,
    PERSPECTIVE = 3,
}

interface ParticleLoaderConfig {
    particleNum: number;
    speedRange: number[];
}

interface ParticleLoaderLoadConfig {
    active: boolean;
    mode: EffectEnum;
    model: ModelStruct;
    transform: () => TransformStruct;
}

// Be
class AnimationHandler {
    private queue: ((ts: number)=>void)[] = [];
    private fps: number = 61;
    private rafId: number = NaN;
    private lastUpdated: number = NaN;

    public add(handler: ((ts: number)=>void)) {
        if (this.queue.indexOf(handler) < 0) {
            this.queue.push(handler);
        }
        return this;
    }
    public remove(handler: ((ts: number)=>void)) {
        const e = this.queue.indexOf(handler);
        if (e >= 0) {
            this.queue.splice(e, 1);
        }
        return this;
    }
    public update(ts: number) {
        if (!this.lastUpdated || ts - this.lastUpdated > 1e3 / this.fps) {
            this.lastUpdated = ts;
            for (const handler of this.queue) {
                handler(ts);
            }
        }
        this.rafId = window.requestAnimationFrame(this.update.bind(this));
    }
    public init() {
        this.rafId = window.requestAnimationFrame(this.update.bind(this));
        return this;
    }
    public destroy() {
        window.cancelAnimationFrame(this.rafId);
    }
};

// Ue
class ResizeHandler {
    private queue: (() => void)[] = [];
    public init() {
        window.addEventListener(
            "resize",
            throttle(() => {
                for (const handler of this.queue) {
                    handler();
                }
            })
        );
        return this;
    }
    public add(handler: () => void) {
        if (this.queue.indexOf(handler) < 0) {
            this.queue.push(handler);
        }
        return this;
    }
    public remove(handler: () => void) {
        const e = this.queue.indexOf(handler);
        if (e >= 0) {
            this.queue.splice(e, 1);
        }
        return this;
    }
};

// Li
class WebglContainer {
    private static _instance: WebglContainer;
    // var
    public canvas: HTMLCanvasElement;
    public scene: THREE.Scene;
    public camera: THREE.PerspectiveCamera;
    public renderer: THREE.WebGLRenderer;
    // func
    public fitViewport: () => void;
    public update: () => void;

    public constructor() {
        this.fitViewport = throttle(() => {
            const n = this.width;
            const r = this.height;
            const i = this.resoluteWidth;
            const a = this.resoluteHeight;
            if (!(this.canvas.width === i && this.canvas.height === a)) {
                this.renderer.setSize(i, a, false);
                this.camera.near = 110;
                this.camera.far = 1e3;
                this.camera.aspect = n / r;
                this.camera.fov = THREE.MathUtils.radToDeg(
                    2 * Math.atan(r / 2 / 160)
                );
                this.camera.updateProjectionMatrix();
                this.camera.position.set(0, 0, 160);
                this.camera.lookAt(0, 0, 0);
            }
        });
        this.update = () => {
            this.fitViewport();
            this.renderer.render(this.scene, this.camera);
        };
        this.canvas = document.getElementById("webgl") as HTMLCanvasElement;
        if (!this.canvas) {
            throw new Error("no webgl canvas");
        }
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera();
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
        });
        animationHandler.add(this.update);
    }

    public static get instance() {
        if (!WebglContainer._instance) {
            WebglContainer._instance = new WebglContainer();
        }
        return WebglContainer._instance;
    }

    public get width() {
        return this.canvas.clientWidth;
    }
    public get height() {
        return this.canvas.clientHeight;
    }
    public get resoluteWidth() {
        return "desktop" === responsiveModeHandler.mode
            ? this.canvas.clientWidth
            : Math.round(this.canvas.clientWidth * window.devicePixelRatio);
    }
    public get resoluteHeight() {
        return "desktop" === responsiveModeHandler.mode
            ? this.canvas.clientHeight
            : Math.round(this.canvas.clientHeight * window.devicePixelRatio);
    }
    public stop() {
        animationHandler.remove(this.update);
    }
}

// He
class ResponsiveModeHandler {
    public mode: string = "desktop";
    private queue: ((mode?: string) => void)[] = [];
    private widthThrottle: number = 430;

    public init() {
        this.mode = window.innerWidth > this.widthThrottle ? "desktop" : "phone";
        resizeHandler.add(() => {
            const r = window.innerWidth;
            let updated = false;
            if (r > this.widthThrottle && "phone" === this.mode) {
                this.mode = "desktop";
                updated = true;
            } else if (r <= this.widthThrottle && "desktop" === this.mode) {
                this.mode = "phone";
                updated = true;
            }
            if (updated) {
                for (const handler of this.queue) {
                    handler(this.mode);
                }
            }
        });
        return this;
    }
    public add(handler: (mode?: string) => void) {
        if (this.queue.indexOf(handler) < 0) {
            this.queue.push(handler);
        }
        return this;
    }
    public remove(handler: (mode?: string) => void) {
        const e = this.queue.indexOf(handler);
        if (e >= 0) {
            this.queue.splice(e, 1);
        }
        return this;
    }
};

// qi
class TouchableHandler {
    public x = 0;
    public y = 0;
    public clientX = 0;
    public clientY = 0;
    public interactive = false;
    public touchable = false;

    public init() {
        this.clientX = 0.5 * WebglContainer.instance.width;
        this.clientY = 0.5 * WebglContainer.instance.height;
        for (const eventType of ["mousemove", "touchstart", "touchmove"]) {
            document.addEventListener(
                eventType,
                throttle((evt) => {
                    this.interactive = true;
                    if ("targetTouches" in evt) {
                        this.clientX = evt.targetTouches[0].clientX;
                        this.clientY = evt.targetTouches[0].clientY;
                        this.x = evt.targetTouches[0].clientX - 0.5 * WebglContainer.instance.width;
                        this.y = 0.5 * WebglContainer.instance.height - evt.targetTouches[0].clientY;
                    } else {
                        this.clientX = evt.clientX;
                        this.clientY = evt.clientY;
                        this.x = evt.clientX - 0.5 * WebglContainer.instance.width;
                        this.y = 0.5 * WebglContainer.instance.height - evt.clientY;
                    }
                    let r;
                    if (evt.composedPath !== null && evt.composedPath !== undefined) {
                        const e = evt.composedPath;
                        r = e.call(evt) || [];
                    } else {
                        r = [];
                    }
                    let flag = false;
                    for (let o = 0; o < 3; o++) {
                        const s = r[o];
                        const n = s.dataset;
                        const cursorValue = null === n || undefined === n ? undefined : n.cursor;
                        const tagNames = ["A", "BUTTON", "INPUT"];

                        if ("pointer" === cursorValue || tagNames.includes(s.tagName)) {
                            flag = true;
                            break;
                        }
                    }
                    this.touchable = flag;
                }),
                { passive: true }
            );
        }

        for (const eventType of ["touchend", "mouseup"]) {
            document.addEventListener(
                eventType,
                throttle(() => {
                    if ("phone" === responsiveModeHandler.mode) {
                        this.interactive = false;
                        this.x = 0;
                        this.y = 0;
                    }
                }),
                { passive: true }
            );
        }
        resizeHandler.add(this.resize.bind(this));
        return this;
    }
    public resize() {
        this.interactive = false;
        this.x = 0;
        this.y = 0;
    }
};


function GatherOrSpread(particle: ParticleStruct, model: ModelStruct, transform: TransformStruct, factor: number) {
    if (!model) {
        return;
    }
    const i = 1 / particle.speed;
    if (particle.pointIdx >= model.count) {
        particle.a += (-1 - particle.a) * i;
        particle.color.set([particle.r, particle.g, particle.b, particle.a]);
        return;
    }
    const pointIdx = particle.pointIdx;
    const pointsData = slice(model.points.slice(7 * pointIdx, 7 * pointIdx + 7), 0, 7);
    const x = pointsData[0];
    const y = pointsData[1];
    const z = pointsData[2];
    const r = pointsData[3];
    const g = pointsData[4];
    const b = pointsData[5];
    const a = pointsData[6];
    const touchOffsetX = touchableHandler.interactive ? touchableHandler.x - particle.x : 0;
    const touchOffsetY = touchableHandler.interactive ? touchableHandler.y - particle.y : 0;
    const hypotenuse = Math.sqrt(touchOffsetX * touchOffsetX + touchOffsetY * touchOffsetY);
    const hypotenuseFactor = 1 / (1 + hypotenuse) / (1 + hypotenuse);
    const xx = transform.sc * x + transform.x - particle.x;
    const yy = transform.sc * y + transform.y - particle.y;
    const zz = z - particle.z;
    particle.x += xx * i + factor * touchOffsetX * hypotenuseFactor;
    particle.y += yy * i + factor * touchOffsetY * hypotenuseFactor;
    particle.z += zz * i;
    particle.point.set([particle.x, particle.y, particle.z]);
    particle.r += (r - particle.r) * i;
    particle.g += (g - particle.g) * i;
    particle.b += (b - particle.b) * i;
    particle.a += (a - particle.a) * i;
    particle.color.set([particle.r, particle.g, particle.b, particle.a]);
}
const ParticalEffect = {
    [EffectEnum.FIXED]: function(particle: ParticleStruct, model: ModelStruct, transform: TransformStruct) {
        if (!model) {
            return;
        }
        const i = 1 / particle.speed;
        if (particle.pointIdx >= model.count) {
            particle.a += (-1 - particle.a) * i;
            particle.color.set([particle.r, particle.g, particle.b, particle.a]);
            return;
        }
        const pointIdx = particle.pointIdx;
        const pointData = slice(model.points.slice(7 * pointIdx, 7 * pointIdx + 7), 0, 7);
        const x = pointData[0];
        const y = pointData[1];
        const z = pointData[2];
        const r = pointData[3];
        const g = pointData[4];
        const b = pointData[5];
        const a = pointData[6];
        const xx = transform.sc * x + transform.x - particle.x;
        const yy = transform.sc * y + transform.y - particle.y;
        const zz = z - particle.z;
        particle.x += xx * i;
        particle.y += yy * i;
        particle.z += zz * i;
        particle.point.set([particle.x, particle.y, particle.z]);
        particle.r += (r - particle.r) * i;
        particle.g += (g - particle.g) * i;
        particle.b += (b - particle.b) * i;
        particle.a += (a - particle.a) * i;
        particle.color.set([particle.r, particle.g, particle.b, particle.a]);
    },
    [EffectEnum.GATHER]: function(particle: ParticleStruct, model: ModelStruct, transform: TransformStruct) {
        GatherOrSpread(particle, model, transform, 40);
    },
    [EffectEnum.SPREAD]: function(particle: ParticleStruct, model: ModelStruct, transform: TransformStruct) {
        GatherOrSpread(particle, model, transform, -100);
    },
    [EffectEnum.PERSPECTIVE]: function(particle: ParticleStruct, model: ModelStruct, transform: TransformStruct) {
        if (!model) {
            return;
        }
        const Ji = 1 / 3e3;
        const $i = 0.03;
        const i = 0.08;
        if (particle.pointIdx >= model.count) {
            particle.a += (-1 - particle.a) * i;
            particle.color.set([particle.r, particle.g, particle.b, particle.a]);
            return;
        }
        const pointIdx = particle.pointIdx;
        const pointData = slice(model.points.slice(7 * pointIdx, 7 * pointIdx + 7), 0, 7);
        const x = pointData[0];
        const y = pointData[1];
        const z = pointData[2];
        const r = pointData[3];
        const g = pointData[4];
        const b = pointData[5];
        const a = pointData[6];
        const factor1 = -Math.atan(touchableHandler.x * $i * Ji);
        const xx = transform.sc * x + transform.x;
        const factor2 = xx * Math.cos(factor1);
        const factor3 = xx * Math.sin(factor1);
        const factor4 = -Math.atan(touchableHandler.y * $i * Ji);
        const yy = transform.sc * y + transform.y;
        const factor5 = yy * Math.cos(factor4);
        const zz = z + factor3 + yy * Math.sin(factor4);
        const xxx = factor2 - touchableHandler.x * $i - particle.x;
        const yyy = factor5 - touchableHandler.y * $i - particle.y;
        particle.x += xxx * i;
        particle.y += yyy * i;
        particle.z += (zz - particle.z) * i;
        particle.point.set([particle.x, particle.y, particle.z]);
        particle.r += (r - particle.r) * i;
        particle.g += (g - particle.g) * i;
        particle.b += (b - particle.b) * i;
        particle.a += (a - particle.a) * i;
        particle.color.set([particle.r, particle.g, particle.b, particle.a]);
    },
};

class ParticleLoader {
    public static _main: ParticleLoader;
    public static _sub: ParticleLoader;
    public mode: EffectEnum;
    public transform: TransformStruct;
    public particles: ParticleStruct[];
    public uPointSize: THREE.Uniform<number>;
    public aPosition: THREE.BufferAttribute;
    public aColor: THREE.BufferAttribute;
    public model: ModelStruct;

    // func
    public getUpdatedTransform: () => TransformStruct|undefined;
    public updateTransform: () => ParticleLoader;
    public update: () => void;

    public constructor(config: ParticleLoaderConfig) {
        const particleNum = config.particleNum;
        const minSpeed = config.speedRange[0];
        const maxSpeed = config.speedRange[1];
        this.mode = EffectEnum.SPREAD;
        this.transform = { x: 0, y: 0, sc: 1, pointSize: 3 };
        this.getUpdatedTransform = () => undefined;
        this.updateTransform = () => {
            const transform = this.getUpdatedTransform() || {
                x: 0,
                y: 0,
                sc: 1,
                pointSize: 3,
            };
            const x = transform.x;
            const y = transform.y;
            const sc = transform.sc;
            const pointSize = transform.pointSize;
            this.transform.x = null !== x ? x : this.transform.x;
            this.transform.y = null !== y ? y : this.transform.y;
            this.transform.sc = null !== sc ? sc : this.transform.sc;
            this.uPointSize.value = null !== pointSize ? pointSize : this.transform.pointSize;
            return this;
        };
        this.update = () => {
            this.updateTransform();
            for (const particle of this.particles) {
                ParticalEffect[this.mode](particle, this.model, this.transform);
            }
            this.aPosition.needsUpdate = true;
            this.aColor.needsUpdate = true;
        };
        const locationBuffer = new Float32Array(3 * particleNum);
        const colorBuffer = new Float32Array(4 * particleNum);
        this.particles = fill(new Array(particleNum), 0).map(function(val, idx) {
            const x = (0.5 - Math.random()) * WebglContainer.instance.width;
            const y = (0.5 - Math.random()) * WebglContainer.instance.height;
            const z = 500 * (0.5 - Math.random());
            locationBuffer.set([x, y, z], 3 * idx);
            colorBuffer.set([0.5, 0.5, 0.5, -1], 4 * idx);
            return new ParticleStruct({
                pointIdx: idx,
                point: locationBuffer.subarray(3 * idx, 3 * idx + 3),
                color: colorBuffer.subarray(4 * idx, 4 * idx + 4),
                speed: random(minSpeed, maxSpeed),
            });
        });
        this.model = {
            count: 0,
            points: [],
            size: {
                width: WebglContainer.instance.width,
                height: WebglContainer.instance.height,
            },
        };
        this.aPosition = new THREE.BufferAttribute(locationBuffer, 3);
        this.aColor = new THREE.BufferAttribute(colorBuffer, 4);
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", this.aPosition);
        geo.setAttribute("color", this.aColor);
        this.uPointSize = new THREE.Uniform(1);
        new THREE.TextureLoader().loadAsync(particleImage).then(t => {
            let material = new THREE.ShaderMaterial({
                uniforms: {
                    uTexture: new THREE.Uniform(t),
                    uPointSize: this.uPointSize,
                },
                vertexShader: "attribute vec4 color;\nvarying vec4 vColor;\nuniform float uPointSize;\nvoid main() {\n    vColor = color;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_PointSize = uPointSize;\n    gl_Position = projectionMatrix * mvPosition;\n}\n",
                fragmentShader: "uniform sampler2D uTexture;\nvarying vec4 vColor;\nvoid main() {\n    vec4 texture = texture2D(uTexture, gl_PointCoord);\n    gl_FragColor = vColor * texture;\n    // gl_FragColor = vColor;\n}",
                transparent: true,
                depthTest: false,
            });
            const r = new THREE.Points(geo, material);
            WebglContainer.instance.scene.add(r);
        });
    }

    public static get main() {
        if (!ParticleLoader._main) {
            ParticleLoader._main = new ParticleLoader({
                particleNum: 1e4,
                speedRange: [20, 30],
            });
        }
        return ParticleLoader._main;
    }
    public static get sub() {
        if (!ParticleLoader._sub) {
            ParticleLoader._sub = new ParticleLoader({
                particleNum: 1500,
                speedRange: [10, 15],
            });
        }
        return ParticleLoader._sub;
    }

    public setMode(mode: EffectEnum) {
        this.mode = mode;
        return this;
    }
    public setModel(model: ModelStruct) {
        this.model = model;
        this.fire();
        return this;
    }
    public appear() {
        if (this.model?.shuffle) {
            this.model?.shuffle(this.model);
        }
        return this;
    }
    public disappear() {
        if (this.model?.disappear) {
            this.model?.disappear(this.model);
        }
        return this;
    }
    public fire() {
        animationHandler.add(this.update);
        return this;
    }
    public setTransform(t: () => TransformStruct) {
        this.getUpdatedTransform = t;
        return this;
    }
    public load(config: ParticleLoaderLoadConfig) {
        if (config.active) {
            if (config.mode) {
                this.mode = config.mode;
            }
            if (config.model) {
                this.setModel(config.model);
            }
            if (config.transform) {
                this.getUpdatedTransform = config.transform;
            }
            this.appear();
        } else {
            this.disappear();
        }
        return this;
    }
    public stop() {
        animationHandler.remove(this.update);
        return this;
    }
}

function initParticleData(particle: ParticleStoreStruct, offset?: [number, number]): ModelStruct {
    if (offset === undefined) {
        offset = [0.5, 0.5];
    }
    const offsetFactorX = offset[0];
    const offsetFactorY = offset[1];
    const point = particle.points.map(function(pt) {
        const x = pt[0];
        const y = pt[1];
        const z = pt[2];
        const a = undefined === z ? 255 : z;
        return [
            x - offsetFactorX * particle.size.width,
            offsetFactorY * particle.size.height - y,
            0,
            1,
            1,
            1,
            (1 * a) / 255,
        ];
    });

    const ret = {
        ...particle,
        points: [],
        shuffle() {
            this.points = flattenDepth(shuffle(point), 1);
            return this;
        },
        disappear() {
            this.points.forEach(function(val, idx, arr) {
                switch (idx % 7) {
                    case 0:
                    case 1:
                        arr[idx] = val + 500 * (Math.random() - 0.5);
                        break;
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        arr[idx] = 0.5;
                        break;
                    case 6:
                        arr[idx] = -0.5;
                        break;
                    default:
                        break;
                }
            })
            return this;
        }
    };
    ret.shuffle();
    return ret;
}

// Qo
const createPromiseWrapper = function(thisArg, args, fulfilledType, fn) {
    if (fulfilledType == undefined) {
        fulfilledType = Promise;
    }
    return new Promise(function(resolve, reject) {
        function fulfillNext(t) {
            try {
                handlePromise(fn.next(t));
            } catch (err) {
                reject(err);
            }
        }
        function handleRejection(t) {
            try {
                handlePromise(fn.throw(t));
            } catch (err) {
                reject(err);
            }
        }
        function handlePromise(result) {
            let e;
            if (result.done) {
                resolve(result.value);
            } else {
                e = result.value;
                (e instanceof fulfilledType
                    ? e
                    : new fulfilledType(function(t) {
                        t(e);
                    })).then(fulfillNext, handleRejection);
            }
        }
        handlePromise(
            (fn = fn.apply(thisArg, args || [])).next()
        );
    });
};
// ts
const createAsyncGenerator = function(thisArg, fn) {
    let initContext;
    let finalizeContext;
    let record;
    let ctx = {
        label: 0,
        sent() {
            if (1 & record[0]) {throw record[1];}
            return record[1];
        },
        trys: [],
        ops: [],
    };
    const method = { next: createIteratorMethod(0), throw: createIteratorMethod(1), return: createIteratorMethod(2) };
    if ("function" === typeof Symbol) {
        method[Symbol.iterator] = function() {
            return this;
        };
    }
    return method;

    function createIteratorMethod(kind) {
        return function(input) {
            return (function(arg) {
                if (initContext) {throw new TypeError("Generator is already executing.");}
                for (; ctx; ) {
                    try {
                        if (
                            ((initContext = 1),
                            finalizeContext &&
                (record =
                  2 & arg[0]
                      ? finalizeContext.return
                      : arg[0]
                          ? finalizeContext.throw ||
                      ((record = finalizeContext.return) &&
                        record.call(finalizeContext),
                      0)
                          : finalizeContext.next) &&
                !(record = record.call(finalizeContext, arg[1])).done)
                        )
                        {return record;}
                        switch (
                            ((finalizeContext = 0),
                            record && (arg = [2 & arg[0], record.value]),
                            arg[0])
                        ) {
                            case 0:
                            case 1:
                                record = arg;
                                break;
                            case 4:
                                ctx.label++;
                                return { value: arg[1], done: false };
                            case 5:
                                ctx.label++;
                                finalizeContext = arg[1];
                                arg = [0];
                                continue;
                            case 7:
                                arg = ctx.ops.pop();
                                ctx.trys.pop();
                                continue;
                            default:
                                if (
                                    !(
                                        (record =
                      (record = ctx.trys).length > 0 &&
                      record[record.length - 1]) ||
                    (6 !== arg[0] && 2 !== arg[0])
                                    )
                                ) {
                                    ctx = null;
                                    continue;
                                }
                                if (
                                    3 === arg[0] &&
                  (!record || (arg[1] > record[0] && arg[1] < record[3]))
                                ) {
                                    ctx.label = arg[1];
                                    break;
                                }
                                if (6 === arg[0] && ctx.label < record[1]) {
                                    ctx.label = record[1];
                                    record = arg;
                                    break;
                                }
                                if (record && ctx.label < record[2]) {
                                    ctx.label = record[2];
                                    ctx.ops.push(arg);
                                    break;
                                }
                                if (record[2]) {
                                    ctx.ops.pop();
                                    ctx.trys.pop();
                                }
                                continue;
                        }
                        arg = fn.call(thisArg, ctx);
                    } catch (t) {
                        arg = [6, t];
                        finalizeContext = 0;
                    } finally {
                        initContext = record = 0;
                    }}
                if (5 & arg[0]) {throw arg[1];}
                return { value: arg[0] ? arg[1] : undefined, done: true };
            })([kind, input]);
        };
    }
};

const displayConfig = {
    desktop: {
        width: 1e3 - 500,
        height: 1e3 - 500,
        x: -180,
        y: 0,
        offset: 200,
        gradient: false,
    },
    phone: {
        width: 900,
        height: 900,
        x: -30,
        y: -150,
        offset: 100,
        gradient: true,
    },
};

// ns
class staffCharLoader {
    public canvas: HTMLCanvasElement;
    public active: boolean;
    public animeRunning: boolean;
    public tex: THREE.Texture;
    public loader: THREE.TextureLoader;
    public itemWidth: number;
    public itemHeight: number;
    public itemPosition: THREE.Vector2;
    public itemTransOffset: number;
    public itemGradient: boolean;
    public renderer: THREE.WebGLRenderer;
    public emptyTexture: THREE.Texture;
    public charTextureMap: Record<string, THREE.Texture>;
    public resize: () => void;
    public update: () => void;
    public checkAndRemove: () => void;
    public geo: THREE.PlaneGeometry;
    public item: THREE.Mesh;
    public mat: THREE.ShaderMaterial;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.active = false;
        this.animeRunning = false;
        this.tex = null;
        this.loader = new THREE.TextureLoader();
        this.itemWidth = displayConfig.desktop.width;
        this.itemHeight = displayConfig.desktop.height;
        this.itemPosition = new THREE.Vector2(displayConfig.desktop.x, displayConfig.desktop.y);
        this.itemTransOffset = displayConfig.desktop.offset;
        this.itemGradient = false;
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true,
        });
        this.emptyTexture = new THREE.Texture();
        this.charTextureMap = {};
        this.resize = () => {
            this.canvas.width = WebglContainer.instance.width * window.devicePixelRatio;
            this.canvas.height = WebglContainer.instance.height * window.devicePixelRatio;
            this.renderer.setViewport(0, 0, this.canvas.width, this.canvas.height);
        };
        this.update = () => {
            WebglContainer.instance.camera.layers.disableAll();
            WebglContainer.instance.camera.layers.enable(1);
            this.renderer.render(
                WebglContainer.instance.scene,
                WebglContainer.instance.camera
            );
            WebglContainer.instance.camera.layers.enableAll();
            WebglContainer.instance.camera.layers.disable(1);
        };
        this.checkAndRemove = () => {
            if (!(this.active || this.animeRunning)) {
                WebglContainer.instance.scene.remove(this.item);
                animationHandler.remove(this.update);
                resizeHandler.remove(this.resize);
            }
        };
        this.geo = new THREE.PlaneGeometry(this.itemWidth, this.itemHeight);

        this.mat = new THREE.ShaderMaterial({
            transparent: true,
            fragmentShader: "uniform sampler2D u_texture;\nuniform float black;\nuniform float opacity;\nuniform bool gradient;\nvarying vec2 vUv;\n\nvoid main() {\n   float o = gradient ? opacity * min(vUv.y * 2.0 - 0.5, 1.0) : opacity;\n   gl_FragColor = texture2D(u_texture, vUv) * vec4(black, black, black, o);\n}",
            vertexShader: "varying vec2 vUv;\n\nvoid main()\n{\n      vUv = uv;\n      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n      gl_Position = projectionMatrix * mvPosition;\n}",
            uniforms: {
                // eslint-disable-next-line camelcase
                u_texture: { value: this.emptyTexture },
                black: { value: 1 },
                opacity: { value: 0 },
                gradient: { value: this.itemGradient },
            },
        });
        this.item = new THREE.Mesh(this.geo, this.mat);
    }
    public resetMode(mode: "desktop"|"phone") {
        const config = displayConfig[mode];
        this.itemWidth = config.width;
        this.itemHeight = config.height;
        this.itemPosition = new THREE.Vector2(config.x, config.y);
        this.itemTransOffset = config.offset;
        this.itemGradient = config.gradient;
        this.mat.uniforms.gradient.value = this.itemGradient;
        this.item.position.set(this.itemPosition.x, this.itemPosition.y, 0);
        this.item.layers.set(1);
        this.renderer.pixelRatio = window.devicePixelRatio;
        if (this.tex) {
            const n = this.tex.image;
            const r = n.width;
            const i = n.height;
            this.item.scale.set(r / this.itemWidth, i / this.itemHeight, 1);
        }
    }
    public getPreloadTasks(imageList: string[]) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        return Promise.all(imageList.map(async (textureUrl) => {
            const t = await this.loader.loadAsync(textureUrl);
            t.minFilter = THREE.LinearFilter;
            this.charTextureMap[textureUrl] = t;
        }));
    }
    public init(textureUrl: string) {
        this.setDisplay(textureUrl);
        this.resize();
        this.animeRunning = true;
        this.animeEnter("next").then(() => {
            this.animeRunning = false;
            this.checkAndRemove();
        });
    }
    public add() {
        this.active = true;
        WebglContainer.instance.scene.add(this.item);
        animationHandler.add(this.update);
        resizeHandler.add(this.resize);
    }
    public remove() {
        this.active = false;
        this.checkAndRemove();
    }
    public setDisplay(textureUrl: string) {
        let texutre = this.charTextureMap[textureUrl];
        if (texutre) {
            this.updateDisplayTexture(texutre);
        } else {
            texutre = this.loader.load(textureUrl, (n) => {
                this.charTextureMap[textureUrl] = n;
                this.updateDisplayTexture(n);
            });
        }
    }
    public updateDisplayTexture(texture: THREE.Texture) {
        const e = texture.image;
        const n = e.width;
        const r = e.height;
        this.tex = texture;
        this.mat.uniforms.u_texture.value = texture;
        this.item.scale.set(n / this.itemWidth, r / this.itemHeight, 1);
    }
    public async transTo(textureUrl: string, direction: "prev"|"next" = "prev") {
        this.animeRunning = true;
        await this.animeExit(direction);
        this.setDisplay(textureUrl);
        await this.animeEnter(direction);
        this.animeRunning = false;
        this.checkAndRemove();
    }
    public animeEnter(direction: "prev"|"next") {
        const e = { val: 0 };
        const n = "next" === direction ? 1 : -1;
        return anime({
            duration: 800,
            targets: e,
            val: 1,
            easing: "easeOutQuart",
            update: () => {
                const tt = e.val;
                this.item.position.x =  this.itemPosition.x + (1 - tt) * n * this.itemTransOffset;
                this.item.rotation.y = (1 - tt) * n * 0.08;
                this.mat.uniforms.opacity.value = tt;
                const ii = Math.max(2 * tt - 1, 0);
                this.mat.uniforms.black.value = ii;
            },
        }).finished;
    }
    public animeExit(direction: "prev"|"next") {
        const e = { val: 0 };
        const n = "next" === direction ? 1 : -1;
        return anime({
            duration: 800,
            targets: e,
            val: 1,
            easing: "easeOutQuart",
            update: () => {
                const tt = e.val;
                this.item.position.x = this.itemPosition.x - tt * n * this.itemTransOffset;
                this.item.rotation.y = tt * n * -0.08;
                this.mat.uniforms.opacity.value = 1 - tt;
                const ii = Math.min(1 - 2 * tt, 1);
                this.mat.uniforms.black.value = ii;
            },
        }).finished;
    }
}

function randXPosition() {
    return (Math.random() - 0.5) * (0.9 * WebglContainer.instance.width);
}
function randYPosition() {
    return (Math.random() - 2.5) * (0.2 * WebglContainer.instance.height);
}
function randZPosition() {
    return random(-200, 200);
}
function randLife() {
    return random(60, 1200);
}

// gl
class fireFlyLoader {
    private static _instance: fireFlyLoader;
    public update: () => void;
    public points: FireFlyStruct[];
    public globalOpacity: number;
    public aPosition: THREE.BufferAttribute;
    public aOpacity: THREE.BufferAttribute;

    public constructor(cnt: number = 20) {
        this.update = () => {
            for (const point of this.points) {
                const go = this.globalOpacity;
                if (point.life--) {
                    point.y += point.speed;
                    if (point.life < 30) {
                        point.opacity += 0.1 * (0 - point.opacity);
                    } else {
                        point.opacity += 0.1 * (go - point.opacity);
                    }
                } else {
                    point.x = randXPosition();
                    point.y = randYPosition();
                    point.z = randZPosition();
                    point.life = randLife();
                    point.opacity = 0;
                }
                point.aPosition.set([point.x, point.y, point.z]);
                point.aOpacity.set([point.opacity]);
            }
            this.aPosition.needsUpdate = true;
            this.aOpacity.needsUpdate = true;
        };
        this.globalOpacity = 0;
        const fireFlyArray = fill(new Array(cnt), 0);
        const opacityBuffer = Float32Array.from(fireFlyArray);
        const positionBuffer = Float32Array.from(
            flattenDepth(
                fireFlyArray.map(function() {
                    return [randXPosition(), randYPosition(), randZPosition()];
                })
                ,1)
        );
        this.aPosition = new THREE.BufferAttribute(positionBuffer, 3);
        this.aOpacity = new THREE.BufferAttribute(opacityBuffer, 1);
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", this.aPosition);
        geo.setAttribute("opacity", this.aOpacity);
        this.points = fireFlyArray.map(function(value, index) {
            return {
                x: positionBuffer[3 * index],
                y: positionBuffer[3 * index + 1],
                z: positionBuffer[3 * index + 2],
                opacity: opacityBuffer[index],
                size: 2,
                speed: 0.1 * random(4, 8),
                life: randLife(),
                aPosition: positionBuffer.subarray(3 * index, 3 * index + 3),
                aOpacity: opacityBuffer.subarray(index, index + 1),
            };
        });
        new THREE.TextureLoader().load(fireflyImage, (t) => {
            const shaderMaterial = new THREE.ShaderMaterial({
                uniforms: { uTexture: new THREE.Uniform(t) },
                vertexShader: "attribute float opacity;\nvarying float vOpacity;\nvoid main() {\n    vOpacity = opacity;\n    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n    gl_PointSize = 7.0;\n    gl_Position = projectionMatrix * mvPosition;\n}",
                fragmentShader: "uniform sampler2D uTexture;\nvarying float vOpacity;\nvoid main() {\n    vec4 texture = texture2D(uTexture, gl_PointCoord.xy);\n    gl_FragColor = vec4(texture.rgb, texture.a * vOpacity);\n}",
                transparent: true,
                depthTest: false,
            });
            const points = new THREE.Points(geo, shaderMaterial);
            WebglContainer.instance.scene.add(points);
            this.fire();
        });
    }
    public static get instance() {
        if (!fireFlyLoader._instance) {
            fireFlyLoader._instance = new fireFlyLoader(20);
        }
        return fireFlyLoader._instance;
    }
    public fire() {
        animationHandler.add(this.update);
        return this;
    }
    public stop() {
        animationHandler.remove(this.update);
        return this;
    }
    public disappear() {
        this.globalOpacity = 0;
        return this;
    }
    public appear() {
        this.globalOpacity = 1;
        return this;
    }
}

// yl
class PolygonLoader {
    public static _instance: PolygonLoader;
    public width: number;
    public height: number;
    public update: () => void;
    public globalOpacity: number;
    public getUpdatedTransform: () => TransformStruct|undefined;
    public updateTransform: () => PolygonLoader;
    public geometry: THREE.BufferGeometry;
    public uOpacity: THREE.Uniform<number>;
    public uOrigin: THREE.Uniform<[number, number, number]>;

    public constructor() {
        this.width = 800;
        this.height = 800;
        this.update = () => {
            this.updateTransform();
            this.geometry.rotateX(0.004);
            this.geometry.rotateY(-0.002);
            this.geometry.rotateZ(-0.002);
            this.uOpacity.value += 0.03 * (this.globalOpacity - this.uOpacity.value);
        };
        this.globalOpacity = 0;
        this.getUpdatedTransform = () => undefined;
        this.updateTransform = function() {
            const transform = this.getUpdatedTransform() || { x: 0, y: 0, sc: 1 };
            const x = transform.x;
            const y = transform.y;
            const sc = transform.sc;
            this.uOrigin.value = [x, y, sc];
            return this;
        };
        this.geometry = new THREE.IcosahedronGeometry(400, 1);
        const e = (this.uOpacity = new THREE.Uniform(this.globalOpacity));
        const n = (this.uOrigin = new THREE.Uniform([0, 0, 1]));
        new THREE.TextureLoader().loadAsync(particleImage).then(t => {
            const color = new THREE.Uniform(new THREE.Color(0x968414));
            const texutre = new THREE.Uniform(t);
            const vertexShader = "\nuniform vec3 uOrigin;\nvarying float z;\nvoid main() {\n    z = position.z;\n    vec4 mvPosition = modelViewMatrix * vec4( position.xy * uOrigin.z + uOrigin.xy, 0.0, 1.0 );\n    gl_PointSize = 16.0 / uOrigin.z;\n    gl_Position = projectionMatrix * mvPosition;\n}\n";
            const fragmentShader1 = "\nuniform vec3 uColor;\nvarying float z;\nuniform float uOpacity;\nvoid main() {\n    gl_FragColor = vec4(uColor, ((z / 400.0) + 0.5) * uOpacity);\n}\n";
            const fragmentShader2 = "\nuniform vec3 uColor;\nvarying float z;\nuniform sampler2D uTexture;\nuniform float uOpacity;\nvoid main() {\n    vec4 texture = texture2D(uTexture, gl_PointCoord.xy);\n    gl_FragColor = texture * vec4(uColor, ((z / 400.0) + 0.5) * uOpacity);\n}\n";
            const lineSegments = new THREE.LineSegments(
                this.geometry,
                new THREE.ShaderMaterial({
                    uniforms: { uColor: color, uOpacity: e, uOrigin: n },
                    vertexShader: vertexShader,
                    fragmentShader: fragmentShader1,
                    transparent: true,
                    depthTest: false,
                })
            );
            let points = new THREE.Points(
                this.geometry,
                new THREE.ShaderMaterial({
                    uniforms: {
                        uColor: color,
                        uTexture: texutre,
                        uOpacity: e,
                        uOrigin: n,
                    },
                    vertexShader: vertexShader,
                    fragmentShader: fragmentShader2,
                    transparent: true,
                    depthTest: false,
                })
            );
            WebglContainer.instance.scene.add(lineSegments).add(points);
            this.fire();
        });
    }

    public static get instance() {
        if (!PolygonLoader._instance) {
            PolygonLoader._instance = new PolygonLoader();
        }
        return PolygonLoader._instance;
    }
    public fire() {
        animationHandler.add(this.update);
        return this;
    }
    public stop() {
        animationHandler.remove(this.update);
        return this;
    }
    public disappear() {
        this.globalOpacity = 0;
        return this;
    }
    public appear() {
        this.globalOpacity = 1;
        return this;
    }
    public setTransform(t: () => TransformStruct) {
        this.getUpdatedTransform = t;
        return this;
    }

    // eslint-disable-next-line class-methods-use-this
    public updatePolygonTransform(offset = 0) {
        PolygonLoader.instance.setTransform(function() {
            if ("desktop" === responsiveModeHandler.mode) {
                return {
                    x: 0.1 * -WebglContainer.instance.width,
                    y: 0.5 * WebglContainer.instance.height + (0.2 * (1 - offset) + 0.3) * PolygonLoader.instance.height,
                    sc: 1,
                }
            }
            return {
                x: 0,
                y: 0.5 * WebglContainer.instance.height + (0.2 * (1 - offset) + 0.3) * PolygonLoader.instance.height * 0.6,
                sc: 0.6,
            };
        });
    }
}

const animationHandler = new AnimationHandler();
const resizeHandler = new ResizeHandler();
const responsiveModeHandler = new ResponsiveModeHandler();
const touchableHandler = new TouchableHandler();


export function handlerInit() {
    animationHandler.init();
    resizeHandler.init();
    responsiveModeHandler.init();
    touchableHandler.init();
}

export function background() {
    PolygonLoader.instance.appear().updatePolygonTransform(1);
    fireFlyLoader.instance.appear();
}

const staffInfo = [
    {"name":"阿米娅","nameEn":"AMIYA","code":"ROO1","intro":"罗德岛的公开领袖，在内部拥有最高执行权。虽然，从外表上看起来仅仅是个不成熟的少女，实际上，她却是深受大家信任的合格的领袖。现在，阿米娅正带领着罗德岛，为了感染者的未来，为了让这片大地挣脱矿石病的阴霾而不懈努力。","cv":"黑泽朋世","profession":"caster","displayUrl":"arknights/official/pic/20210112/f40da70e0e3d2c89a89aa97c44b6498c.png","camp":"RHODES_ISLAND"},
    {"name":"凯尔希","nameEn":"KAL'TSIT","code":"B003","intro":"罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。","cv":"日笠阳子","profession":"medic","displayUrl":"arknights/official/pic/20210112/f5d1be51761704001cc9e7bd7529c849.png","camp":"RHODES_ISLAND"},
    {"name":"红","nameEn":"PROJEKT RED","code":"SW01","intro":"红，身份不明，履历缺失，由凯尔希医生接收、监护并担保。\n于机动作战，特种作战与隐秘作战中表现出极高天赋，成绩斐然。\n现于凯尔希医生的指导下，作为特种干员为罗德岛提供服务。","cv":"小清水亚美","profession":"special","displayUrl":"arknights/official/pic/20210112/eec21ae5cb8cce8872b07926a46eb2ed.png","camp":"RHODES_ISLAND"},
    {"name":"杜宾","nameEn":"DOBERMANN","code":"R100","intro":"前玻利瓦尔军人，加入罗德岛后担任教官，主要负责基层和新晋干员培训，必要时刻，也会负责对俘虏的审讯。 \n熟悉各种规模的军事行动，自身作为士兵的素养也极高，作为近卫干员，在第一线带领队伍冲锋陷阵。","cv":"种崎敦美","profession":"warrior","displayUrl":"arknights/official/pic/20210112/774aa017f2a8a5654d661cda1051beea.png","camp":"RHODES_ISLAND"},
    {"name":"临光","nameEn":"NEARL","code":"F002","intro":"临光，前卡西米尔耀骑士，感染者援助团体“使徒”的一员。在掩护己方队员、机动作战、歼灭战与开阔地带作战中体现出极高的战斗技巧和个人军事素养。\n现于罗德岛作为重装干员行动，并于现场提供战术指挥支援。","cv":"佐仓绫音","profession":"tank","displayUrl":"arknights/official/pic/20210112/18469152aa1d779c037a259c61e60671.png","camp":"RHODES_ISLAND"},
    {"name":"赫默","nameEn":"SILENCE","code":"RL01","intro":"赫默，莱茵生命有限公司源石有关项目研究员，曾主管数项未知应用研究，同期亦主持数个矿石病临床试验项目。 \n现于罗德岛为多项行动提供战场医疗救护服务。","cv":"鬼头明里","profession":"medic","displayUrl":"arknights/official/pic/20210112/21c96f723a4638c0103798c65b4f5195.png","camp":"RHINE"},
    {"name":"伊芙利特","nameEn":"IFRIT","code":"RL03","intro":"伊芙利特，前莱茵生命医疗对象，重度感染者。拥有极高的源石适应性，伴随有多发性点火现象。进入莱茵生命前的履历缺失。\n现于罗德岛接受治疗，由医疗干员赫默担任监护与担保人。","cv":"花守由美里","profession":"caster","displayUrl":"arknights/official/pic/20210112/5f84a8f3c8deded1bf8dfc28b2bd7146.png","camp":"RHINE"},
    {"name":"白面鸮","nameEn":"PTILOPSIS","code":"RL04","intro":"白面鸮，前莱茵生命公司，数据维护专员。在医疗类源石技艺领域取得不菲成就，于医疗数据维护，常规医疗方案应用，多项目医疗行为等相关领域，拥有丰富经验。 \n现于罗德岛担任医疗干员，亦就职于医疗部门，某临床实验小组。同时，为罗德岛提供若干项医疗项目的相关辅助工作。","cv":"金元寿子","profession":"medic","displayUrl":"arknights/official/pic/20210112/aad79b4cc62d3d7adc2948a0990ebca1.png","camp":"RHINE"},
    {"name":"德克萨斯","nameEn":"TEXAS","code":"PL02","intro":"企鹅物流员工，单兵作战能力出类拔萃。 \n于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛的多项行动提供协助。","cv":"田所梓","profession":"pioneer","displayUrl":"arknights/official/pic/20210112/416445fede74d8d23c6d5f2476d827b2.png","camp":"PENGUIN_LOGISTICS"},
    {"name":"能天使","nameEn":"EXUSIAI","code":"PL03","intro":"能天使，拉特兰公民，适用拉特兰一至十三项公民权益。企鹅物流公司成员。从事秘密联络，武装押运等非公开活动，推测身份：信使。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛多项行动提供协助。","cv":"石见舞菜香","profession":"sniper","displayUrl":"arknights/official/pic/20210112/ab532ac6f4df46164f9b097f2f6b677d.png","camp":"PENGUIN_LOGISTICS"},
    {"name":"可颂","nameEn":"CROISSANT","code":"PL04","intro":"企鹅物流员工，于合约期内任企鹅物流驻罗德岛外派干员。 擅长防守，能同时牵制数个敌人，并拥有怪力，能用巨锤轻松击飞瘦弱的敌人。","cv":"久保百合花","profession":"tank","displayUrl":"arknights/official/pic/20210112/8752c3a0e09ab67178acebe117d536c1.png","camp":"PENGUIN_LOGISTICS"},
    {"name":"陈","nameEn":"CHEN","code":"LM04","intro":"陈，龙门高级警司，龙门近卫局特别督查组组长，毕业于维多利亚皇家近卫学校，成绩优异，表现突出。在龙门近卫局供职期间，力主取缔龙门境内非法活动，对抗暴力犯罪和有组织犯罪，追缉武装逃犯与国际重犯等行动，并取得多项重大成果。\n现作为特别人员协助罗德岛行动，并为现场提供战术指挥支援。","cv":"石上静香","profession":"warrior","displayUrl":"arknights/official/pic/20210112/87f341583ec61b4ce4f5b765464fe89d.png","camp":"LUNGMEN"},
    {"name":"星熊","nameEn":"HOSHIGUMA","code":"LM05","intro":"星熊，龙门近卫局特别任务组精英干员。存在数项指控记录。\n经龙门总督魏彦吾交涉，龙门近卫局依星熊的优异能力与良好表现，破格将其吸纳进近卫局特别督察组。在处理高危险性犯罪事件、要员保护、灾害紧急救援等领域表现出较高专业性。\n现作为重装干员协助罗德岛行动，并为现场提供战术执行与指挥支援。","cv":"安野希世乃","profession":"tank","displayUrl":"arknights/official/pic/20210112/22ab7b3789969d9c381b82d0f24c3c83.png","camp":"LUNGMEN"}
];

const particleDataLoader = ({fileName, key}) => {
    const particleData = require(`./arknights/static/data/${fileName}`);
    return {
        key: key,
        model: initParticleData(particleData),
    };
}

export async function main() {
    const meshParticle = initParticleData({
        size: { width: 820, height: 460 },
        count: 1008,
        points: fill(new Array(1008), 0).map(function(t, e) {
            return [(e % 42) * 20, 20 * Math.floor(e / 42), 126, 126, 126, 255];
        }),
    });
    ParticleLoader.main.setMode(EffectEnum.SPREAD).setModel(meshParticle).appear();

    const pData = [
        {
            key: "lungmen",
            fileName: "lungmen.data.json",
        },
        {
            key: "penguin",
            fileName: "penguin.data.json",
        },
        {
            key: "rhine",
            fileName: "rhine.data.json",
        },
        {
            key: "rhodes",
            fileName: "rhodes.data.json",
        },
        {
            key: "originiums",
            fileName: "story-1-originiums.data.json",
        },
        {
            key: "originium_arts",
            fileName: "story-2-originium_arts.data.json",
        },
        {
            key: "reunion",
            fileName: "story-3-reunion.data.json",
        },
        {
            key: "infected",
            fileName: "story-4-infected.data.json",
        },
        {
            key: "nomadic_city",
            fileName: "story-5-nomadic_city.data.json",
        },
        {
            key: "rhodes_island",
            fileName: "story-6-rhodes_island.data.json",
        },
    ].map(particleDataLoader);    

    const pTitleData = [
        {
            key: "infomation",
            fileName: "title-information.data.json",
        },
        {
            key: "media",
            fileName: "title-media.data.json",
        },
        {
            key: "staff",
            fileName: "title-staff.data.json",
        },
        {
            key: "world",
            fileName: "title-world.data.json",
        },
    ].map(particleDataLoader);
    const fontSize = parseInt(window.getComputedStyle(document.body).fontSize, 10);
    ParticleLoader.sub.setMode(EffectEnum.FIXED).setTransform(function() {
        return {
            x: Math.round(
                5.875 * fontSize - 0.3 * WebglContainer.instance.width
            ),
            y: Math.round(
                0.5 * WebglContainer.instance.height - 3.5 * fontSize
            ),
            sc: fontSize / 16,
            pointSize: 1,
        };
    }).setModel(pTitleData[0].model).appear();

    const faction = {
        "RHODES_ISLAND": pData.find(t => t.key === "rhodes"),
        "RHINE": pData.find(t => t.key === "rhine"),
        "PENGUIN_LOGISTICS": pData.find(t => t.key === "penguin"),
        "LUNGMEN": pData.find(t => t.key === "lungmen"),
    }

    const draw = new staffCharLoader(document.querySelector(".staffCharDraw"));
    draw.add();
    draw.getPreloadTasks(staffInfo.map(t => t.displayUrl || ""));

    setInterval(() => {
       const idx = random(0, staffInfo.length - 1);
       ParticleLoader.main.setModel(faction[staffInfo[idx].camp].model);
       ParticleLoader.sub.setModel(pTitleData[random(0, pTitleData.length - 1)].model);

       draw.transTo(staffInfo[idx].displayUrl, "next");
    }, 5000);
}

handlerInit();
background();
main();
