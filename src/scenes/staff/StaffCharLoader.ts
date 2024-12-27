import * as THREE from "three";
import anime from "animejs/lib/anime.es";

import MainWebglContainer from "../../containers/MainWebglContainer";
import AnimationFrameHandler from "../../handlers/AnimationFrameHandler";
import ResizeEventHandler from "../../handlers/ResizeEventHandler";

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
export default class StaffCharLoader {
    public canvas: HTMLCanvasElement;
    public active = false;
    public animeRunning = false;
    public tex: THREE.Texture | null = null;
    public loader: THREE.TextureLoader = new THREE.TextureLoader();
    public itemWidth: number;
    public itemHeight: number;
    public itemPosition: THREE.Vector2;
    public itemTransOffset: number;
    public itemGradient = false;
    public renderer: THREE.WebGLRenderer;
    public emptyTexture: THREE.Texture = new THREE.Texture();
    public charTextureMap: Record<string, THREE.Texture> = {};
    public geo: THREE.PlaneGeometry;
    public item: THREE.Mesh;
    public mat: THREE.ShaderMaterial;
    public resize: () => void;
    public update: () => void;
    public checkAndRemove: () => void;

    private mainWebglContainer: MainWebglContainer;
    private animationFrameHandler: AnimationFrameHandler;
    private resizeEventHandler: ResizeEventHandler;

    public constructor(
        canvas: HTMLCanvasElement | null,
        mainWebglContainer: MainWebglContainer,
        animationFrameHandler: AnimationFrameHandler,
        resizeEventHandler: ResizeEventHandler
    ) {
        if (canvas !== null) {
            this.canvas = canvas;
        } else {
            console.error("canvas is null");
        }
        this.mainWebglContainer = mainWebglContainer;
        this.animationFrameHandler = animationFrameHandler;
        this.resizeEventHandler = resizeEventHandler;

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
            this.canvas.width = this.mainWebglContainer.width * window.devicePixelRatio;
            this.canvas.height = this.mainWebglContainer.height * window.devicePixelRatio;
            this.renderer.setViewport(0, 0, this.canvas.width, this.canvas.height);
        };
        this.update = () => {
            this.mainWebglContainer.camera.layers.disableAll();
            this.mainWebglContainer.camera.layers.enable(1);
            this.renderer.render(
                this.mainWebglContainer.scene,
                this.mainWebglContainer.camera
            );
            this.mainWebglContainer.camera.layers.enableAll();
            this.mainWebglContainer.camera.layers.disable(1);
        };
        this.checkAndRemove = () => {
            if (!(this.active || this.animeRunning)) {
                this.mainWebglContainer.scene.remove(this.item);
                animationFrameHandler.remove(this.update);
                resizeEventHandler.remove(this.resize);
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
        await this.setDisplay(textureUrl);
        this.resize();
        this.animeRunning = true;
        await this.animeEnter("next");
        this.animeRunning = false;
        this.checkAndRemove();
    }
    public add() {
        this.active = true;
        this.mainWebglContainer.scene.add(this.item);
        this.animationFrameHandler.add(this.update);
        this.resizeEventHandler.add(this.resize);
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
