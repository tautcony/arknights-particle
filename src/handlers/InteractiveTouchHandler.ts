import { throttle } from "lodash";
import MainWebglContainer from "../containers/MainWebglContainer";
import ResponsiveModeHandler from "./ResponsiveModeHandler";
import ResizeEventHandler from "./ResizeEventHandler";

// qi
export default class InteractiveTouchHandler {
    public x = 0;
    public y = 0;
    public clientX = 0;
    public clientY = 0;
    public interactive = false;
    public touchable = false;

    private wegblContainer: MainWebglContainer;
    private responsiveModeHandler: ResponsiveModeHandler;
    private resizeEventHandler: ResizeEventHandler;

    public constructor(wegblContainer: MainWebglContainer, responsiveModeHandler: ResponsiveModeHandler, resizeEventHandler: ResizeEventHandler) {
        this.wegblContainer = wegblContainer;
        this.responsiveModeHandler = responsiveModeHandler;
        this.resizeEventHandler = resizeEventHandler;
    }

    public init() {
        this.clientX = 0.5 * this.wegblContainer.width;
        this.clientY = 0.5 * this.wegblContainer.height;
        ["mousemove", "touchstart", "touchmove"].forEach((eventType) => {
            document.addEventListener(
                eventType,
                throttle((evt: MouseEvent | TouchEvent) => {
                    this.interactive = true;
                    if ("targetTouches" in evt) {
                        this.clientX = evt.targetTouches[0].clientX;
                        this.clientY = evt.targetTouches[0].clientY;
                        this.x = evt.targetTouches[0].clientX - 0.5 * this.wegblContainer.width;
                        this.y = 0.5 * this.wegblContainer.height - evt.targetTouches[0].clientY;
                    } else {
                        this.clientX = evt.clientX;
                        this.clientY = evt.clientY;
                        this.x = evt.clientX - 0.5 * this.wegblContainer.width;
                        this.y = 0.5 * this.wegblContainer.height - evt.clientY;
                    }
                    let targets: EventTarget[];
                    if (evt.composedPath !== null && evt.composedPath !== undefined) {
                        targets = evt.composedPath() || [];
                    } else {
                        targets = [];
                    }
                    const tagNames = ["A", "BUTTON", "INPUT"];
                    let flag = false;
                    for (let i = 0; i < 3; ++i) {
                        const ele = targets[i] as HTMLElement;
                        const cursorValue = ele?.dataset?.cursor;

                        if (cursorValue === "pointer" || tagNames.includes(ele?.tagName)) {
                            flag = true;
                            break;
                        }
                    }
                    this.touchable = flag;
                }),
                { passive: true }
            );
        });

        ["touchend", "mouseup"].forEach((eventType) => {
            document.addEventListener(
                eventType,
                throttle(() => {
                    if (this.responsiveModeHandler.mode === "phone") {
                        this.interactive = false;
                        this.x = 0;
                        this.y = 0;
                    }
                }),
                { passive: true }
            );
        });
        this.resizeEventHandler.add(this.resize.bind(this));
        return this;
    }
    public resize() {
        this.interactive = false;
        this.x = 0;
        this.y = 0;
    }
    public get current() {
        return {
            x: this.x,
            y: this.y,
            interactive: this.interactive,
            touchable: this.touchable,
        };
    }
}
