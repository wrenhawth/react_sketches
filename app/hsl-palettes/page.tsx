'use client';

import React from 'react';
import { HSL, generateRandomHSL } from '../lib/color';
import { Container } from '../ui/components';

type PaletteOptions = {
    minHue: number,
    maxHue: number,
    numColors: number,
    lightness: number,
    saturation: number
    round: boolean
}

const generatePalette = ({ minHue, maxHue, numColors, lightness, saturation, round }: PaletteOptions) => {
    const hueDifference = (maxHue - minHue) / numColors
    const hueValues = Array.from({ length: numColors }, (_, i) => round ? Math.round(minHue + hueDifference * i) : minHue + hueDifference * i)
    const hslValues = hueValues.map((hue) => ({ hue, saturation, lightness }))
    return hslValues
}

type ValueInputProps = {
    min: number
    max: number
    step?: number,
    onChange: React.ChangeEventHandler<HTMLInputElement>
    label: string,
    value: number
}

const ValueRange = ({ min, max, step, value, onChange, label }: ValueInputProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <label>{label}</label>
            <input
                type="range"
                min={min}
                max={max}
                step={step ?? 1}
                value={value}
                onChange={onChange} />
            <p>{value}</p>
        </div>
    )
}

const ROUND = true
export default function HSLPalettes() {
    const [saturation, setSaturation] = React.useState(70)
    const [lightness, setLightness] = React.useState(70)
    const [minHue, setMinHue] = React.useState(360)
    const [maxHue, setMaxHue] = React.useState(0)
    const [numColors, setNumColors] = React.useState(7)
    const colorValues = generatePalette({ minHue, maxHue, numColors, lightness, saturation, round: ROUND })
    return (
        <Container className='items-center'>
            <h1 className="text-5xl pb-10">HSL Palette</h1>
            <ValueRange label="Num Colors" min={1} max={20} step={1} value={numColors} onChange={(event) => setNumColors(Number.parseInt(event.currentTarget.value))} />
            <ValueRange label="Start Hue" min={0} max={360} step={1} value={minHue} onChange={(event) => setMinHue(Number.parseInt(event.currentTarget.value))} />
            <ValueRange label="End Hue" min={0} max={360} step={1} value={maxHue} onChange={(event) => setMaxHue(Number.parseInt(event.currentTarget.value))} />
            <ValueRange label="Saturation" min={0} max={100} step={1} value={saturation} onChange={(event) => setSaturation(Number.parseInt(event.currentTarget.value))} />
            <ValueRange label="Lightness" min={0} max={100} step={1} value={lightness} onChange={(event) => setLightness(Number.parseInt(event.currentTarget.value))} />
            {
                colorValues.map(({ hue, saturation, lightness }, index) => (
                    <div key={hue} className='flex items-center gap-3'>
                        <div className='h-20 w-20 text-center align-middle content-center' style={{ backgroundColor: `hsl(${hue}deg ${saturation}% ${lightness}%)` }}>{index + 1}</div>
                        <p>Hue: {hue}, Saturation: {saturation}, Lightness: {lightness}</p>
                    </div>
                ))
            }
        </Container>
    )
}