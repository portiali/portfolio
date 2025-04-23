// // export default function Heading() {
// //   return (
// //     <h1 className="text-4xl font-bold text-white typing">
// //       portia li
// //     </h1>
// //   )
// // }

// 'use client'
// import { useEffect, useState } from 'react'

// export default function Heading() {
//   const [done, setDone] = useState(false)

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDone(true)
//     }, 2000) // match the typing animation duration

//     return () => clearTimeout(timeout)
//   }, [])

//   return (
//     <h1 className={`text-4xl font-bold text-white ${done ? 'typing-done' : 'typing'}`}>
//       portia li
//     </h1>
//   )
// }

import TypingText from '@/components/TypingText'

export default function Heading() {
  return <TypingText text="portia li" />
}

