import ProjectCard from '@/components/ProjectCard'
import TypingText from '@/components/TypingText'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-16 flex items-start justify-center">
      <div className="font-mono max-w-6xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-10 shadow-lg backdrop-blur-sm space-y-10">
        
        {/* Animated Heading */}
        <TypingText text="my projects" className="text-4xl" />

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Study Pet"
            description="A gamified productivity tracker that reacts to how long you study."
            tools={['React', 'Express', 'MongoDB', 'Tailwind', 'REST']}
            link="https://github.com/yourname/study-pet"
          />
          <ProjectCard
            title="CTA Bus Tracker"
            description="Live tracker for Chicago buses using the CTA API and OpenStreetMap."
            tools={['C++', 'cURL', 'API', 'JSON']}
          />
          <ProjectCard
            title="SeedSwap"
            description="A map-based platform for trading seeds locally."
            tools={['Next.js', 'MongoDB', 'Auth0', 'OpenCage']}
            link="https://seedswap.app"
          />
        </div>
      </div>
    </div>
  )
}
