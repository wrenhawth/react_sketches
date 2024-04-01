"use client"

import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import _ from 'lodash';
import { Button, Center } from '@/ui/components';

enum Color {
    PINK = 'pink',
    PURPLE = 'purple'
}
const textColorMap: { [key in Color]: string } = {
    'pink': 'text-pink-500',
    'purple': 'text-purple-500'
}

const bgColorMap: { [key in Color]: string } = {
    'pink': 'bg-pink-500',
    'purple': 'bg-purple-500'
}

//  const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1 }, (v, k) => start + step * k)

function Dot({ label, color }: { color: Color, label?: string }) {
    const cls = clsx('w-10 h-10 rounded-3xl flex justify-center items-center', bgColorMap[color])
    return (
        <div className={cls}>
            <p className='text-white'>{label}</p>
        </div>
    )
}

function TermInput({ name, value, onChange, color }: { name: string, value: number, onChange: React.FormEventHandler<HTMLInputElement>, color?: Color }) {
    const textColor = (color && textColorMap[color]) ?? 'black';
    const cls = clsx('w-32 text-3xl', textColor);
    return <input
        onChange={onChange}
        className={cls}
        aria-label={name}
        value={value}
        type="number"
        name={name}
    />
}

const CAT_EMOJIS = ['🐈', '🐈‍⬛', '🐱']
export default function Multiplication() {
    const [termA, setTermA] = React.useState<number>(1)
    const [termB, setTermB] = React.useState<number>(1)
    const [showAddition, setShowAddition] = React.useState(false)
    const [showDots, setShowDots] = React.useState(false)
    const [showCats, setShowCats] = React.useState(false)
    const aRange = _.range(1, termA + 1)
    const bRange = _.range(1, termB + 1)
    const bothNumbers = !Number.isNaN(termA) && !Number.isNaN(termB)
    return (
        <div className='container flex min-h-screen flex-col justify-between items-center p-24'>
            <div className="w-3/4 items-center bg-">
                <h1 className='text-5xl'>Multiplication 🐈🐈‍⬛ </h1>
                <div className='w-full pt-5'>
                    <div className="flex flex-auto justify-between flex-row">
                        <div className="w-full flex flex-auto justify-around">
                            <p className="text-3xl">What's</p>
                            <TermInput color={Color.PINK} name="termA" value={termA} onChange={(e) => setTermA(Number.parseInt(e.currentTarget.value))} />
                            <p className="text-3xl">X</p>
                            <TermInput color={Color.PURPLE} name="termB" value={termB} onChange={(e) => setTermB(Number.parseInt(e.currentTarget.value))} />
                            <p className="text-3xl">?</p>

                        </div>
                    </div>
                </div>
                {bothNumbers && <div className='flex flex-auto justify-around items-center pt-6'>
                    <p>It's <span className="text-2xl mx-2 text-pink-500">{termA}</span> {termA == 1 ? 'group' : 'groups'} of <span className="text-2xl mx-2 text-purple-500">{termB}</span></p>
                </div>
                }
                {!showAddition && <Center className='pt-6'><Button onClick={() => setShowAddition(true)}>How do I figure that out?</Button></Center>}
                {bothNumbers && showAddition &&
                    <div className='pt-6'>
                        <h2 className='text-2xl'>Try this:</h2>
                        <div className='flex flex-auto justify-around items-center pt-4'>
                            <div className='flex flex-auto justify-around items-center pt-4'>

                                <p className="text-2xl">{termA}</p>
                                <p className="text-2xl">X</p>
                                <p className="text-2xl">{termB}</p>
                            </div>
                            <div className='flex flex-auto justify-around items-center pt-4'>
                                <p className="text-2xl">=</p>
                            </div>
                            <div className='flex-auto grid grid-cols-20 justify-around auto-cols-auto place-content-center justify-items-center items-center pt-4'>

                                {aRange.map((a, index) => (
                                    (<React.Fragment key={`${termA}-${a}`}>
                                        <p className={`grid-col-1 text-2xl ${textColorMap.purple}`}>{termB}</p> {index < termA - 1 && <p className='grid-col-1'>+</p>}
                                    </React.Fragment>)
                                ))}
                                {/* = 
                    {calculateNumber && termA && termB && <p className='text-2xl'>{termA * termB}</p>} */}
                            </div>
                        </div>
                    </div>
                }
                {!showDots && <Center className='pt-6'><Button onClick={() => setShowDots(true)}>What's that look like?</Button></Center>}

                {bothNumbers && showDots && (
                    <div className='pt-4'>
                        {aRange.map((a) => (<div className='flex justify-center items-center' key={a}>
                            <p className='mr-4 text-pink-500'>Group {a}</p>
                            {bRange.map((b) => <Dot key={b} color={Color.PURPLE} label={((a - 1) * termB + b).toFixed(0)} />)}
                        </div>))}
                    </div>
                )}

                {!showCats && <Center className='pt-6'><Button onClick={() => setShowCats(true)}>How many cats is that?</Button></Center>}
                {bothNumbers && showCats && (
                    <div className='pt-4 text-center'>
                        <p className="text-2xl">This many!</p>
                        {aRange.map((a) => (<div className='flex justify-center items-center' key={a}>
                            {bRange.map((b) => <p className='text-2xl' key={b}>{CAT_EMOJIS[_.random(0, CAT_EMOJIS.length - 1)]}</p>)}
                        </div>))}
                    </div>
                )}
                <div className='flex flex-auto justify-around items-center pt-4'>
                    <Button onClick={() => {
                        setShowAddition(false)
                        setShowDots(false)
                        setShowCats(false)
                    }
                    }>Reset</Button>
                </div>
            </div>
        </div>
    )
}