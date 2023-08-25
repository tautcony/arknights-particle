import * as THREE from "three";
import { fill, random } from "lodash";

import EffectEnum from "../../effect/EffectEnum";
import TransformationData from "../../effect/TransformationData";
import ParticleInstance from "./ParticleInstance";
import ParticleModel from "./ParticleModel";
import ParticalEffect from "../../effect/ParticalEffect";
import InteractiveTouchHandler from "../../handlers/InteractiveTouchHandler";
import MainWebglContainer from "../../containers/MainWebglContainer";
import AnimationFrameHandler from "../../handlers/AnimationFrameHandler";

const particleUrl = "./arknights/static/particle.7ff7f9a6de6e31926ddb.png";

interface ParticleLoaderConfig {
    particleNum: number;
    speedRange: [number, number];
    mainWebglContainer: MainWebglContainer;
    animationFrameHandler: AnimationFrameHandler;
    interactiveTouchHandler: InteractiveTouchHandler;
}

interface ParticleLoaderLoadConfig {
    active: boolean;
    mode: EffectEnum;
    model: ParticleModel;
    transform: () => TransformationData;
}

export default class ParticleLoader {
    public static _main: ParticleLoader;
    public static _sub: ParticleLoader;
    public mode: EffectEnum = EffectEnum.SPREAD;
    public transform: TransformationData = {
        x: 0, y: 0, sc: 1, pointSize: 3,
    };
    public uPointSize: THREE.Uniform<number> = new THREE.Uniform(1);
    public aPosition: THREE.BufferAttribute;
    public aColor: THREE.BufferAttribute;
    public model: ParticleModel;
    public particles: ParticleInstance[];

    // eslint-disable-next-line class-methods-use-this
    public getUpdatedTransform: () => TransformationData | undefined = () => undefined;
    public updateTransform: () => ParticleLoader;
    public update: () => void;

    private mainWebglContainer: MainWebglContainer;
    private animationFrameHandler: AnimationFrameHandler;
    private interactiveTouchHandler: InteractiveTouchHandler;

    public constructor(config: ParticleLoaderConfig) {
        this.mainWebglContainer = config.mainWebglContainer;
        this.animationFrameHandler = config.animationFrameHandler;
        this.interactiveTouchHandler = config.interactiveTouchHandler;
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
            this.particles.forEach((particle) => {
                ParticalEffect[this.mode](particle, this.model, this.transform, this.interactiveTouchHandler.current);
            });
            this.aPosition.needsUpdate = true;
            this.aColor.needsUpdate = true;
        };
        const locationBuffer = new Float32Array(3 * particleNum);
        const colorBuffer = new Float32Array(4 * particleNum);
        this.particles = fill(new Array(particleNum), 0).map((_val, idx) => {
            const x = (0.5 - Math.random()) * this.mainWebglContainer.width;
            const y = (0.5 - Math.random()) * this.mainWebglContainer.height;
            const z = 500 * (0.5 - Math.random());
            locationBuffer.set([x, y, z], 3 * idx);
            colorBuffer.set([0.5, 0.5, 0.5, -1], 4 * idx);
            return new ParticleInstance({
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
                width: this.mainWebglContainer.width,
                height: this.mainWebglContainer.height,
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
            this.mainWebglContainer.scene.add(points);
        });
    }

    public static main(
        mainWebglContainer?: MainWebglContainer,
        animationFrameHandler?: AnimationFrameHandler,
        interactiveTouchHandler?: InteractiveTouchHandler
    ) {
        return new ParticleLoader({
            particleNum: 1e4,
            speedRange: [20, 30],
            interactiveTouchHandler,
            mainWebglContainer,
            animationFrameHandler,
        });
    }
    public static sub(
        mainWebglContainer?: MainWebglContainer,
        animationFrameHandler?: AnimationFrameHandler,
        interactiveTouchHandler?: InteractiveTouchHandler
    ) {
        return new ParticleLoader({
            particleNum: 1500,
            speedRange: [10, 15],
            interactiveTouchHandler,
            mainWebglContainer,
            animationFrameHandler,
        });
    }

    public setMode(mode: EffectEnum) {
        this.mode = mode;
        return this;
    }
    public setModel(model: ParticleModel) {
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
        this.animationFrameHandler.add(this.update);
        return this;
    }
    public setTransform(t: () => TransformationData) {
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
        this.animationFrameHandler.remove(this.update);
        return this;
    }
}
