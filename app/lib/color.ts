import _ from 'lodash';

export type HSL = {
    hue: number;
    saturation: number;
    lightness: number;
}

function round(n: number, step: number) {
    return Math.floor(n / step) * step
}

export function generateRandomHSL(step: number = 5) {
    const hue = round(_.random(0, 360), step)
    const saturation = round(_.random(0, 100), step)
    const lightness = round(_.random(0, 100), step)
    return {
        hue, 
        saturation,
        lightness
    }
}