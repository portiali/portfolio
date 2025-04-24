

'use client'
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ title, description, tools, link }) {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] border border-white/20 backdrop-blur-sm text-gray-300 p-6 rounded-md shadow-md hover:shadow-lg transition space-y-4">

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${title} external link`}>
            <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-400 transition" />
          </a>
        )}
      </div>

      <p className="text-sm leading-relaxed text-gray-300">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs">
        {tools.map((tool, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-white/10 text-white border border-white/20 rounded-md"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
