import TypingText from "@/components/TypingText";
// export default function About() {
//   return (
//     <div className="min-h-screen bg-black px-6 py-16 flex items-start justify-start">
//       <div className="font-mono max-w-4xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-8 space-y-6 text-left shadow-lg backdrop-blur-sm relative">

//         {/* Heading */}
//         <div className = "flex-1 space-y-6">
//         {/* <h1 className="text-4xl font-bold text-white">about me</h1> */}
//         <TypingText text = "about me"className = "text-4xl"/>

//         {/* Text Content */}
//         <div className="space-y-4 text-gray-300 leading-relaxed">
//           <p>
//             Hey there! I’m Portia — a curious and creative problem solver who’s passionate about both technology and the arts.
//           </p>
//           <p>
//             From coding elegant web apps to performing on stage, I’m driven by the challenge of bringing ideas to life.
//             I love crafting thoughtful digital experiences that are as meaningful as they are functional.
//           </p>
//           </div>
//         </div>
//         {/* Profile Image */}
//         <div className="top-8 right-[-320px] w-[280px] h-[360px] overflow-hidden shadow-xl border border-white">
//           <img
//             src="/profile.jpg" // Update with your real image path
//             alt="Portia Li"
//             className="object-cover w-full h-full"
//           />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default function About(){

// return (
// <div className="font-mono max-w-4xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-8 text-left shadow-lg backdrop-blur-sm flex gap-8">

//   {/* Text Section */}
//   <div className="flex-1 space-y-6">
//     <TypingText text="about me" className="text-4xl" />

//     <div className="space-y-4 text-gray-300 leading-relaxed">
//       <p>
//         Hey there! I’m Portia — a curious and creative problem solver who’s passionate about both technology and the arts.
//       </p>
//       <p>
//         From coding elegant web apps to performing on stage, I’m driven by the challenge of bringing ideas to life.
//         I love crafting thoughtful digital experiences that are as meaningful as they are functional.
//       </p>
//     </div>
//   </div>

//   {/* Image */}
//   <div className="w-[280px] h-[360px] overflow-hidden shadow-xl border border-white shrink-0">
//     <img
//       src="/profile.jpg"
//       alt="Portia Li"
//       className="object-cover w-full h-full"
//     />
//   </div>

// </div>
// );
// }
export default function About() {
  return (
    <div className="min-h-screen bg-black px-6 py-16 flex items-start justify-start gap-8">

      {/* About Me Box */}
      <div className="font-mono max-w-4xl w-full bg-[rgba(105,58,82,0.3)] border border-white p-8 space-y-6 text-left shadow-lg backdrop-blur-sm">
        <TypingText text="about me" className="text-4xl" />
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Hey there! I’m Portia — a curious and creative problem solver who’s passionate about both technology and the arts.
          </p>
          <p>
            From coding elegant web apps to performing on stage, I’m driven by the challenge of bringing ideas to life.
            I love crafting thoughtful digital experiences that are as meaningful as they are functional.
          </p>
        </div>
      </div>

      {/* Profile Image (outside the box) */}
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
