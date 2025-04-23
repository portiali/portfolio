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
            title="Pick-a-Fit App"
            description="Cloud-based outfit recommendation system using AWS and weather data."
            tools={['AWS', 'Python', 'Docker', 'Rekognition', 'WeatherAPI']}
            link="https://github.com/portiali/pick-a-fit"
          />
          <ProjectCard
            title="SeedSwap"
            description="Built a full-stack web app for seed trading using React, Node.js, Express, and MongoDB. Implemented RESTful APIs, user authentication, and location-based gardener matching to support a community-driven seed swapping platform."
            tools={['React', 'Node.js', 'Express', 'MongoDB', 'REST']}
            link="https://github.com/portiali/seedswap"
          />


          <ProjectCard
            title="Cloud-Native PhotoApp"
            description="Image app with secure upload, AI image analysis, and metadata storage using AWS and Python."
            tools={['AWS', 'S3', 'Rekognition', 'RDS', 'IAM', 'EC2', 'Python', 'Node.js']}
          />

          <ProjectCard
            title="CampusClicks"
            description="Full-stack campus photo sharing app with leaderboard and RESTful API integration."
            tools={['React', 'Node.js', 'PostgreSQL']}
            // link="https://github.com/yourname/campusclicks"
          />

          <ProjectCard
            title="nuPython Debugger"
            description="Custom debugger for a Python-inspired language. Enabled runtime testing and breakpoint control with a program graph."
            tools={['C', 'C++']}
          />

          <ProjectCard
            title="CTA Nearest Bus Stop Locator"
            description="Real-time prediction system using CTA API and cURL in C++. Built a fast and user-friendly transit tool."
            tools={['C++', 'cURL', 'CTA API']}
          />

          <ProjectCard
            title="Tec-A-Peek"
            description="Python app for parsing professor ratings and delivering personalized course recommendations."
            tools={['Python']}
            // link="https://github.com/yourname/tec-a-peek"
          />

          <ProjectCard
            title="Mars Rover Robot"
            description="Led a team to build an autonomous Mars rover that navigates terrain and collects samples. Improved nav accuracy by 3x."
            tools={['C']}
          />
        </div>
      </div>
    </div>
  )
}
