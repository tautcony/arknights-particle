import { throttle } from "lodash";
// Ue
export default class ResizeEventHandler {
    private queue: (() => void)[] = [];
    public init() {
        window.addEventListener(
            "resize",
            throttle(() => {
                this.queue.forEach((handler) => {
                    handler();
                });
            })
        );
        return this;
    }
    public add(handler: () => void) {
        if (!this.queue.includes(handler)) {
            this.queue.push(handler);
        }
        return this;
    }
    public remove(handler: () => void) {
        const e = this.queue.indexOf(handler);
        if (e >= 0) {
            this.queue.splice(e, 1);
        }
        return this;
    }
}
