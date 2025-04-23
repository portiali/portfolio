import { Geist } from 'next/font/google'
import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'
import Navbar from '@/components/Navbar'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ThemeToggle />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
