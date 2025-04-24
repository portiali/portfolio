import SocialIcons from "@/components/SocialIcons"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-16 flex flex-col items-center justify-center space-y-8">
      {/* Contact Form Box */}
      <form
        action="https://formsubmit.co/portiali530@gmail.com"
        method="POST"
        className="font-mono max-w-2xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-8 rounded-none shadow-lg backdrop-blur-sm space-y-6 text-left"
      >
        <h1 className="text-4xl font-bold text-white">contact me</h1>

        <input type="hidden" name="_subject" value="New message from portfolio" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm text-gray-300">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black p-2 rounded hover:opacity-80 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Icons Below, Centered */}
      <div className="pt-4">
        <SocialIcons />
      </div>
    </div>
  )
}
