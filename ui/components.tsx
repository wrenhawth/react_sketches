import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    const { children, className, ...restProps } = props
    const cls = clsx(className, 'bg-slate-50 hover:bg-slate-200 text-black border border-black font-bold py-2 px-4 rounded')
    return <button className={cls} {...restProps}>{props.children}</button>
}

export function Center({ className, children }: { children: React.ReactNode | React.ReactNode[], className?: string }) {
    const cls = clsx(className, 'flex flex-auto justify-center items-center')
    return <div className={cls}>{children}</div>
}