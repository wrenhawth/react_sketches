'use client';

import React from 'react';
import { HSL, generateRandomHSL } from '../lib/color';
import { Container } from '../ui/components';

export default function HSLTrainer() {
    const [currentColor, setCurrentColor] = React.useState<HSL>(generateRandomHSL())
    const { hue, saturation, lightness } = currentColor
    return (
        <Container className='items-center'>
            <h1 className="text-5xl pb-10">HSL Game</h1>
            <div className='h-20 w-20' style={{backgroundColor: `hsl(${hue}deg ${saturation}% ${lightness}%)`}} />
        </Container>
    )
}