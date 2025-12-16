// 'use client'

// import { Moon, Sun } from 'lucide-react'
// import { useTheme } from 'next-themes'
// import { useEffect, useState } from 'react'

// export function ThemeToggle() {
//   // const [mounted, setMounted] = useState(false)
//   const { theme, resolvedTheme, setTheme } = useTheme()

//   // useEffect(() => {
//   //   setMounted(true)
//   // }, [])

//   const toggleTheme = () => {
//     const newTheme = theme === 'dark' ? 'light' : 'dark'  
//     setTheme(newTheme)
//   }

//   // if (!mounted) {
//   //   return <div className="w-20 h-10 bg-gray-300/50 rounded-lg" />
//   // }

//   return (
//     <button
//       onClick={toggleTheme}
//       className="cursor-pointer"
//       aria-label="Toggle theme"
//     >
//       {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
//     </button>
//   )
// }


'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
