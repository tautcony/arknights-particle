export interface ParticleConstructorParams {
    pointIdx: number;
    speed: number;
    point?: Float32Array;
    color?: Float32Array;
}

export default class ParticleInstance {
    public run: number;
    public pointIdx: number;
    public speed: number;
    public x: number;
    public y: number;
    public z: number;
    public r: number;
    public g: number;
    public b: number;
    public a: number;

    public point?: Float32Array;
    public color?: Float32Array;

    public constructor(t: ParticleConstructorParams) {
        this.run = 0;
        this.pointIdx = t.pointIdx;
        this.speed = t.speed;
        [this.x, this.y, this.z] = t.point;
        [this.r, this.g, this.b, this.a] = t.color;
        this.point = t.point;
        this.color = t.color;
    }
}
