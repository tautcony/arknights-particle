import * as THREE from "three";
import anime from "animejs/lib/anime.es";
import {
    fill, flattenDepth, map,
} from "lodash";

import LqWebglContainer from "../../containers/LqWebglContainer";
import ResponsiveModeHandler from "../../handlers/ResponsiveModeHandler";
import AnimationFrameHandler from "../../handlers/AnimationFrameHandler";
import ResizeEventHandler from "../../handlers/ResizeEventHandler";

const smokeUrl = "./arknights/static/smoke-texture.90db6d47c9dcb188bccb.png";

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

function generatePointLightDesktop(lqWebglContainer: LqWebglContainer) : PointLight {
    const t = lqWebglContainer;
    const e = t.resoluteWidth;
    const n = t.resoluteHeight;
    return {
        position: [1.1 * e, 0.8 * n, 0],
        disappearAt: 1.2 * n,
        strength: 0.3,
    };
}
function generateSpotLightDesktop(lqWebglContainer: LqWebglContainer): SpotLight[] {
    const t = lqWebglContainer;
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
function generatePointLightPhone(lqWebglContainer: LqWebglContainer): PointLight {
    const t = lqWebglContainer;
    const e = t.resoluteWidth;
    const n = t.resoluteHeight;
    return {
        position: [0 * e, 1.1 * n, 0],
        disappearAt: 1.2 * n,
        strength: 0.3,
    };
}
function generateSpotLightPhone(lqWebglContainer: LqWebglContainer): SpotLight[] {
    const t = lqWebglContainer;
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
function updateParticleProperties(lqWebglContainer: LqWebglContainer, point: SmokePointStruct, position: [number, number, number]) {
    const n = position[0];

    point.x += (Math.random() + 0.1) * Math.sign(n - point.x - 0.5 * lqWebglContainer.resoluteWidth);
    point.y += Math.random() + 0.05;

    if (
        Math.abs(point.x) > 0.6 * lqWebglContainer.resoluteWidth
        || Math.abs(point.y) > 0.7 * lqWebglContainer.resoluteHeight
    ) {
        point.opacity = Math.max(0, point.opacity - 0.01);
        if (point.opacity <= 0) {
            point.x = lqWebglContainer.randX();
            point.y = lqWebglContainer.randY();
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
export default class SomkeLoader {
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

    private lqWebglContainer: LqWebglContainer;
    private responsiveModeHandler: ResponsiveModeHandler;
    private animationFrameHandler: AnimationFrameHandler;
    private resizeEventHandler: ResizeEventHandler;

    constructor(
        lqWebglContainer: LqWebglContainer,
        responsiveModeHandler: ResponsiveModeHandler,
        animationFrameHandler: AnimationFrameHandler,
        resizeEventHandler: ResizeEventHandler,
        t: number = 30
    ) {
        this.lqWebglContainer = lqWebglContainer;
        this.responsiveModeHandler = responsiveModeHandler;
        this.animationFrameHandler = animationFrameHandler;
        this.resizeEventHandler = resizeEventHandler;

        this.uSpotLights = new THREE.Uniform(null);
        this.uPointLight = new THREE.Uniform(null);
        this.uOpacity = new THREE.Uniform(0);
        this.uResolution = new THREE.Uniform(1);

        this.onResize = () => {
            if (this.responsiveModeHandler.mode === "desktop") {
                this.uSpotLights.value = generateSpotLightDesktop(this.lqWebglContainer);
                this.uPointLight.value = generatePointLightDesktop(this.lqWebglContainer);
            } else if (this.responsiveModeHandler.mode === "phone") {
                this.uSpotLights.value = generateSpotLightPhone(this.lqWebglContainer);
                this.uPointLight.value = generatePointLightPhone(this.lqWebglContainer);
            }

            const size = Math.min(this.lqWebglContainer.width, this.lqWebglContainer.height);
            this.aSize.set(
                map(this.aSize.array, () => (Math.random() + 1.5) * size)
            );
            this.aSize.needsUpdate = true;
        };

        this.update = () => {
            this.uResolution.value = 0.5;

            this.points.forEach((point) => {
                updateParticleProperties(this.lqWebglContainer, point, this.uPointLight.value.position);
            });

            this.aPosition.needsUpdate = true;
            this.aOpacity.needsUpdate = true;
            this.aRotate.needsUpdate = true;
        };

        const geo = new THREE.BufferGeometry();
        const pointArray = fill(new Array(t), 0);

        const positionBuffer = Float32Array.from(
            flattenDepth(pointArray.map(() => [this.lqWebglContainer.randX(), this.lqWebglContainer.randY(), 0]), 1)
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

        const spotLights = generateSpotLightDesktop(this.lqWebglContainer);
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
            this.lqWebglContainer.scene.add(points);
            this.fire();
        });
    }

    public fire(): void {
        this.animationFrameHandler.add(this.update);
        this.onResize();
        this.resizeEventHandler.add(this.onResize);
    }

    public stop(): void {
        this.animationFrameHandler.remove(this.update);
        this.resizeEventHandler.remove(this.onResize);
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
                requestAnimationFrame(() => this.lqWebglContainer.stop());
            },
        });
    }

    public appear(): void {
        if (this.opacityAnimation !== null) {
            this.opacityAnimation.pause();
        }

        this.fire();
        this.lqWebglContainer.fire();

        this.opacityAnimation = anime({
            targets: this.uOpacity,
            value: 0.8,
            easing: "linear",
            duration: 500,
        });
    }
}
