'use client'
import { Code2, Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ title, description, tools, link }) {
  return (
    <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition p-6 space-y-4">
      
      {/* Title */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-5 h-5 text-gray-500 hover:text-blue-500" />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 pt-2 text-xs">
        {tools.map((tool, i) => (
          <span
            key={i}
            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
