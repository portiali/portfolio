
'use client'
import Link from 'next/link'
import { Home } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav
      role="navigation"
      aria-label="Main site navigation"
      className="font-mono relative flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700"
    >

      <Link
        href="/"
        className="flex items-center gap-2 hover:opacity-75"
        aria-label="Home"
      >
        <Home className="w-5 h-5" aria-hidden="true" />
        <span className="hidden sm:inline">home</span>
      </Link>


      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
        <Link href="/about" className="hover:underline">about</Link>
        <Link href="/projects" className="hover:underline">projects</Link>
        <Link href="/work" className="hover:underline">work</Link>
        <Link href="/contact" className="hover:underline">contact</Link>
      </div>

      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar
