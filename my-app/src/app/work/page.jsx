

import WorkTimeline from '@/components/WorkTimeline'

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 flex items-center justify-center">
      <section
        aria-labelledby="work-heading"
        className="w-full max-w-4xl"
      >
        {/* Screen reader friendly hidden heading */}
        <h1 id="work-heading" className="sr-only">Work Experience Timeline</h1>

        <WorkTimeline />
      </section>
    </main>
  )
}
