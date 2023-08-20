import "core-js/es";
import "regenerator-runtime/runtime";
import * as THREE from "three";
import anime from "animejs/lib/anime.es";
import {
    throttle, slice, fill, random, shuffle, flattenDepth, map,
} from "lodash";

/* Notes:
Mi=THREE ue=anime
Yi=_.slice Ne=_.throttle _i=_.fill oa=_.random ka=_.shuffle Ti=_.flattenDepth vi=_.map
*/

const particleUrl = "./arknights/static/particle.7ff7f9a6de6e31926ddb.png";
const fireflyUrl = "./arknights/static/firefly.5ec707a0de1eca4a0765.png";
const smokeUrl = "./arknights/static/smoke-texture.90db6d47c9dcb188bccb.png";

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
        [this.x, this.y, this.z] = t.point;
        [this.r, this.g, this.b, this.a] = t.color;
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
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    public shuffle? = (_model: ModelStruct) => {};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    public disappear? = (_model: ModelStruct) => {};
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
    speedRange: [number, number];
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
}
const animationHandler = new AnimationHandler();

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
}
const resizeHandler = new ResizeHandler();

// He
class ResponsiveModeHandler {
    public mode: "desktop" | "phone" = "desktop";
    private queue: ((mode?: string) => void)[] = [];
    private widthThrottle: number = 430;

