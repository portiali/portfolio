import TypingText from "@/components/TypingText";
export default function About() {
  return (
    <div className="min-h-screen bg-black px-6 py-16 flex items-start justify-start gap-8">

      <div className="font-mono max-w-4xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-8 space-y-6 text-left shadow-lg backdrop-blur-sm">
        <TypingText text="about me" className="text-4xl" />
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            hey there! i’m Portia — a curious and creative problem solver from the Boston area who’s passionate about both technology and the arts.
          </p>
          <p>
            i grew up immersed in the world of ballet, spending years in studios perfecting choreography rather than writing code. it wasn’t until late high school and early college that I discovered computer science—and immediately fell in love with the creative problem-solving it offered. 
            now, i’m a Computer Science major at Northwestern University, where I combine that same discipline and creativity to build technology with impact.
          </p>
          <p>
            outside the classroom, i’m involved in Develop + Innovate for Social Change, where i work on web development projects for social impact organizations, and Kappa Theta Pi, Northwestern’s professional tech fraternity that’s given me a close-knit community of peers equally passionate about tech. 
            i’m also a member of Delta Gamma sorority, where i’m constantly inspired by driven women who empower each other to lead with confidence and compassion.
          </p>
        </div>
      </div>

      <div className="w-[280px] h-[360px] overflow-hidden shadow-xl border border-white shrink-0">
        <img
          src="/profile.jpg"
          alt="Portia Li"
          className="object-cover w-full h-full"
        />
      </div>

    </div>
  );
}
