

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
      {theme === 'dark' ? <Sun size={18} className='text-white'/> : <Moon size={18} />}
    </button>
  )
}
