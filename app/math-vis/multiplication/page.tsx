"use client"
import clsx from 'clsx';
import React from 'react';

const textColorMap: {[key: string]: string | undefined} = {
    'pink': 'text-pink-500',
    'purple': 'text-purple-500'
}

function TermInput({ name, defaultValue, disabled, color }: { name: string, defaultValue: number, disabled: boolean, color?: string}) {
    const textColor = (color && textColorMap[color]) ?? 'black';
    const cls = clsx('w-32 text-3xl', textColor);
    return <input className={cls} aria-label={name} disabled={disabled} defaultValue={defaultValue} type="number" name={name} />
}
export default function Multiplication() {
    const [termA, setTermA] = React.useState<number | null>(null)
    const [termB, setTermB] = React.useState<number | null>(null)
    const [calculateNumber, setCalculateNumber] = React.useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const termA = formData.get("termA")?.toString()
        const termB = formData.get("termB")?.toString()
        const valueA = termA ? Number.parseInt(termA) : null;
        const valueB = termB ? Number.parseInt(termB) : null;
        setTermA(valueA)
        setTermB(valueB)
        setCalculateNumber(true)
    }


    return (
        <div className='container flex min-h-screen flex-col justify-between items-center p-24'>
            <div className="w-3/4 items-center">
                <h1 className='text-5xl'>Multiplication</h1>
                <form className='w-full pt-5' onSubmit={handleSubmit}>
                    <div className="flex flex-auto justify-between flex-row">
                        <div className="w-full flex flex-auto justify-around">
                            <TermInput color='pink' name="termA" defaultValue={termA ?? 1} disabled={calculateNumber} />
                            <p className="text-3xl">X</p>
                            <TermInput color='purple' name="termB" defaultValue={termB ?? 1} disabled={calculateNumber} />
                        </div>
                        <div className='w-full flex flex-auto items-center justify-around'>
                            <p className="text-3xl">=</p>
                            {calculateNumber && termA && termB && <p className='text-3xl'>{termA * termB}</p>}
                            {!calculateNumber &&
                                <button className="text-3xl rounded-md border border-black bg-slate-100 px-3">???</button>
                            }
                        </div>
                    </div>
                </form>
                <div className='flex flex-auto justify-around items-center pt-4'>
                    <button className="text-3xl rounded-md border border-black bg-slate-100 px-3" onClick={() => setCalculateNumber(false)}>Reset</button>
                </div>
            </div>
        </div>
    )
}