import { slice } from "lodash";
import ParticleInstance from "../scenes/particle/ParticleInstance";
import ParticleModel from "../scenes/particle/ParticleModel";
import TransformationData from "./TransformationData";
import EffectEnum from "./EffectEnum";

interface MousePosition {
    x: number;
    y: number;
    interactive: boolean;
    touchable: boolean;
}

function GatherOrSpread(particle: ParticleInstance, model: ParticleModel, transform: TransformationData, factor: number, mousePosition: MousePosition) {
    if (!model) {
        return;
    }
    const i = 1 / particle.speed;
    if (particle.pointIdx >= model.count) {
        particle.a += (-1 - particle.a) * i;
        particle.color.set([particle.r, particle.g, particle.b, particle.a]);
        return;
    }
    const { pointIdx } = particle;
    const pointsData = slice(model.points.slice(7 * pointIdx, 7 * pointIdx + 7), 0, 7);
    const x = pointsData[0];
    const y = pointsData[1];
    const z = pointsData[2];
    const r = pointsData[3];
    const g = pointsData[4];
    const b = pointsData[5];
    const a = pointsData[6];
    const touchOffsetX = mousePosition.interactive ? mousePosition.x - particle.x : 0;
    const touchOffsetY = mousePosition.interactive ? mousePosition.y - particle.y : 0;
    const touchHypotenuse = Math.sqrt(touchOffsetX * touchOffsetX + touchOffsetY * touchOffsetY);
    const touchHypotenuseFactor = 1 / (1 + touchHypotenuse) / (1 + touchHypotenuse);
    const transformedX = transform.sc * x + transform.x - particle.x;
    const transformedY = transform.sc * y + transform.y - particle.y;
    const transformedZ = z - particle.z;

    particle.x += transformedX * i + factor * touchOffsetX * touchHypotenuseFactor;
    particle.y += transformedY * i + factor * touchOffsetY * touchHypotenuseFactor;
    particle.z += transformedZ * i;
    particle.point.set([particle.x, particle.y, particle.z]);

    particle.r += (r - particle.r) * i;
    particle.g += (g - particle.g) * i;
    particle.b += (b - particle.b) * i;
    particle.a += (a - particle.a) * i;
    particle.color.set([particle.r, particle.g, particle.b, particle.a]);
}

const ParticalEffect: Record<EffectEnum, (particle: ParticleInstance, model: ParticleModel, transform: TransformationData, mousePosition: MousePosition) => void> = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [EffectEnum.FIXED]: (particle: ParticleInstance, model: ParticleModel, transform: TransformationData, mousePosition: MousePosition) => {
        if (!model) {
            return;
        }
        const i = 1 / particle.speed;
        if (particle.pointIdx >= model.count) {
            particle.a += (-1 - particle.a) * i;
            particle.color.set([particle.r, particle.g, particle.b, particle.a]);
            return;
        }
        const { pointIdx } = particle;
        const pointData = slice(model.points.slice(7 * pointIdx, 7 * pointIdx + 7), 0, 7);
        const x = pointData[0];
        const y = pointData[1];
        const z = pointData[2];
        const r = pointData[3];
        const g = pointData[4];
        const b = pointData[5];
        const a = pointData[6];
        const transformedX = transform.sc * x + transform.x - particle.x;
        const transformedY = transform.sc * y + transform.y - particle.y;
        const transformedZ = z - particle.z;

        particle.x += transformedX * i;
        particle.y += transformedY * i;
        particle.z += transformedZ * i;
        particle.point.set([particle.x, particle.y, particle.z]);

        particle.r += (r - particle.r) * i;
        particle.g += (g - particle.g) * i;
        particle.b += (b - particle.b) * i;
        particle.a += (a - particle.a) * i;
        particle.color.set([particle.r, particle.g, particle.b, particle.a]);
    },
    [EffectEnum.GATHER]: (particle: ParticleInstance, model: ParticleModel, transform: TransformationData, mousePosition: MousePosition) => {
        GatherOrSpread(particle, model, transform, 40, mousePosition);
    },
    [EffectEnum.SPREAD]: (particle: ParticleInstance, model: ParticleModel, transform: TransformationData, mousePosition: MousePosition) => {
        GatherOrSpread(particle, model, transform, -100, mousePosition);
    },
    [EffectEnum.PERSPECTIVE]: (particle: ParticleInstance, model: ParticleModel, transform: TransformationData, mousePosition: MousePosition) => {
        if (!model) {
            return;
        }
        const frictionCoefficient = 1 / 3e3;
        const interactionCoefficient = 0.03;
        const displacementCoefficient = 0.08;
        if (particle.pointIdx >= model.count) {
            particle.a += (-1 - particle.a) * displacementCoefficient;
            particle.color.set([particle.r, particle.g, particle.b, particle.a]);
            return;
        }
        const { pointIdx } = particle;
        const pointData = slice(model.points.slice(7 * pointIdx, 7 * pointIdx + 7), 0, 7);
        const x = pointData[0];
        const y = pointData[1];
        const z = pointData[2];
        const r = pointData[3];
        const g = pointData[4];
        const b = pointData[5];
        const a = pointData[6];

        const touchInteractionAngleX = -Math.atan(mousePosition.x * interactionCoefficient * frictionCoefficient);
        const transformedX = transform.sc * x + transform.x;
        const touchInteractionFactorX = transformedX * Math.cos(touchInteractionAngleX);
        const touchInteractionFactorY = transformedX * Math.sin(touchInteractionAngleX);

        const touchInteractionAngleY = -Math.atan(mousePosition.y * interactionCoefficient * frictionCoefficient);
        const transformedY = transform.sc * y + transform.y;
        const touchInteractionFactorY2 = transformedY * Math.cos(touchInteractionAngleY);
        const pointZShifted = z + touchInteractionFactorY + transformedY * Math.sin(touchInteractionAngleY);

        const displacementX = touchInteractionFactorX - mousePosition.x * interactionCoefficient - particle.x;
        const displacementY = touchInteractionFactorY2 - mousePosition.y * interactionCoefficient - particle.y;

        particle.x += displacementX * displacementCoefficient;
        particle.y += displacementY * displacementCoefficient;
        particle.z += (pointZShifted - particle.z) * displacementCoefficient;
        particle.point.set([particle.x, particle.y, particle.z]);

        particle.r += (r - particle.r) * displacementCoefficient;
        particle.g += (g - particle.g) * displacementCoefficient;
        particle.b += (b - particle.b) * displacementCoefficient;
        particle.a += (a - particle.a) * displacementCoefficient;
        particle.color.set([particle.r, particle.g, particle.b, particle.a]);
    },
};
export default ParticalEffect;
