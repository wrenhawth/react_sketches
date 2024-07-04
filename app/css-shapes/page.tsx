import React from "react";
import { Container } from "../ui/components";
import clsx from "clsx";

export default function CssShapes() {
    return (
        <Container>
            <h1 className='text-5xl'>CSS Shapes </h1>
            <div className="grid grid-cols-4 items-center justify-center">
                <Shape className="bg-indigo-500 h-20 w-20 items-center">Square</Shape>
                <Shape className="bg-green-500 h-20 w-20 rounded-full  items-center">Circle</Shape>
                <Shape className="bg-pink-500 h-20 w-20 text-xs justify-center items-end pb-2 triangle">Triangle</Shape>

            </div>
        </Container>
    )
}

function Shape({ className, children }: { className?: string, children: React.ReactNode }) {
    const cls = clsx('flex justify-center', className)
    return (
        <div className={cls}>
            <p className="text-white">{children}</p>
        </div>
    )
}