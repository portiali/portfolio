export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
      <div className="max-w-4xl w-full relative">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-8">about me</h1>

        {/* Content Box */}
        <div className="relative bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 border dark:border-gray-700 z-10">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {/* ← Replace this with your about text */}
            Hey there! I’m Portia — a curious and creative problem solver who’s passionate about both technology and the arts.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            From coding elegant web apps to performing on stage, I’m driven by the challenge of bringing ideas to life. I love crafting thoughtful digital experiences that are as meaningful as they are functional.
          </p>
        </div>

        {/* Profile Image */}
        <div className="absolute top-[-40px] right-[-240px] w-[280px] h-[360px] rounded-md overflow-hidden shadow-xl border dark:border-gray-700">
          <img
            src="/profile.jpg" // Update this with your real image path
            alt="Portia Li"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
