// import Link from "next/link";
// import { ThemeToggle } from "./ThemeToggle";
// import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-[#f7f5f5]/95 dark:bg-[#111] backdrop-blur-md border rounded-[14px] border-white px-6 py-4">
//         <div className="flex justify-between items-center">
//             {/* logo */}
//             <div className="font-bold">
//                 {"<>"}
//                 <span>Nnamdi</span>
//             </div>

//             {/* links */}
//             <div>
//                 <Link href="/about">About</Link>
//                 <Link href="/about">Tech Stack</Link>
//                 <Link href="/about">Projects</Link>
//                 <Link href="/about">Contact</Link>
//             </div>

//             <section className="flex items-center gap-2">
//                 {/* socials */}
//                 <div className="flex gap-2 text-lg">
//                     <FaInstagram />
//                     <FaXTwitter />
//                     <FaGithub />
//                 </div>
//                 <span>|</span>
//                 {/* theme button */}
//                 <ThemeToggle />
//             </section>
//         </div>
//       </div>
//     </nav>
//   );
// }


// 'use client'

// import Link from "next/link"
// import { ThemeToggle } from "./ThemeToggle"
// import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6"
// import { useEffect, useState } from "react"

// export default function Navbar() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   return (
//     <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
//       <div
//         className="
//           max-w-4xl mx-auto
//           bg-white/20 dark:bg-gray-900/20
//           backdrop-blur-md
//           border border-gray-200 dark:border-gray-600
//           rounded-[14px]
//           px-6 py-4
//           shadow-lg
//         "
//       >
//         <div className="flex justify-between items-center">
          
//           {/* logo */}
//           <div className="font-bold text-gray-900 dark:text-blue-200">
//             {"<>"}
//             Nnamdi
//           </div>

//           {/* links */}
//           <div className="flex gap-4 text-gray-100 dark:text-gray-300">
//             <Link href="/about">About</Link>
//             <Link href="/about">Tech Stack</Link>
//             <Link href="/about">Projects</Link>
//             <Link href="/about">Contact</Link>
//           </div>

//           <section className="flex items-center gap-2">
//             {/* socials */}
//             <div className="flex gap-2 text-lg text-gray-700 dark:text-gray-300">
//               <FaInstagram />
//               <FaXTwitter />
//               <FaGithub />
//             </div>

//             <span className="text-gray-400 dark:text-gray-600">|</span>

//             {/* only gate the toggle */}
//             {mounted && <ThemeToggle />}
//           </section>
//         </div>
//       </div>
//     </nav>
//   )
// }





// 'use client'

// import Link from "next/link"
// import { ThemeToggle } from "./ThemeToggle"
// import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6"
// import { useEffect, useState } from "react"

// export default function Navbar() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   return (
//     <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
//       <div
//         className="
//           max-w-4xl mx-auto
//           bg-white/80 dark:bg-gray-900/80
//           backdrop-blur-md
//           border border-gray-200 dark:border-gray-600
//           rounded-[14px]
//           px-6 py-4
//           shadow-lg
//         "
//       >
//         <div className="flex justify-between items-center">
          
//           {/* logo */}
//           <div className="font-bold text-gray-900 dark:text-white">
//             {"<>"}
//             Nnamdi
//           </div>

//           {/* links */}
//           <div className="flex gap-4 text-gray-900 dark:text-gray-200 font-medium">
//             <Link href="/about" className="hover:text-gray-600 dark:hover:text-white">About</Link>
//             <Link href="/about" className="hover:text-gray-600 dark:hover:text-white">Tech Stack</Link>
//             <Link href="/about" className="hover:text-gray-600 dark:hover:text-white">Projects</Link>
//             <Link href="/about" className="hover:text-gray-600 dark:hover:text-white">Contact</Link>
//           </div>

//           <section className="flex items-center gap-2">
//             {/* socials */}
//             <div className="flex gap-2 text-lg text-gray-900 dark:text-gray-200">
//               <FaInstagram className="hover:text-gray-600 dark:hover:text-white cursor-pointer" />
//               <FaXTwitter className="hover:text-gray-600 dark:hover:text-white cursor-pointer" />
//               <FaGithub className="hover:text-gray-600 dark:hover:text-white cursor-pointer" />
//             </div>

//             <span className="text-gray-400 dark:text-gray-600">|</span>

//             {/* only gate the toggle */}
//             {mounted && <ThemeToggle />}
//           </section>
//         </div>
//       </div>
//     </nav>
//   )
// }
// 'use client'

// import Link from "next/link"
// import { ThemeToggle } from "./ThemeToggle"
// import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6"
// import { useEffect, useState } from "react"
// import { useTheme } from "next-themes"

// export default function Navbar() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, resolvedTheme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   // Get the current theme class based on mounted state and resolvedTheme
//   const getThemeClass = () => {
//     if (!mounted) return 'light' // Default to light before hydration
    
//     // Use resolvedTheme as it's the actual applied theme (accounts for system theme)
//     return resolvedTheme || theme || 'light'
//   }

