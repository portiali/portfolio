
import { MapPin } from 'lucide-react'

export default function Bio() {
  return (
    <div className="space-y-3">
      {/* Location */}
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <MapPin className="w-4 h-4" />
        <span>evanston, illinois</span>
      </div>

      {/* Bio Text */}
      <p className="text-gray-300 leading-relaxed">
        hi there! i&apos;m a sophomore CS student at Northwestern and a developer with a passion for creative technology, interdisciplinary applications, and continuous learning.
      </p>
    </div>
  )
}
