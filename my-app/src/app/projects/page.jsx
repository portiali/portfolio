import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>

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
  )
}