//   const currentTheme = getThemeClass()
//   const isDark = currentTheme === 'dark'

//   // Don't render until mounted to avoid hydration mismatch
//   if (!mounted) {
//     return (
//       <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md border border-gray-300/50 rounded-[14px] px-6 py-4 shadow-lg">
//           <div className="flex justify-between items-center">
//             <div className="font-bold text-gray-900">{"<>"}Nnamdi</div>
//             <div className="flex gap-4">
//               {[1, 2, 3, 4].map((i) => (
//                 <div key={i} className="w-16 h-4 bg-gray-300/50 rounded"></div>
//               ))}
//             </div>
//             <div className="w-20 h-10 bg-gray-300/50 rounded-lg"></div>
//           </div>
//         </div>
//       </nav>
//     )
//   }

//   return (
//     <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
//       <div
//         className={`
//           max-w-4xl mx-auto
//           backdrop-blur-md
//           rounded-[14px]
//           px-6 py-4
//           transition-all duration-300
//           border
//           ${isDark 
//             ? 'bg-gray-900/80 border-gray-600/50' 
//             : 'bg-white/50 border-gray-300/50'
//           }
//         `}
//       >
//         <div className="flex justify-between items-center">
          
//           {/* logo */}
//           <div className={`font-bold transition-colors duration-300 ${
//             isDark ? 'text-white' : 'text-gray-900'
//           }`}>
//             {"<>"}
//             Nnamdi
//           </div>

//           {/* links */}
//           <div className={`flex gap-4 font-medium transition-colors duration-300 ${
//             isDark ? 'text-gray-200' : 'text-gray-800'
//           }`}>
//             <Link href="/about" className={`hover:transition-colors duration-200 ${
//               isDark ? 'hover:text-white' : 'hover:text-gray-600'
//             }`}>About</Link>
//             <Link href="/about" className={`hover:transition-colors duration-200 ${
//               isDark ? 'hover:text-white' : 'hover:text-gray-600'
//             }`}>Tech Stack</Link>
//             <Link href="/about" className={`hover:transition-colors duration-200 ${
//               isDark ? 'hover:text-white' : 'hover:text-gray-600'
//             }`}>Projects</Link>
//             <Link href="/about" className={`hover:transition-colors duration-200 ${
//               isDark ? 'hover:text-white' : 'hover:text-gray-600'
//             }`}>Contact</Link>
//           </div>

//           <section className="flex items-center gap-2">
//             {/* socials */}
//             <div className={`flex gap-2 text-lg transition-colors duration-300 ${
//               isDark ? 'text-gray-200' : 'text-gray-800'
//             }`}>
//               <FaInstagram className={`cursor-pointer transition-colors duration-200 ${
//                 isDark ? 'hover:text-white' : 'hover:text-gray-600'
//               }`} />
//               <FaXTwitter className={`cursor-pointer transition-colors duration-200 ${
//                 isDark ? 'hover:text-white' : 'hover:text-gray-600'
//               }`} />
//               <FaGithub className={`cursor-pointer transition-colors duration-200 ${
//                 isDark ? 'hover:text-white' : 'hover:text-gray-600'
//               }`} />
//             </div>

//             <span className={`transition-colors duration-300 ${
//               isDark ? 'text-gray-600' : 'text-gray-400'
//             }`}>|</span>

//             {/* Theme toggle */}
//             <ThemeToggle />
//           </section>
//         </div>
//       </div>
//     </nav>
//   )
// }

'use client'

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { useTheme } from "../context/ThemeContext"

export default function Navbar() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div
        className={`
          max-w-4xl mx-auto
          backdrop-blur-md
          rounded-[14px]
          px-6 py-4
          transition-all duration-300
          border
          ${isDark
            ? 'bg-gray-900/80 border-gray-600/50'
            : 'bg-white/50 border-gray-300/50'
          }
        `}
      >
        <div className="flex justify-between items-center">

          {/* logo */}
          <div className={`font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {"<>"}
            Nnamdi
          </div>

          {/* links */}
          <div className={`flex gap-4 font-medium transition-colors duration-300 ${
            isDark ? 'text-gray-200' : 'text-gray-800'
          }`}>
            <Link href="/about">About</Link>
            <Link href="/about">Tech Stack</Link>
            <Link href="/about">Projects</Link>
            <Link href="/about">Contact</Link>
          </div>

          <section className="flex items-center gap-2">
            {/* socials */}
            <div className={`flex gap-2 text-lg transition-colors duration-300 ${
              isDark ? 'text-gray-200' : 'text-gray-800'
            }`}>
              <FaInstagram />
              <FaXTwitter />
              <FaGithub />
            </div>

            <span className={`transition-colors duration-300 ${
              isDark ? 'text-gray-600' : 'text-gray-400'
            }`}>|</span>

            <ThemeToggle />
          </section>

        </div>
      </div>
    </nav>
  )
}
