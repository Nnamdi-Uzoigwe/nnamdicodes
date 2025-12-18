'use client'

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { FaGithub, FaInstagram, FaRegUser, FaXTwitter } from "react-icons/fa6"
import { useTheme } from "../context/ThemeContext"
import { FaHome } from "react-icons/fa"
import { BriefcaseBusiness, Layers, Mail, User } from "lucide-react"
import { IoHomeOutline } from "react-icons/io5"

export default function Navbar() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <nav className="fixed bottom-8 lg:top-4 left-0 right-0 z-50 px-3 lg:px-8 pointer-events-none">
      <div
        className={`
          max-w-4xl mx-auto
          backdrop-blur-md
          rounded-[14px]
          px-4 lg:px-6 py-4
          transition-all duration-300
          border
          pointer-events-auto
          ${isDark
            ? 'bg-[#0d0d0d]/60 border-gray-600/50'
            : 'bg-white/50 border-gray-300/50'
          }
        `}
      >

        

        <div className="hidden lg:flex justify-between items-center">

          {/* logo
          <div className={`font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="text-red-600">{"<"}</span>
            <span className="text-green-600 mr-1">{">"}</span>
            Nnamdi
          </div> */}
          {/* logo */}
          <div style={{ fontFamily: "var(--font-poppins)" }} className={`font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            NC
            <span style={{ fontFamily: "var(--font-inter)" }} className="font-bold text-indigo-500">{" "}{">_"}</span>
          </div>

          {/* links */}
          <div className={`hidden lg:flex gap-4 transition-colors duration-300 ${
            isDark ? 'text-gray-200' : 'text-gray-800'
          }`}>
            <Link href="/about">About</Link>
            <Link href="/stack">Tech Stack</Link>
            <Link href="/works">Work</Link>
            <Link href="/contact">Contact</Link>
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


        {/* mobile nav */}
        <div className="flex justify-between items-center text-gray-600 dark:text-gray-300 text-lg lg:hidden">
          {/* home */}
          <Link href="/" className="flex flex-col items-center">
            <IoHomeOutline size={24} />
            <p className="text-[10px]">Home</p>
          </Link>
          {/* about */}
          <Link href="/about" className="flex flex-col items-center">
            <User size={24} />
            <p className="text-[10px]">About</p>
          </Link>
          {/* tech stack */}
          <Link href="/stack" className="flex flex-col items-center">
            <Layers />
            <p className="text-[10px]">Tech Stack</p>
          </Link>
          {/* work */}
          <Link href="/works" className="flex flex-col items-center">
            <BriefcaseBusiness />
            <div className="text-[10px]">Work</div>
          </Link>
          {/* contact */}
          <Link href="/contact" className="flex flex-col items-center">
            <Mail />
            <div className="text-[10px]">Contact</div>
          </Link>
          <span>
            |
          </span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}