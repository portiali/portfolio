import ProjectCard from '@/components/ProjectCard'
import TypingText from '@/components/TypingText'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 flex items-start justify-center">
      <section
        aria-labelledby="projects-heading"
        className="font-mono max-w-6xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-10 shadow-lg backdrop-blur-sm space-y-10"
      >
        <TypingText text="my projects" className="text-4xl text-white" />
        <h1 id="projects-heading" className="sr-only">Projects</h1>

        {/* Organized Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 items-stretch"
          role="list"
        >
          {[
            {
              title: "SplitEasy",
              description:
                "Real-time group payment app with receipt OCR, itemized bill splitting, and WebSocket-based live updates.",
              tools: ['FastAPI', 'GraphQL (Strawberry)', 'Firebase', 'WebSockets', 'Tesseract OCR', 'React'],
              link: "https://github.com/portiali/spliteasy"
            },
            {
              title: "Pick-a-Fit App",
              description: "Cloud-based outfit recommendation system using AWS and weather data.",
              tools: ['AWS', 'Python', 'Docker', 'Rekognition', 'WeatherAPI'],
              link: "https://github.com/portiali/pick-a-fit"
            },
            {
              title: "SeedSwap",
              description:
                "Full-stack seed trading app using RESTful APIs and location-based gardener matching.",
              tools: ['React', 'Node.js', 'Express', 'MongoDB', 'REST'],
              link: "https://github.com/portiali/seedswap"
            },
            {
              title: "Cloud-Native PhotoApp",
              description: "AI image analyzer with secure AWS upload and metadata storage.",
              tools: ['AWS', 'S3', 'Rekognition', 'RDS', 'IAM', 'EC2', 'Python', 'Node.js']
            },
            {
              title: "CampusClicks",
              description:
                "Campus photo-sharing app with a leaderboard and RESTful API backend.",
              tools: ['React', 'Node.js', 'PostgreSQL']
            },
            {
              title: "nuPython Debugger",
              description:
                "Custom debugger for Python-like language using program graph logic.",
              tools: ['C', 'C++']
            },
            {
              title: "CTA Nearest Bus Stop Locator",
              description:
                "Real-time CTA bus prediction tool using cURL and the CTA API in C++.",
              tools: ['C++', 'cURL', 'CTA API']
            },
            {
              title: "Tec-A-Peek",
              description:
                "Python app that parses professor ratings and suggests ideal courses.",
              tools: ['Python']
            },
            {
              title: "Mars Rover Robot",
              description:
                "Team project to build and program an autonomous Mars rover in C.",
              tools: ['C']
            },
          ].map((project, i) => (
            <li key={i} className="h-full flex">
              <div className="h-full w-full">
                <ProjectCard {...project} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
