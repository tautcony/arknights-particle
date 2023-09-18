import * as THREE from "three";
import AnimationFrameHandler from "../handlers/AnimationFrameHandler";

// Ci
export default class LqWebglContainer {
    private fitViewport: () => void;
    private update: () => void;
    private canvas: HTMLCanvasElement;
    public scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;

    private animationFrameHandler: AnimationFrameHandler;

    constructor(
        camera: THREE.PerspectiveCamera,
        animationFrameHandler: AnimationFrameHandler
    ) {
        this.animationFrameHandler = animationFrameHandler;
        this.fitViewport = () => {
            const n = this.resoluteWidth;
            const r = this.resoluteHeight;
            if (!(this.canvas.width === n && this.canvas.height === r)) {
                this.renderer.setSize(n, r, false);
            }
        };

        this.update = () => {
            this.fitViewport();
            this.renderer.render(this.scene, camera);
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
        this.animationFrameHandler.add(this.update);
    }

    public stop(): void {
        this.animationFrameHandler.remove(this.update);
    }

    public randX() {
        return (Math.random() - 0.5) * this.resoluteWidth;
    }
    public randY() {
        return (0.5 - Math.random()) * this.resoluteHeight;
    }
}
