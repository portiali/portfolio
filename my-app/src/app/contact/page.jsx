// import SocialIcons from "@/components/SocialIcons"
// import TypingText from "@/components/TypingText"

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-black px-6 py-16 flex flex-col items-center justify-center space-y-8">
//       <form
//         action="https://formsubmit.co/portiali530@gmail.com"
//         method="POST"
//         className="font-mono max-w-2xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-8 rounded-none shadow-lg backdrop-blur-sm space-y-6 text-left"
//       >
//         <TypingText text="contact me" className="text-4xl" />

//         <input type="hidden" name="_subject" value="New message from portfolio" />
//         <input type="hidden" name="_captcha" value="false" />

//         <div className="space-y-2">
//           <label htmlFor="name" className="block text-sm text-gray-300">name</label>
//           <input
//             type="text"
//             name="name"
//             required
//             className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
//           />
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="email" className="block text-sm text-gray-300">email</label>
//           <input
//             type="email"
//             name="email"
//             required
//             className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
//           />
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="message" className="block text-sm text-gray-300">message</label>
//           <textarea
//             name="message"
//             rows="5"
//             required
//             className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="font-mono w-full bg-white text-black p-2 rounded hover:opacity-80 transition"
//         >
//           send message
//         </button>
//       </form>

//       <div className="pt-4">
//         <SocialIcons />
//       </div>
//     </div>
//   )
// }


import SocialIcons from "@/components/SocialIcons"
import TypingText from "@/components/TypingText"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 flex flex-col items-center justify-center space-y-8">
      {/* Contact Form Section */}
      <section
        aria-labelledby="contact-heading"
        className="font-mono max-w-2xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-8 shadow-lg backdrop-blur-sm space-y-6 text-left"
      >
        <TypingText text="contact me" className="text-4xl text-white" />
        <span id="contact-heading" className="sr-only">Contact Me Form</span>

        <form
          action="https://formsubmit.co/portiali530@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_subject" value="New message from portfolio" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm text-gray-300">name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-gray-300">email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm text-gray-300">message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black p-2 rounded hover:opacity-80 transition"
            aria-label="Send message"
          >
            send message
          </button>
        </form>
      </section>


      <section aria-label="Social media links" className="pt-4">
        <SocialIcons />
      </section>
    </main>
  )
}
