import * as THREE from "three";
import { random, fill, flattenDepth } from "lodash";

import MainWebglContainer from "../../containers/MainWebglContainer";
import AnimationFrameHandler from "../../handlers/AnimationFrameHandler";
import FireFlyInstance from "./FireFlyInstance";

const fireflyUrl = "./arknights/static/firefly.5ec707a0de1eca4a0765.png";

// gl
export default class FireFlyLoader {
    public update: () => void;
    public points: FireFlyInstance[];
    public globalOpacity = 0;
    public aPosition: THREE.BufferAttribute;
    public aOpacity: THREE.BufferAttribute;

    private mainWebglContainer: MainWebglContainer;
    private animationFrameHandler: AnimationFrameHandler;

    public constructor(
        mainWebglContainer: MainWebglContainer,
        animationFrameHandler: AnimationFrameHandler,
        cnt = 20
    ) {
        this.mainWebglContainer = mainWebglContainer;
        this.animationFrameHandler = animationFrameHandler;
        const randX = () => (Math.random() - 0.5) * (0.9 * this.mainWebglContainer.width);
        const randY = () => (Math.random() - 2.5) * (0.2 * this.mainWebglContainer.height);
        const randZ = () => random(-200, 200);
        const randLife = () => random(60, 1200);

        this.update = () => {
            this.points.forEach((point) => {
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
            });
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
            this.mainWebglContainer.scene.add(points);
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
}
