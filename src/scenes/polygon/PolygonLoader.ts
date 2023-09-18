import * as THREE from "three";
import anime from "animejs/lib/anime.es";

import TransformationData from "../../effect/TransformationData";
import MainWebglContainer from "../../containers/MainWebglContainer";
import AnimationFrameHandler from "../../handlers/AnimationFrameHandler";
import ResponsiveModeHandler from "../../handlers/ResponsiveModeHandler";

const particleUrl = "./arknights/static/particle.7ff7f9a6de6e31926ddb.png";

// yl
export default class PolygonLoader {
    public static _instance: PolygonLoader;
    public width: number;
    public height: number;
    public update: () => void;
    public globalOpacity: number;
    public getUpdatedTransform: () => TransformationData | undefined;
    public updateTransform: () => PolygonLoader;
    public geometry: THREE.BufferGeometry;
    public uOpacity: THREE.Uniform<number>;
    public uOrigin: THREE.Uniform<[number, number, number]>;

    private mainWebglContainer: MainWebglContainer;
    private animationFrameHandler: AnimationFrameHandler;
    private responsiveModeHandler: ResponsiveModeHandler;

    public constructor(
        mainWebglContainer: MainWebglContainer,
        animationFrameHandler: AnimationFrameHandler,
        responsiveModeHandler: ResponsiveModeHandler
    ) {
        this.mainWebglContainer = mainWebglContainer;
        this.animationFrameHandler = animationFrameHandler;
        this.responsiveModeHandler = responsiveModeHandler;
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
            this.mainWebglContainer.scene.add(lineSegments).add(points);
            this.fire();
        });
    }

    public fire() {
        this.animationFrameHandler.add(this.update);
        return this;
    }
    public stop() {
        this.animationFrameHandler.remove(this.update);
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
    public setTransform(t: () => TransformationData) {
        this.getUpdatedTransform = t;
        return this;
    }

    public fadeIn() {
        const n = { val: 0 };
        anime({
            targets: n,
            val: 1,
            duration: 1200,
            easing: "easeOutCubic",
            update: () => {
                this.updatePolygonTransform(n.val);
            },
        });
    }

    // eslint-disable-next-line class-methods-use-this
    public updatePolygonTransform(offset = 0) {
        this.setTransform(() => {
            if (this.responsiveModeHandler.mode === "desktop") {
                return {
                    x: 0.1 * -this.mainWebglContainer.width,
                    y: 0.5 * this.mainWebglContainer.height + (0.2 * (1 - offset) + 0.3) * this.height,
                    sc: 1,
                };
            }
            return {
                x: 0,
                y: 0.5 * this.mainWebglContainer.height + (0.2 * (1 - offset) + 0.3) * this.height * 0.6,
                sc: 0.6,
            };
        });
    }
}
