'use client'
import Heading from './Heading'
import Bio from './Bio'
import SocialIcons from './SocialIcons'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="font-mono max-w-xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-8 space-y-6 text-left shadow-lg backdrop-blur-sm">
        <Heading />
        <Bio />
        <SocialIcons />
      </div>
    </div>
  )
}
