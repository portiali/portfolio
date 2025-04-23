export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 space-y-6 border dark:border-gray-700 text-center">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold">hi! it&apos;s portia</h1>
        
        {/* Bio Placeholder */}
        <p className="text-gray-700 dark:text-gray-300">
          {/* ← Replace this with your bio! */}
          I&apos;m a developer with a passion for creative technology, clean code, and continuous learning. I love building elegant experiences with both frontend and backend tools.
        </p>

        {/* Tech Icons */}
        <div className="flex justify-center flex-wrap gap-4 pt-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">🐍 Python</div>
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">C</div>
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">C++</div>
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">☕ Java</div>
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">💻 JavaScript</div>
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">🛢️ SQL</div>
        </div>

      </div>
    </div>
  );
}
