import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

export default function SocialIcons() {
  return (
    <section
      aria-labelledby="social-heading"
      className="pt-4 flex gap-6 text-gray-400"
    >

      <h2 id="social-heading" className="sr-only">Social media links</h2>

      <a
        href="https://github.com/portiali"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
      >
        <Github className="w-5 h-5 hover:text-white transition" aria-hidden="true" />
      </a>

      <a
        href="https://linkedin.com/in/portia-li1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <Linkedin className="w-5 h-5 hover:text-blue-400 transition" aria-hidden="true" />
      </a>

      <a
        href="https://instagram.com/portialii"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram profile"
      >
        <Instagram className="w-5 h-5 hover:text-pink-400 transition" aria-hidden="true" />
      </a>

      <a
        href="mailto:portiali530@gmail.com"
        aria-label="Send email to Portia"
      >
        <Mail className="w-5 h-5 hover:text-red-400 transition" aria-hidden="true" />
      </a>
    </section>
  )
}