    public init() {
        this.mode = window.innerWidth > this.widthThrottle ? "desktop" : "phone";
        resizeHandler.add(() => {
            const r = window.innerWidth;
            let updated = false;
            if (r > this.widthThrottle && this.mode === "phone") {
                this.mode = "desktop";
                updated = true;
            } else if (r <= this.widthThrottle && this.mode === "desktop") {
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
}
const responsiveModeHandler = new ResponsiveModeHandler();

// Li
class WebglContainer {
    private static _instance: WebglContainer;

    public canvas: HTMLCanvasElement;
    public scene: THREE.Scene = new THREE.Scene();
    public camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
    public renderer: THREE.WebGLRenderer;
    public fitViewport: () => void;
    public update: () => void;

    public constructor() {
        this.fitViewport = throttle(() => {
            if (this.canvas.width !== this.resoluteWidth || this.canvas.height !== this.resoluteHeight) {
                this.renderer.setSize(this.resoluteWidth, this.resoluteHeight, false);
                this.camera.near = 110;
                this.camera.far = 1e3;
                this.camera.aspect = this.width / this.height;
                this.camera.fov = THREE.MathUtils.radToDeg(2 * Math.atan(this.height / 2 / 160));
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
        return responsiveModeHandler.mode === "desktop"
            ? this.canvas.clientWidth
            : Math.round(this.canvas.clientWidth * window.devicePixelRatio);
    }
    public get resoluteHeight() {
        return responsiveModeHandler.mode === "desktop"
            ? this.canvas.clientHeight
            : Math.round(this.canvas.clientHeight * window.devicePixelRatio);
    }
    public stop() {
        animationHandler.remove(this.update);
    }
}

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
                throttle((evt: MouseEvent | TouchEvent) => {
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
                    let targets: EventTarget[];
                    if (evt.composedPath !== null && evt.composedPath !== undefined) {
                        targets = evt.composedPath() || [];
                    } else {
                        targets = [];
                    }
                    let flag = false;
                    for (let o = 0; o < 3; ++o) {
                        const s = targets[o] as HTMLElement;
                        const n = s.dataset;
                        const cursorValue = n === null || undefined === n ? undefined : n.cursor;
                        const tagNames = ["A", "BUTTON", "INPUT"];

                        if (cursorValue === "pointer" || tagNames.includes(s.tagName)) {
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
                    if (responsiveModeHandler.mode === "phone") {
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
}
const touchableHandler = new TouchableHandler();

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
    const { pointIdx } = particle;
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
    const touchHypotenuse = Math.sqrt(touchOffsetX * touchOffsetX + touchOffsetY * touchOffsetY);
    const touchHypotenuseFactor = 1 / (1 + touchHypotenuse) / (1 + touchHypotenuse);
    const transformedX = transform.sc * x + transform.x - particle.x;
    const transformedY = transform.sc * y + transform.y - particle.y;
    const transformedZ = z - particle.z;

    particle.x += transformedX * i + factor * touchOffsetX * touchHypotenuseFactor;
    particle.y += transformedY * i + factor * touchOffsetY * touchHypotenuseFactor;
    particle.z += transformedZ * i;
    particle.point.set([particle.x, particle.y, particle.z]);

    particle.r += (r - particle.r) * i;
    particle.g += (g - particle.g) * i;
    particle.b += (b - particle.b) * i;
    particle.a += (a - particle.a) * i;
    particle.color.set([particle.r, particle.g, particle.b, particle.a]);
}
const ParticalEffect = {
    [EffectEnum.FIXED]: (particle: ParticleStruct, model: ModelStruct, transform: TransformStruct) => {
        if (!model) {
            return;
        }
        const i = 1 / particle.speed;
        if (particle.pointIdx >= model.count) {
            particle.a += (-1 - particle.a) * i;
            particle.color.set([particle.r, particle.g, particle.b, particle.a]);
            return;
        }
        const { pointIdx } = particle;
        const pointData = slice(model.points.slice(7 * pointIdx, 7 * pointIdx + 7), 0, 7);
        const x = pointData[0];
        const y = pointData[1];
        const z = pointData[2];
        const r = pointData[3];
        const g = pointData[4];
        const b = pointData[5];
        const a = pointData[6];
        const transformedX = transform.sc * x + transform.x - particle.x;
        const transformedY = transform.sc * y + transform.y - particle.y;
        const transformedZ = z - particle.z;

        particle.x += transformedX * i;
        particle.y += transformedY * i;
        particle.z += transformedZ * i;
        particle.point.set([particle.x, particle.y, particle.z]);

        particle.r += (r - particle.r) * i;
        particle.g += (g - particle.g) * i;
        particle.b += (b - particle.b) * i;
        particle.a += (a - particle.a) * i;
        particle.color.set([particle.r, particle.g, particle.b, particle.a]);
    },
    [EffectEnum.GATHER]: (particle: ParticleStruct, model: ModelStruct, transform: TransformStruct) => {
        GatherOrSpread(particle, model, transform, 40);
    },
    [EffectEnum.SPREAD]: (particle: ParticleStruct, model: ModelStruct, transform: TransformStruct) => {
        GatherOrSpread(particle, model, transform, -100);
    },
    [EffectEnum.PERSPECTIVE]: (particle: ParticleStruct, model: ModelStruct, transform: TransformStruct) => {
        if (!model) {
            return;
        }
        const frictionCoefficient = 1 / 3e3;
        const interactionCoefficient = 0.03;
        const displacementCoefficient = 0.08;
        if (particle.pointIdx >= model.count) {
            particle.a += (-1 - particle.a) * displacementCoefficient;
            particle.color.set([particle.r, particle.g, particle.b, particle.a]);
            return;
        }
        const { pointIdx } = particle;
        const pointData = slice(model.points.slice(7 * pointIdx, 7 * pointIdx + 7), 0, 7);
        const x = pointData[0];
        const y = pointData[1];
        const z = pointData[2];
        const r = pointData[3];
        const g = pointData[4];
        const b = pointData[5];
        const a = pointData[6];

        const touchInteractionAngleX = -Math.atan(touchableHandler.x * interactionCoefficient * frictionCoefficient);
        const transformedX = transform.sc * x + transform.x;
        const touchInteractionFactorX = transformedX * Math.cos(touchInteractionAngleX);
        const touchInteractionFactorY = transformedX * Math.sin(touchInteractionAngleX);

        const touchInteractionAngleY = -Math.atan(touchableHandler.y * interactionCoefficient * frictionCoefficient);
        const transformedY = transform.sc * y + transform.y;
        const touchInteractionFactorY2 = transformedY * Math.cos(touchInteractionAngleY);
        const pointZShifted = z + touchInteractionFactorY + transformedY * Math.sin(touchInteractionAngleY);

        const displacementX = touchInteractionFactorX - touchableHandler.x * interactionCoefficient - particle.x;
        const displacementY = touchInteractionFactorY2 - touchableHandler.y * interactionCoefficient - particle.y;

        particle.x += displacementX * displacementCoefficient;
        particle.y += displacementY * displacementCoefficient;
        particle.z += (pointZShifted - particle.z) * displacementCoefficient;
        particle.point.set([particle.x, particle.y, particle.z]);

        particle.r += (r - particle.r) * displacementCoefficient;
        particle.g += (g - particle.g) * displacementCoefficient;
        particle.b += (b - particle.b) * displacementCoefficient;
        particle.a += (a - particle.a) * displacementCoefficient;
        particle.color.set([particle.r, particle.g, particle.b, particle.a]);
    },
};

class ParticleLoader {
    public static _main: ParticleLoader;
    public static _sub: ParticleLoader;
    public mode: EffectEnum = EffectEnum.SPREAD;
    public transform: TransformStruct = {
        x: 0, y: 0, sc: 1, pointSize: 3,
    };
    public uPointSize: THREE.Uniform<number> = new THREE.Uniform(1);
    public aPosition: THREE.BufferAttribute;
    public aColor: THREE.BufferAttribute;
    public model: ModelStruct;
    public particles: ParticleStruct[];

    // eslint-disable-next-line class-methods-use-this
    public getUpdatedTransform: () => TransformStruct | undefined = () => undefined;
    public updateTransform: () => ParticleLoader;
    public update: () => void;

    public constructor(config: ParticleLoaderConfig) {
        const { particleNum } = config;
        const [minSpeed, maxSpeed] = config.speedRange;
        this.updateTransform = () => {
            const transform = this.getUpdatedTransform() || {
                x: 0,
                y: 0,
                sc: 1,
                pointSize: 3,
            };
            const { x } = transform;
            const { y } = transform;
            const { sc } = transform;
            const { pointSize } = transform;
            this.transform.x = x !== null ? x : this.transform.x;
            this.transform.y = y !== null ? y : this.transform.y;
            this.transform.sc = sc !== null ? sc : this.transform.sc;
            this.uPointSize.value = pointSize !== null ? pointSize : this.transform.pointSize;
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
        this.particles = fill(new Array(particleNum), 0).map((_val, idx) => {
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
        new THREE.TextureLoader().loadAsync(particleUrl).then((t) => {
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    uTexture: new THREE.Uniform(t),
                    uPointSize: this.uPointSize,
                },
                vertexShader: `
                attribute vec4 color;
                varying vec4 vColor;
                uniform float uPointSize;
                void main() {
                    vColor = color;
                    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                    gl_PointSize = uPointSize;
                    gl_Position = projectionMatrix * mvPosition;
                }
                `,
                fragmentShader: `
                uniform sampler2D uTexture;
                varying vec4 vColor;
                void main() {
                    vec4 texture = texture2D(uTexture, gl_PointCoord);
                    gl_FragColor = vColor * texture;
                    // gl_FragColor = vColor;
                }
                `,
                transparent: true,
                depthTest: false,
            });
            const points = new THREE.Points(geo, material);
            WebglContainer.instance.scene.add(points);
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

function initParticleData(particle: ParticleStoreStruct, offset: [number, number] = [0.5, 0.5]): ModelStruct {
    const [offsetFactorX, offsetFactorY] = offset;
    const point = particle.points.map((pt) => {
        const [x, y, a] = pt;
        return [
            x - offsetFactorX * particle.size.width,
            offsetFactorY * particle.size.height - y,
            0,
            1,
            1,
            1,
            (1 * (a || 255)) / 255,
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
            for (let i = 0; i < this.count; i++) {
                const x = this.points[i * 7 + 0];
                const y = this.points[i * 7 + 1];
                this.points[i * 7 + 0] = x + 500 * (Math.random() - 0.5);
                this.points[i * 7 + 1] = y + 500 * (Math.random() - 0.5);
                this.points[i * 7 + 2] = 0.5;
                this.points[i * 7 + 3] = 0.5;
                this.points[i * 7 + 4] = 0.5;
                this.points[i * 7 + 5] = 0.5;
                this.points[i * 7 + 6] = -0.5;
            }
            return this;
        },
    };
    ret.shuffle();
    return ret;
}

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
class StaffCharLoader {
    public canvas: HTMLCanvasElement;
    public active: boolean = false;
    public animeRunning: boolean = false;
    public tex: THREE.Texture = null;
    public loader: THREE.TextureLoader = new THREE.TextureLoader();
    public itemWidth: number;
    public itemHeight: number;
    public itemPosition: THREE.Vector2;
    public itemTransOffset: number;
    public itemGradient: boolean = false;
    public renderer: THREE.WebGLRenderer;
    public emptyTexture: THREE.Texture = new THREE.Texture();
    public charTextureMap: Record<string, THREE.Texture> = {};
    public geo: THREE.PlaneGeometry;
    public item: THREE.Mesh;
    public mat: THREE.ShaderMaterial;
    public resize: () => void;
    public update: () => void;
    public checkAndRemove: () => void;

    public constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
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
            fragmentShader: `
            uniform sampler2D u_texture;
            uniform float black;
            uniform float opacity;
            uniform bool gradient;
            varying vec2 vUv;
            
            void main() {
               float o = gradient ? opacity * min(vUv.y * 2.0 - 0.5, 1.0) : opacity;
               gl_FragColor = texture2D(u_texture, vUv) * vec4(black, black, black, o);
            }
            `,
            vertexShader: `
            varying vec2 vUv;

            void main()
            {
                vUv = uv;
                vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                gl_Position = projectionMatrix * mvPosition;
            }
            `,
            uniforms: {
                u_texture: { value: this.emptyTexture },
                black: { value: 1 },
                opacity: { value: 0 },
                gradient: { value: this.itemGradient },
            },
        });
        this.item = new THREE.Mesh(this.geo, this.mat);
    }
    public resetMode(mode: "desktop" | "phone") {
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
        return Promise.all(imageList.map(async (textureUrl) => {
            const t = await this.loader.loadAsync(textureUrl);
            t.minFilter = THREE.LinearFilter;
            this.charTextureMap[textureUrl] = t;
        }));
    }
    public async init(textureUrl: string) {
        this.setDisplay(textureUrl);
        this.resize();
        this.animeRunning = true;
        await this.animeEnter("next");
        this.animeRunning = false;
        this.checkAndRemove();
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
    public async setDisplay(textureUrl: string) {
        let texutre = this.charTextureMap[textureUrl];
        if (!texutre) {
            texutre = await this.loader.loadAsync(textureUrl);
            this.charTextureMap[textureUrl] = texutre;
        }
        this.updateDisplayTexture(texutre);
    }
    public updateDisplayTexture(texture: THREE.Texture) {
        this.tex = texture;
        this.mat.uniforms.u_texture.value = texture;
        const { image } = texture;
        this.item.scale.set(image.width / this.itemWidth, image.height / this.itemHeight, 1);
    }
    public async transTo(textureUrl: string, direction: "prev" | "next" = "prev") {
        this.animeRunning = true;
        await this.animeExit(direction);
        await this.setDisplay(textureUrl);
        await this.animeEnter(direction);
        this.animeRunning = false;
        this.checkAndRemove();
    }
    public animeEnter(direction: "prev" | "next") {
        const progress = { val: 0 };
        const factor = direction === "next" ? 1 : -1;
        return anime({
            duration: 800,
            targets: progress,
            val: 1,
            easing: "easeOutQuart",
            update: () => {
                this.item.position.x = this.itemPosition.x + (1 - progress.val) * factor * this.itemTransOffset;
                this.item.rotation.y = (1 - progress.val) * factor * 0.08;
                this.mat.uniforms.opacity.value = progress.val;
                const black = Math.max(2 * progress.val - 1, 0);
                this.mat.uniforms.black.value = black;
            },
        }).finished;
    }
    public animeExit(direction: "prev" | "next") {
        const progress = { val: 0 };
        const factor = direction === "next" ? 1 : -1;
        return anime({
            duration: 800,
            targets: progress,
            val: 1,
            easing: "easeOutQuart",
            update: () => {
                this.item.position.x = this.itemPosition.x - progress.val * factor * this.itemTransOffset;
                this.item.rotation.y = progress.val * factor * -0.08;
                this.mat.uniforms.opacity.value = 1 - progress.val;
                const black = Math.min(1 - 2 * progress.val, 1);
                this.mat.uniforms.black.value = black;
            },
        }).finished;
    }
}

// gl
class FireFlyLoader {
    private static _instance: FireFlyLoader;
    public update: () => void;
    public points: FireFlyStruct[];
    public globalOpacity: number = 0;
    public aPosition: THREE.BufferAttribute;
    public aOpacity: THREE.BufferAttribute;

    public constructor(cnt: number = 20) {
        const randX = () => (Math.random() - 0.5) * (0.9 * WebglContainer.instance.width);
        const randY = () => (Math.random() - 2.5) * (0.2 * WebglContainer.instance.height);
        const randZ = () => random(-200, 200);
        const randLife = () => random(60, 1200);

        this.update = () => {
            for (const point of this.points) {
                if (point.life--) {
                    point.y += point.speed;
                    if (point.life < 30) {
                        point.opacity += 0.1 * (0 - point.opacity);
                    } else {
                        point.opacity += 0.1 * (this.globalOpacity - point.opacity);
                    }
                } else {
                    point.x = randX();
                    point.y = randY();
                    point.z = randZ();
                    point.life = randLife();
                    point.opacity = 0;
                }
                point.aPosition.set([point.x, point.y, point.z]);
                point.aOpacity.set([point.opacity]);
            }
            this.aPosition.needsUpdate = true;
            this.aOpacity.needsUpdate = true;
        };
        const fireFlyArray = fill(new Array(cnt), 0);
        const opacityBuffer = Float32Array.from(fireFlyArray);
        const positionBuffer = Float32Array.from(flattenDepth(fireFlyArray.map(() => [randX(), randY(), randZ()]), 1));
        this.aPosition = new THREE.BufferAttribute(positionBuffer, 3);
        this.aOpacity = new THREE.BufferAttribute(opacityBuffer, 1);
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", this.aPosition);
        geo.setAttribute("opacity", this.aOpacity);
        this.points = fireFlyArray.map((_value, index) => ({
            x: positionBuffer[3 * index],
            y: positionBuffer[3 * index + 1],
            z: positionBuffer[3 * index + 2],
            opacity: opacityBuffer[index],
            size: 2,
            speed: 0.1 * random(4, 8),
            life: randLife(),
            aPosition: positionBuffer.subarray(3 * index, 3 * index + 3),
            aOpacity: opacityBuffer.subarray(index, index + 1),
        }));
        new THREE.TextureLoader().load(fireflyUrl, (t) => {
            const shaderMaterial = new THREE.ShaderMaterial({
                uniforms: { uTexture: new THREE.Uniform(t) },
                vertexShader: `
                attribute float opacity;
                varying float vOpacity;
                void main() {
                    vOpacity = opacity;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = 7.0;
                    gl_Position = projectionMatrix * mvPosition;
                }
                `,
                fragmentShader: `
                uniform sampler2D uTexture;
                varying float vOpacity;
                void main() {
                    vec4 texture = texture2D(uTexture, gl_PointCoord.xy);
                    gl_FragColor = vec4(texture.rgb, texture.a * vOpacity);
                }
                `,
                transparent: true,
                depthTest: false,
            });
            const points = new THREE.Points(geo, shaderMaterial);
            WebglContainer.instance.scene.add(points);
            this.fire();
        });
    }
    public static get instance() {
        if (!FireFlyLoader._instance) {
            FireFlyLoader._instance = new FireFlyLoader(20);
        }
        return FireFlyLoader._instance;
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
    public getUpdatedTransform: () => TransformStruct | undefined;
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
        this.updateTransform = () => {
            const transform = this.getUpdatedTransform() || { x: 0, y: 0, sc: 1 };
            const { x } = transform;
            const { y } = transform;
            const { sc } = transform;
            this.uOrigin.value = [x, y, sc];
            return this;
        };
        this.geometry = new THREE.IcosahedronGeometry(400, 1);
        this.uOpacity = new THREE.Uniform(this.globalOpacity);
        this.uOrigin = new THREE.Uniform([0, 0, 1]);
        new THREE.TextureLoader().loadAsync(particleUrl).then((t) => {
            const color = new THREE.Uniform(new THREE.Color(0x968414));
            const texutre = new THREE.Uniform(t);
            const vertexShader = `
            uniform vec3 uOrigin;
            varying float z;
            void main() {
                z = position.z;
                vec4 mvPosition = modelViewMatrix * vec4( position.xy * uOrigin.z + uOrigin.xy, 0.0, 1.0 );
                gl_PointSize = 16.0 / uOrigin.z;
                gl_Position = projectionMatrix * mvPosition;
            }
            `;
            const fragmentShaderColor = `
            uniform vec3 uColor;
            varying float z;
            uniform float uOpacity;
            void main() {
                gl_FragColor = vec4(uColor, ((z / 400.0) + 0.5) * uOpacity);
            }
            `;
            const fragmentShaderTexture = `
            uniform vec3 uColor;
            varying float z;
            uniform sampler2D uTexture;
            uniform float uOpacity;
            void main() {
                vec4 texture = texture2D(uTexture, gl_PointCoord.xy);
                gl_FragColor = texture * vec4(uColor, ((z / 400.0) + 0.5) * uOpacity);
            }`;
            const lineSegments = new THREE.LineSegments(
                this.geometry,
                new THREE.ShaderMaterial({
                    uniforms: {
                        uColor: color,
                        uOpacity: this.uOpacity,
                        uOrigin: this.uOrigin,
                    },
                    vertexShader,
                    fragmentShader: fragmentShaderColor,
                    transparent: true,
                    depthTest: false,
                })
            );
            const points = new THREE.Points(
                this.geometry,
                new THREE.ShaderMaterial({
                    uniforms: {
                        uColor: color,
                        uTexture: texutre,
                        uOpacity: this.uOpacity,
                        uOrigin: this.uOrigin,
                    },
                    vertexShader,
                    fragmentShader: fragmentShaderTexture,
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
        PolygonLoader.instance.setTransform(() => {
            if (responsiveModeHandler.mode === "desktop") {
                return {
                    x: 0.1 * -WebglContainer.instance.width,
                    y: 0.5 * WebglContainer.instance.height + (0.2 * (1 - offset) + 0.3) * PolygonLoader.instance.height,
                    sc: 1,
                };
            }
            return {
                x: 0,
                y: 0.5 * WebglContainer.instance.height + (0.2 * (1 - offset) + 0.3) * PolygonLoader.instance.height * 0.6,
                sc: 0.6,
            };
        });
    }
}

// Ci
class LqWebglContainer {
    private static _instance: LqWebglContainer;
    private fitViewport: () => void;
    private update: () => void;
    private canvas: HTMLCanvasElement;
    public scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;

    constructor() {
        this.fitViewport = () => {
            const n = this.resoluteWidth;
            const r = this.resoluteHeight;
            if (this.canvas.width === n && this.canvas.height === r) {
                this.renderer.setSize(n, r, false);
            }
        };

        this.update = () => {
            this.fitViewport();
            this.renderer.render(this.scene, WebglContainer.instance.camera);
        };

        this.canvas = document.getElementById("lq-webgl") as HTMLCanvasElement;
        if (!this.canvas) {
            throw new Error("no canvas element");
        }

        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true,
        });

        this.fire();
    }

    get width(): number {
        return this.canvas.clientWidth;
    }

    get height(): number {
        return this.canvas.clientHeight;
    }

    get resoluteWidth(): number {
        return Math.round(this.canvas.clientWidth / 2);
    }

    get resoluteHeight(): number {
        return Math.round(this.canvas.clientHeight / 2);
    }

    public fire(): void {
        animationHandler.add(this.update);
    }

    public stop(): void {
        animationHandler.remove(this.update);
    }

    public static get instance(): LqWebglContainer {
        if (!LqWebglContainer._instance) {
            LqWebglContainer._instance = new LqWebglContainer();
        }
        return LqWebglContainer._instance;
    }

    public randX() {
        return (Math.random() - 0.5) * this.resoluteWidth;
    }
    public randY() {
        return (0.5 - Math.random()) * this.resoluteHeight;
    }
}

interface PointLight {
    position: [number, number, number];
    disappearAt: number;
    strength: number;
}

interface SpotLight {
    position: [number, number, number];
    lookAt: [number, number, number];
    strength: number;
}

function generatePointLightDesktop() : PointLight {
    const t = LqWebglContainer.instance;
    const e = t.resoluteWidth;
    const n = t.resoluteHeight;
    return {
        position: [1.1 * e, 0.8 * n, 0],
        disappearAt: 1.2 * n,
        strength: 0.3,
    };
}
function generateSpotLightDesktop(): SpotLight[] {
    const t = LqWebglContainer.instance;
    const e = t.resoluteWidth;
    const n = t.resoluteHeight;
    return [
        {
            position: [1.3 * e, 1 * n, 0],
            lookAt: [0.6 * e, 0.8 * n, 0],
            strength: 0.6,
        },
        {
            position: [1.4 * e, 0.9 * n, 0],
            lookAt: [0.2 * e, 0.4 * n, 0],
            strength: 0.8,
        },
        {
            position: [1.3 * e, 0.75 * n, 0],
            lookAt: [0.6 * e, 0.35 * n, 0],
            strength: 0.6,
        },
        {
            position: [1.3 * e, 0.7 * n, 0],
            lookAt: [0.7 * e, 0.25 * n, 0],
            strength: 0.2,
        },
    ];
}
function generatePointLightPhone(): PointLight {
    const t = LqWebglContainer.instance;
    const e = t.resoluteWidth;
    const n = t.resoluteHeight;
    return {
        position: [0 * e, 1.1 * n, 0],
        disappearAt: 1.2 * n,
        strength: 0.3,
    };
}
function generateSpotLightPhone(): SpotLight[] {
    const t = LqWebglContainer.instance;
    const e = t.resoluteWidth;
    const n = t.resoluteHeight;
    return [
        {
            position: [-0.1 * e, 1.4 * n, 0],
            lookAt: [0.1 * e, 0.8 * n, 0],
            strength: 0.4,
        },
        {
            position: [-0.1 * e, 1.6 * n, 0],
            lookAt: [0.5 * e, 0.6 * n, 0],
            strength: 0.6,
        },
        {
            position: [0 * e, 1.6 * n, 0],
            lookAt: [0.7 * e, 0.7 * n, 0],
            strength: 0.3,
        },
        {
            position: [0.3 * e, 1.3 * n, 0],
            lookAt: [0.8 * e, 0.8 * n, 0],
            strength: 0.2,
        },
    ];
}
function updateParticleProperties(point: SmokePointStruct, position: [number, number, number]) {
    const n = position[0];

    point.x += (Math.random() + 0.1) * Math.sign(n - point.x - 0.5 * LqWebglContainer.instance.resoluteWidth);
    point.y += Math.random() + 0.05;

    if (
        Math.abs(point.x) > 0.6 * LqWebglContainer.instance.resoluteWidth
        || Math.abs(point.y) > 0.7 * LqWebglContainer.instance.resoluteHeight
    ) {
        point.opacity = Math.max(0, point.opacity - 0.01);
        if (point.opacity <= 0) {
            point.x = LqWebglContainer.instance.randX();
            point.y = LqWebglContainer.instance.randY();
        }
    } else {
        point.opacity = Math.min(1, point.opacity + 0.01);
    }

    point.rotate += 0.006 * point.vRtt;

    point.bufferPosition.set([point.x, point.y]);
    point.bufferOpacity.set([point.opacity]);
    point.bufferRotate.set([point.rotate]);
}

interface SmokePointStruct {
    x: number;
    y: number;
    rotate: number;
    opacity: number;
    size: number;
    vRtt: number;
    bufferPosition: Float32Array;
    bufferRotate: Float32Array;
    bufferOpacity: Float32Array;
    bufferSize: Float32Array;
}

// Bi
class SomkeLoader {
    private static _instance: SomkeLoader;
    private onResize: () => void;
    private update: () => void;
    private uSpotLights: THREE.Uniform<SpotLight[]> | null;
    private uPointLight: THREE.Uniform<PointLight> | null;
    private uOpacity: THREE.Uniform<number>;
    private uResolution: THREE.Uniform<number>;
    private aPosition: THREE.BufferAttribute;
    private aRotate: THREE.BufferAttribute;
    private aOpacity: THREE.BufferAttribute;
    private aSize: THREE.BufferAttribute;
    private points: SmokePointStruct[];
    private opacityAnimation: anime.AnimeInstance = null;

    constructor(t: number = 30) {
        this.uSpotLights = new THREE.Uniform(null);
        this.uPointLight = new THREE.Uniform(null);
        this.uOpacity = new THREE.Uniform(0);
        this.uResolution = new THREE.Uniform(1);

        this.onResize = () => {
            if (responsiveModeHandler.mode === "desktop") {
                this.uSpotLights.value = generateSpotLightDesktop();
                this.uPointLight.value = generatePointLightDesktop();
            } else if (responsiveModeHandler.mode === "phone") {
                this.uSpotLights.value = generateSpotLightPhone();
                this.uPointLight.value = generatePointLightPhone();
            }

            const size = Math.min(LqWebglContainer.instance.width, LqWebglContainer.instance.height);
            this.aSize.set(
                map(this.aSize.array, () => (Math.random() + 1.5) * size)
            );
            this.aSize.needsUpdate = true;
        };

        this.update = () => {
            this.uResolution.value = 0.5;

            for (const point of this.points) {
                updateParticleProperties(point, this.uPointLight.value.position);
            }

            this.aPosition.needsUpdate = true;
            this.aOpacity.needsUpdate = true;
            this.aRotate.needsUpdate = true;
        };

        const geo = new THREE.BufferGeometry();
        const pointArray = fill(new Array(t), 0);

        const positionBuffer = Float32Array.from(
            flattenDepth(pointArray.map(() => [LqWebglContainer.instance.randX(), LqWebglContainer.instance.randY(), 0]), 1)
        );

        this.aPosition = new THREE.BufferAttribute(positionBuffer, 3);
        geo.setAttribute("position", this.aPosition);

        const rotateBuffer = Float32Array.from(pointArray).map(() => 2 * Math.random() * Math.PI);

        this.aRotate = new THREE.BufferAttribute(rotateBuffer, 1);
        geo.setAttribute("rotate", this.aRotate);

        const opacityBuffer = Float32Array.from(pointArray).map(() => 0);

        this.aOpacity = new THREE.BufferAttribute(opacityBuffer, 1);
        geo.setAttribute("opacity", this.aOpacity);

        const s = Float32Array.from(pointArray).map(() => 1);

        this.aSize = new THREE.BufferAttribute(s, 1);
        geo.setAttribute("size", this.aSize);

        this.points = pointArray.map((val, e) => ({
            x: positionBuffer[3 * e],
            y: positionBuffer[3 * e + 1],
            rotate: rotateBuffer[e],
            opacity: opacityBuffer[e],
            size: s[e],
            vRtt: Math.random() - 0.5,
            bufferPosition: positionBuffer.subarray(3 * e, 3 * e + 3),
            bufferRotate: rotateBuffer.subarray(e, e + 1),
            bufferOpacity: opacityBuffer.subarray(e, e + 1),
            bufferSize: s.subarray(e, e + 1),
        }));

        const spotLights = generateSpotLightDesktop();
        new THREE.TextureLoader().load(smokeUrl, (texture) => {
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    uTexture: new THREE.Uniform(texture),
                    uSpotLights: this.uSpotLights,
                    uPointLight: this.uPointLight,
                    uOpacity: this.uOpacity,
                    uResolution: this.uResolution,
                },
                vertexShader: `
                attribute float rotate;
                attribute float size;
                uniform float uResolution;
                varying mat2 vRotateMat;
                attribute float opacity;
                varying float vOpacity;
                void main() {
                    vOpacity = opacity;
                    vRotateMat = mat2(cos(rotate), sin(rotate), -sin(rotate), cos(rotate));
                    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                    gl_PointSize = uResolution * size;
                    gl_Position = projectionMatrix * mvPosition;
                }
                `,
                fragmentShader: `
                #define SPOT_LIGHTS_LENGTH ${spotLights.length}
                struct SpotLight {
                    vec3  position;
                    vec3  lookAt;
                    float strength;
                };
                uniform SpotLight uSpotLights[SPOT_LIGHTS_LENGTH];
                struct PointLight {
                    vec3  position;
                    float disappearAt;
                    float strength;
                };
                uniform PointLight uPointLight;
                uniform sampler2D uTexture;
                uniform float uOpacity;
                varying mat2 vRotateMat;
                varying float vOpacity;
                float adaptSpotLight(SpotLight light) {
                    vec3 lightLine = light.position - light.lookAt;
                    vec3 dir = light.position - gl_FragCoord.xyz;
                    float lDir = length(dir);
                    float theta = dot(normalize(lightLine), normalize(dir));
                    if (theta < 0.0) {
                        return 0.0;
                    }
                    float distance = lDir * theta;
                    float attenuation = max(0.0, length(lightLine) * 0.2 / (lDir + 1.0));
                    if (attenuation < 0.05) {
                       return 0.0;
                    }
                    float height = lDir * sqrt(1.0 - pow(theta, 2.0));
                    float intensity = (atan((-height + distance * 0.03) * 60.0 / distance) + 1.4) * 0.3;
                    return max(0.0, intensity * attenuation * light.strength);
                }
                float adaptPointLight(PointLight light) {
                    vec3 dir = light.position - gl_FragCoord.xyz;
                    float attenuation = max(0.0, light.disappearAt * 0.2 / (length(dir) + 1.0) );
                    return max(0.0, attenuation * light.strength);
                }
                void main() {
                    vec4 texture = texture2D(uTexture, (gl_PointCoord.xy - 0.5) * vRotateMat + 0.5);
                    float result = 0.0;
                    if(texture.a > 0.01) {
                       for (int i = 0; i < SPOT_LIGHTS_LENGTH; i++) {
                           result += adaptSpotLight(uSpotLights[i]);
                       }
                       result += adaptPointLight(uPointLight);
                    }
                    gl_FragColor = vec4(min(result, 1.0) * texture.rgb, texture.a * uOpacity * vOpacity);
                }
                `,
                transparent: true,
                depthTest: false,
            });

            const points = new THREE.Points(geo, material);
            LqWebglContainer.instance.scene.add(points);
            this.fire();
        });
    }

    public fire(): void {
        animationHandler.add(this.update);
        this.onResize();
        resizeHandler.add(this.onResize);
    }

    public stop(): void {
        animationHandler.remove(this.update);
        resizeHandler.remove(this.onResize);
    }

    public disappear(): void {
        if (this.opacityAnimation !== null) {
            this.opacityAnimation.pause();
        }

        this.opacityAnimation = anime({
            targets: this.uOpacity,
            value: 0,
            easing: "linear",
            duration: 500,
            complete: () => {
                this.stop();
                requestAnimationFrame(() => LqWebglContainer.instance.stop());
            },
        });
    }

    public appear(): void {
        if (this.opacityAnimation !== null) {
            this.opacityAnimation.pause();
        }

        this.fire();
        LqWebglContainer.instance.fire();

        this.opacityAnimation = anime({
            targets: this.uOpacity,
            value: 0.8,
            easing: "linear",
            duration: 500,
        });
    }

    public static get instance(): SomkeLoader {
        if (!SomkeLoader._instance) {
            SomkeLoader._instance = new SomkeLoader();
        }
        return SomkeLoader._instance;
    }
}

const staffInfo = [
    {
        name: "阿米娅", nameEn: "AMIYA", code: "ROO1", intro: "罗德岛的公开领袖，在内部拥有最高执行权。虽然，从外表上看起来仅仅是个不成熟的少女，实际上，她却是深受大家信任的合格的领袖。现在，阿米娅正带领着罗德岛，为了感染者的未来，为了让这片大地挣脱矿石病的阴霾而不懈努力。", cv: "黑泽朋世", profession: "caster", displayUrl: "arknights/official/pic/20210112/f40da70e0e3d2c89a89aa97c44b6498c.png", camp: "RHODES_ISLAND",
    },
    {
        name: "凯尔希", nameEn: "KAL'TSIT", code: "B003", intro: "罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。", cv: "日笠阳子", profession: "medic", displayUrl: "arknights/official/pic/20210112/f5d1be51761704001cc9e7bd7529c849.png", camp: "RHODES_ISLAND",
    },
    {
        name: "红", nameEn: "PROJEKT RED", code: "SW01", intro: "红，身份不明，履历缺失，由凯尔希医生接收、监护并担保。\n于机动作战，特种作战与隐秘作战中表现出极高天赋，成绩斐然。\n现于凯尔希医生的指导下，作为特种干员为罗德岛提供服务。", cv: "小清水亚美", profession: "special", displayUrl: "arknights/official/pic/20210112/eec21ae5cb8cce8872b07926a46eb2ed.png", camp: "RHODES_ISLAND",
    },
    {
        name: "杜宾", nameEn: "DOBERMANN", code: "R100", intro: "前玻利瓦尔军人，加入罗德岛后担任教官，主要负责基层和新晋干员培训，必要时刻，也会负责对俘虏的审讯。 \n熟悉各种规模的军事行动，自身作为士兵的素养也极高，作为近卫干员，在第一线带领队伍冲锋陷阵。", cv: "种崎敦美", profession: "warrior", displayUrl: "arknights/official/pic/20210112/774aa017f2a8a5654d661cda1051beea.png", camp: "RHODES_ISLAND",
    },
    {
        name: "临光", nameEn: "NEARL", code: "F002", intro: "临光，前卡西米尔耀骑士，感染者援助团体“使徒”的一员。在掩护己方队员、机动作战、歼灭战与开阔地带作战中体现出极高的战斗技巧和个人军事素养。\n现于罗德岛作为重装干员行动，并于现场提供战术指挥支援。", cv: "佐仓绫音", profession: "tank", displayUrl: "arknights/official/pic/20210112/18469152aa1d779c037a259c61e60671.png", camp: "RHODES_ISLAND",
    },
    {
        name: "赫默", nameEn: "SILENCE", code: "RL01", intro: "赫默，莱茵生命有限公司源石有关项目研究员，曾主管数项未知应用研究，同期亦主持数个矿石病临床试验项目。 \n现于罗德岛为多项行动提供战场医疗救护服务。", cv: "鬼头明里", profession: "medic", displayUrl: "arknights/official/pic/20210112/21c96f723a4638c0103798c65b4f5195.png", camp: "RHINE",
    },
    {
        name: "伊芙利特", nameEn: "IFRIT", code: "RL03", intro: "伊芙利特，前莱茵生命医疗对象，重度感染者。拥有极高的源石适应性，伴随有多发性点火现象。进入莱茵生命前的履历缺失。\n现于罗德岛接受治疗，由医疗干员赫默担任监护与担保人。", cv: "花守由美里", profession: "caster", displayUrl: "arknights/official/pic/20210112/5f84a8f3c8deded1bf8dfc28b2bd7146.png", camp: "RHINE",
    },
    {
        name: "白面鸮", nameEn: "PTILOPSIS", code: "RL04", intro: "白面鸮，前莱茵生命公司，数据维护专员。在医疗类源石技艺领域取得不菲成就，于医疗数据维护，常规医疗方案应用，多项目医疗行为等相关领域，拥有丰富经验。 \n现于罗德岛担任医疗干员，亦就职于医疗部门，某临床实验小组。同时，为罗德岛提供若干项医疗项目的相关辅助工作。", cv: "金元寿子", profession: "medic", displayUrl: "arknights/official/pic/20210112/aad79b4cc62d3d7adc2948a0990ebca1.png", camp: "RHINE",
    },
    {
        name: "德克萨斯", nameEn: "TEXAS", code: "PL02", intro: "企鹅物流员工，单兵作战能力出类拔萃。 \n于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛的多项行动提供协助。", cv: "田所梓", profession: "pioneer", displayUrl: "arknights/official/pic/20210112/416445fede74d8d23c6d5f2476d827b2.png", camp: "PENGUIN_LOGISTICS",
    },
    {
        name: "能天使", nameEn: "EXUSIAI", code: "PL03", intro: "能天使，拉特兰公民，适用拉特兰一至十三项公民权益。企鹅物流公司成员。从事秘密联络，武装押运等非公开活动，推测身份：信使。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛多项行动提供协助。", cv: "石见舞菜香", profession: "sniper", displayUrl: "arknights/official/pic/20210112/ab532ac6f4df46164f9b097f2f6b677d.png", camp: "PENGUIN_LOGISTICS",
    },
    {
        name: "可颂", nameEn: "CROISSANT", code: "PL04", intro: "企鹅物流员工，于合约期内任企鹅物流驻罗德岛外派干员。 擅长防守，能同时牵制数个敌人，并拥有怪力，能用巨锤轻松击飞瘦弱的敌人。", cv: "久保百合花", profession: "tank", displayUrl: "arknights/official/pic/20210112/8752c3a0e09ab67178acebe117d536c1.png", camp: "PENGUIN_LOGISTICS",
    },
    {
        name: "陈", nameEn: "CHEN", code: "LM04", intro: "陈，龙门高级警司，龙门近卫局特别督查组组长，毕业于维多利亚皇家近卫学校，成绩优异，表现突出。在龙门近卫局供职期间，力主取缔龙门境内非法活动，对抗暴力犯罪和有组织犯罪，追缉武装逃犯与国际重犯等行动，并取得多项重大成果。\n现作为特别人员协助罗德岛行动，并为现场提供战术指挥支援。", cv: "石上静香", profession: "warrior", displayUrl: "arknights/official/pic/20210112/87f341583ec61b4ce4f5b765464fe89d.png", camp: "LUNGMEN",
    },
    {
        name: "星熊", nameEn: "HOSHIGUMA", code: "LM05", intro: "星熊，龙门近卫局特别任务组精英干员。存在数项指控记录。\n经龙门总督魏彦吾交涉，龙门近卫局依星熊的优异能力与良好表现，破格将其吸纳进近卫局特别督察组。在处理高危险性犯罪事件、要员保护、灾害紧急救援等领域表现出较高专业性。\n现作为重装干员协助罗德岛行动，并为现场提供战术执行与指挥支援。", cv: "安野希世乃", profession: "tank", displayUrl: "arknights/official/pic/20210112/22ab7b3789969d9c381b82d0f24c3c83.png", camp: "LUNGMEN",
    },
];

const particleDataLoader = ({ fileName, key }) => {
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires, import/no-dynamic-require
    const particleData = require(`./arknights/static/data/${fileName}`);
    return {
        key,
        model: initParticleData(particleData),
    };
};

export function init() {
    animationHandler.init();
    resizeHandler.init();
    responsiveModeHandler.init();
    touchableHandler.init();
}

export function background() {
    PolygonLoader.instance.appear().updatePolygonTransform(1);
    FireFlyLoader.instance.appear();
}

export async function main() {
    const meshParticle = initParticleData({
        size: { width: 820, height: 460 },
        count: 1008,
        points: fill(new Array(1008), 0).map((_val, idx) => [(idx % 42) * 20, 20 * Math.floor(idx / 42), 126, 126, 126, 255]),
    });
    ParticleLoader.main.setMode(EffectEnum.SPREAD).setModel(meshParticle).appear().fire();

    const pData = [
        { key: "lungmen", fileName: "lungmen.data.json" },
        { key: "penguin", fileName: "penguin.data.json" },
        { key: "rhine", fileName: "rhine.data.json" },
        { key: "rhodes", fileName: "rhodes.data.json" },
        { key: "originiums", fileName: "story-1-originiums.data.json" },
        { key: "originium_arts", fileName: "story-2-originium_arts.data.json" },
        { key: "reunion", fileName: "story-3-reunion.data.json" },
        { key: "infected", fileName: "story-4-infected.data.json" },
        { key: "nomadic_city", fileName: "story-5-nomadic_city.data.json" },
        { key: "rhodes_island", fileName: "story-6-rhodes_island.data.json" },
    ].map(particleDataLoader);

    const pTitleData = [
        { key: "infomation", fileName: "title-information.data.json" },
        { key: "media", fileName: "title-media.data.json" },
        { key: "staff", fileName: "title-staff.data.json" },
        { key: "world", fileName: "title-world.data.json" },
    ].map(particleDataLoader);
    const fontSize = parseInt(window.getComputedStyle(document.body).fontSize, 10);
    ParticleLoader.sub.setMode(EffectEnum.FIXED).setTransform(() => ({
        x: Math.round(5.875 * fontSize - 0.3 * WebglContainer.instance.width),
        y: Math.round(0.5 * WebglContainer.instance.height - 3.5 * fontSize),
        sc: fontSize / 16,
        pointSize: 1,
    })).setModel(pTitleData[0].model).appear();

    const faction = {
        RHODES_ISLAND: pData.find((t) => t.key === "rhodes"),
        RHINE: pData.find((t) => t.key === "rhine"),
        PENGUIN_LOGISTICS: pData.find((t) => t.key === "penguin"),
        LUNGMEN: pData.find((t) => t.key === "lungmen"),
    };

    const draw = new StaffCharLoader(document.querySelector(".staffCharDraw"));
    // await draw.getPreloadTasks(staffInfo.map(t => t.displayUrl || ""));
    await draw.init(staffInfo[0].displayUrl);
    draw.resetMode(responsiveModeHandler.mode);
    draw.add();

    responsiveModeHandler.add(draw.resetMode.bind(draw));
    setInterval(() => {
        const idx = random(0, staffInfo.length - 1);
        ParticleLoader.main.setModel(faction[staffInfo[idx].camp].model);
        ParticleLoader.sub.setModel(pTitleData[random(0, pTitleData.length - 1)].model);

        draw.transTo(staffInfo[idx].displayUrl, "next");
    }, 5000);
    setInterval(() => {
        ParticleLoader.main.setMode([EffectEnum.GATHER, EffectEnum.PERSPECTIVE, EffectEnum.SPREAD][random(0, 2)]);
    }, 10000);

    SomkeLoader.instance.appear();
}

init();
background();
main();
