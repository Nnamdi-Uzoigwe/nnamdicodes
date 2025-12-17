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
            ? 'bg-[#0d0d0d]/60 border-gray-600/50'
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
          <div className={`hidden lg:flex gap-4 font-medium transition-colors duration-300 ${
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
