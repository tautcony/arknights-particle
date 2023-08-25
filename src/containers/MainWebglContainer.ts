import * as THREE from "three";
import { throttle } from "lodash";
import ResponsiveModeHandler from "../handlers/ResponsiveModeHandler";
import AnimationFrameHandler from "../handlers/AnimationFrameHandler";

// Li
export default class MainWebglContainer {
    public canvas: HTMLCanvasElement;
    public scene: THREE.Scene = new THREE.Scene();
    public camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
    public renderer: THREE.WebGLRenderer;
    public fitViewport: () => void;
    public update: () => void;
    private animationFrameHandler: AnimationFrameHandler;
    private responsiveModeHandler: ResponsiveModeHandler;

    public constructor(animationFrameHandler: AnimationFrameHandler, responsiveModeHandler: ResponsiveModeHandler) {
        this.animationFrameHandler = animationFrameHandler;
        this.responsiveModeHandler = responsiveModeHandler;
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
        this.animationFrameHandler.add(this.update);
    }

    public get width() {
        return this.canvas.clientWidth;
    }
    public get height() {
        return this.canvas.clientHeight;
    }
    public get resoluteWidth() {
        return this.responsiveModeHandler.mode === "desktop"
            ? this.canvas.clientWidth
            : Math.round(this.canvas.clientWidth * window.devicePixelRatio);
    }
    public get resoluteHeight() {
        return this.responsiveModeHandler.mode === "desktop"
            ? this.canvas.clientHeight
            : Math.round(this.canvas.clientHeight * window.devicePixelRatio);
    }
    public stop() {
        this.animationFrameHandler.remove(this.update);
    }
}
