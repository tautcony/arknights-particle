export default class ParticleModel {
    public count: number;
    public points: number[];
    public size: {
        width: number,
        height: number;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    public shuffle? = (_model: ParticleModel) => {};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, class-methods-use-this
    public disappear? = (_model: ParticleModel) => {};
}
