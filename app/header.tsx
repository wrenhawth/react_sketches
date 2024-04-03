import React from 'react';
import _ from 'lodash';

const EMOJI_LIST = [
    '✏️',
    '🎨',
    '📔',
    '✍️',
    '📓',
    '🖼️',
    '🖌️',
    '📝',
    '📚',
    '📖',
    '💻',
    '🎹',
    '⚙️',
    '💡',
    '💭',
    '✨',
    '🌟',
    '⚡',
    '💫',
    '🏳️‍⚧️',
    '🏳️‍🌈',
    '🎶',
    '🎸',
    '🧪'
]

export default function Header() {
    const shuffledEmojis = _.shuffle(EMOJI_LIST)
    return (
        <header className="flex w-full items-start justify-between">
            <div>
                <h1 className="text-4xl text-fuchsia-700">Wren&apos;s Sketches</h1>
                <h2 className="text-3xl text-pink-600">A collection of things in progress</h2>
            </div>
            <div className="text-3xl grid grid-cols-12">{shuffledEmojis.map((e) => <p key={e} aria-hidden>{e}</p>)}</div>
        </header>
    )
}