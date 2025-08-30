

import { MapPin } from 'lucide-react'

export default function Bio() {
  return (
    <section
      aria-labelledby="bio-heading"
      className="space-y-3"
    >
      <h2 id="bio-heading" className="sr-only">Bio</h2>


      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <MapPin className="w-4 h-4" aria-hidden="true" />
        <span aria-label="Location: Evanston, Illinois">evanston, illinois</span>
      </div>

      <p className="text-gray-300 leading-relaxed">
        hi there! i&apos;m a junior CS student at Northwestern and a developer with a passion for creative technology, interdisciplinary applications, and continuous learning.
      </p>
    </section>
  )
}
