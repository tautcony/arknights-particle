// Be
export default class AnimationFrameHandler {
    private queue: ((ts: number)=>void)[] = [];
    private fps = 61;
    private rafId = NaN;
    private lastUpdated = NaN;

    public add(handler: ((ts: number)=>void)) {
        if (!this.queue.includes(handler)) {
            this.queue.push(handler);
        }
        return this;
    }
    public remove(handler: ((ts: number)=>void)) {
        const e = this.queue.indexOf(handler);
        if (e >= 0) {
            this.queue.splice(e, 1);
        }
        return this;
    }
    public update(ts: number) {
        if (!this.lastUpdated || ts - this.lastUpdated > 1e3 / this.fps) {
            this.lastUpdated = ts;
            this.queue.forEach((handler) => {
                handler(ts);
            });
        }
        this.rafId = window.requestAnimationFrame(this.update.bind(this));
    }
    public init() {
        this.rafId = window.requestAnimationFrame(this.update.bind(this));
        return this;
    }
    public destroy() {
        window.cancelAnimationFrame(this.rafId);
    }
}
