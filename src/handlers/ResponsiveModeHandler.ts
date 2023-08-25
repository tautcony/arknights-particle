import ResizeEventHandler from "./ResizeEventHandler";

// He
export default class ResponsiveModeHandler {
    public mode: "desktop" | "phone" = "desktop";
    private queue: ((mode?: string) => void)[] = [];
    private widthThrottle: number = 430;
    private resizeEventController: ResizeEventHandler;

    public constructor(resizeEventController: ResizeEventHandler) {
        this.resizeEventController = resizeEventController;
    }

    public init() {
        this.mode = window.innerWidth > this.widthThrottle ? "desktop" : "phone";
        this.resizeEventController.add(() => {
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
                this.queue.forEach((handler) => {
                    handler(this.mode);
                });
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
