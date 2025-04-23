import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

export default function SocialIcons() {
  return (
    <div className="pt-4 flex gap-6 text-gray-400">
      <a href="https://github.com/portiali" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github className="w-5 h-5 hover:text-white transition" />
      </a>
      <a href="https://linkedin.com/in/portia-li1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
      </a>
      <a href="https://instagram.com/portialii" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram className="w-5 h-5 hover:text-pink-400 transition" />
      </a>
      <a href="mailto:portiali530@gmail.com" aria-label="Email">
        <Mail className="w-5 h-5 hover:text-red-400 transition" />
      </a>
    </div>
  )
}
