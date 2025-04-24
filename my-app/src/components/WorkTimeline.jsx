'use client'
import TypingText from "./TypingText"

export default function WorkTimeline() {
  const jobs = [
    {
      title: 'Incoming Software Engineering Intern',
      company: 'Delsys',
      date: 'June 2025 – Sept. 2025',
      details: [],
    },
    {
      title: 'Full Stack Developer',
      company: 'Sokana Collective',
      date: 'Jan. 2025 – Present',
      details: [
        'Built a user-friendly website with an admin dashboard for content management.',
        'Developed an online doula training academy with video hosting and Stripe integration.',
        'Implemented video storage and transcoding for optimized content delivery.',
      ],
    },
    {
      title: 'Information Technology Intern & Intern Site Lead',
      company: 'IDEMIA',
      date: 'May 2024 – Aug. 2024',
      details: [
        'Resolved cross-department hardware/software issues and optimized 200+ user domains.',
        'Led intern activities and communication with company HR.',
      ],
    },
  ]

  return (
    <section
      aria-labelledby="work-experience-heading"
      className="font-mono max-w-4xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-8 shadow-lg backdrop-blur-sm space-y-10"
    >
 
      <TypingText text="work experience" className="text-4xl" />
      <h2 id="work-experience-heading" className="sr-only">Work Experience</h2>


      <ul className="space-y-8 text-gray-300" role="list">
        {jobs.map((job, i) => (
          <li key={i} className="space-y-2" role="listitem">
            <div className="text-lg text-white font-semibold">
              {job.title}{' '}
              <span className="text-sm text-gray-400">
                @ {job.company}
              </span>
            </div>
            <div className="text-sm text-gray-400">{job.date}</div>

            {job.details.length > 0 && (
              <ul
                className="list-disc list-inside space-y-1 text-sm pl-4"
                aria-label={`Responsibilities at ${job.company}`}
              >
                {job.details.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
