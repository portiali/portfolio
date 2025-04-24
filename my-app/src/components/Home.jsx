
'use client'
import Heading from './Heading'
import Bio from './Bio'
import SocialIcons from './SocialIcons'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-black">
      <section
        aria-labelledby="home-heading"
        className="font-mono max-w-xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-8 space-y-6 text-left shadow-lg backdrop-blur-sm"
      >

        <h1 id="home-heading" className="sr-only">Home - Portia Li</h1>

        <Heading />
        <Bio />
        <SocialIcons />
      </section>
    </main>
  )
}
