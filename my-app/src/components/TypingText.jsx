'use client'
import { useEffect, useRef, useState } from 'react'

export default function TypingText({ text, className = '' }) {
  const [done, setDone] = useState(false)
  const ref = useRef()

  // Delay is based on character count
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDone(true)
    }, text.length * 100 + 200) // ~100ms per char

    return () => clearTimeout(timeout)
  }, [text])

  const characters = text.length
  const style = {
    width: done ? `${characters}ch` : '0',
    animation: `typing ${characters * 0.1}s steps(${characters}, end) forwards, blink 0.7s step-end 3`,
  }

  return (
    <h1
      ref={ref}
      className={`font-mono text-4xl font-bold text-white overflow-hidden whitespace-nowrap ${done ? 'typing-done' : 'typing'} ${className}`}
      style={style}
    >
      {text}
    </h1>
  )
}
