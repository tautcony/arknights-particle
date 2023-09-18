import anime from "animejs/lib/anime.es";
import AnimationFrameHandler from "./AnimationFrameHandler";
import InteractiveTouchHandler from "./InteractiveTouchHandler";
import ResponsiveModeHandler from "./ResponsiveModeHandler";

// qs
export default class CursorHandler {
    private elements: {
        container: HTMLDivElement;
        outer: HTMLDivElement;
        effect: HTMLDivElement;
    };
    private position: {
        outer: {
            x: number;
            y: number;
        };
    };
    private clickAnimating: boolean;
    private shown: boolean;
    private update: () => void;

    private interactiveTouchHandler: InteractiveTouchHandler;
    private responsiveModeHandler: ResponsiveModeHandler;
    private animationFrameHandler: AnimationFrameHandler;

    public constructor(
        interactiveTouchHandler: InteractiveTouchHandler,
        responsiveModeHandler: ResponsiveModeHandler,
        animationFrameHandler: AnimationFrameHandler
    ) {
        this.interactiveTouchHandler = interactiveTouchHandler;
        this.responsiveModeHandler = responsiveModeHandler;
        this.animationFrameHandler = animationFrameHandler;

        this.elements = {
            container: document.createElement("div"),
            outer: document.createElement("div"),
            effect: document.createElement("div"),
        };
        this.position = { outer: { x: this.interactiveTouchHandler.clientX, y: this.interactiveTouchHandler.clientY } };
        this.clickAnimating = false;
        this.shown = false;
        this.update = () => {
            const { container, outer } = this.elements;

            if (this.responsiveModeHandler.mode === "phone") {
                container.style.opacity = "";
            } else {
                if (this.shown) {
                    container.style.opacity = "1";
                } else if (this.interactiveTouchHandler.interactive) {
                    this.shown = true;
                }

                if (this.interactiveTouchHandler.touchable) {
                    outer.style.backgroundColor = "rgba(255,255,255,0.5)";
                    outer.style.width = "24px";
                    outer.style.height = "24px";
                } else {
                    outer.style.backgroundColor = "";
                    outer.style.width = "";
                    outer.style.height = "";
                }

                this.position.outer.x += (this.interactiveTouchHandler.clientX - this.position.outer.x) * 0.3;
                this.position.outer.y += (this.interactiveTouchHandler.clientY - this.position.outer.y) * 0.3;
                this.elements.outer.style.left = `${this.position.outer.x.toFixed(2)}px`;
                this.elements.outer.style.top = `${this.position.outer.y.toFixed(2)}px`;
            }
        };
    }

    public init() {
        const { container, outer, effect } = this.elements;
        container.className = "ako-cursor-container";
        outer.className = "ako-cursor-outer";
        effect.className = "ako-cursor-effect";
        outer.style.transform = "translate3d(-50%, -50%, 0)";
        effect.style.transform = "translate3d(-50%, -50%, 0)";
        container.appendChild(outer);
        container.appendChild(effect);
        document.body.appendChild(container);
        document.body.addEventListener("mousedown", (event) => {
            if (this.responsiveModeHandler.mode !== "desktop" || this.clickAnimating) return;
            this.clickAnimating = true;
            anime({
                targets: effect,
                easing: "easeOutCubic",
                duration: 500,
                left: [event.clientX, event.clientX],
                top: [event.clientY, event.clientY],
                scale: [0, 1],
                opacity: [1, 0],
                complete: () => {
                    this.clickAnimating = false;
                },
            });
        });
        this.fire();
    }

    public fire() {
        this.animationFrameHandler.add(this.update);
    }

    public stop() {
        this.animationFrameHandler.remove(this.update);
    }
}
