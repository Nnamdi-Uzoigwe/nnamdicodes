'use client'

import FlashCard from "@/app/components/home/FlashCard"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function GetToKnowMe() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const data = [
    {
      id: 1,
      title: "About Me",
      description: "Who I am and what I do",
      image: "/memoji.png"
    },
    {
      id: 2,
      title: "Tech Stack",
      description: "The dev tools, frameworks, and apps I use",
      image: "/stack.png"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".flash-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // animation starts when section enters viewport
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-60 pb-20"
    >
      <h1 className="text-[25px] mb-8 lg:text-[37px] font-semibold text-gray-700 dark:text-white">
        Get to Know Me
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.id} className="flash-card">
            <FlashCard
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
