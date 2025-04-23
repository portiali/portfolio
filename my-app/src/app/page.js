import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 space-y-6 border dark:border-gray-700 text-center">

        {/* Heading */}
        <h1 className="text-3xl font-bold">hi! it&apos;s portia</h1>

        {/* Bio */}
        <p className="text-gray-700 dark:text-gray-300">
          I&apos;m a developer with a passion for creative technology, clean code, and continuous learning.
        </p>

        {/* Icons row */}
        <div className="pt-4 flex justify-center gap-6 text-gray-600 dark:text-gray-300">
          <a href="https://github.com/portiali" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-5 h-5 hover:text-black dark:hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/in/portia-li1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-blue-600 transition" />
          </a>
          <a href="https://instagram.com/portialii" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
          </a>
          <a href="mailto:portiali530@gmail.com" aria-label="Email">
            <Mail className="w-5 h-5 hover:text-red-500 transition" />
          </a>
        </div>

      </div>
    </div>
  );
}
