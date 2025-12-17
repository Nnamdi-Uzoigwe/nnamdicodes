'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ProjectCard from "@/app/components/home/ProjectCard"
import WhiteButton from '@/app/components/WhiteButton'
import BlackButton from '@/app/components/BlackButton'

const SelectedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const projectsData = [
    {
      id: 1,
      title: "Subbi - The free subscriptions manager",
      logo: "/subbilogo.png",
      description: "Subbi is a side project that I've built to help me keep track of how much I spend on subscriptions and also to prevent the accidental bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
      image: "/subbyimg.png"
    },
    {
      id: 2,
      title: "React Documentation",
      logo: "/React.png",
      description: "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
      image: "/reactDoc.png"
    },
    {
      id: 3,
      title: "Storybook Documentation",
      logo: "/storybook.png",
      description: "This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.",
      image: "/storybookDoc.png"
    },
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const cards = sectionRef.current.querySelectorAll('.project-card-wrapper')

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%', // start when the card reaches 90% of viewport height
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <div ref={sectionRef} className="px-6 lg:px-60 pb-20 will-change-transform">
      <h1 className="text-[25px] mb-8 lg:text-[37px] font-semibold text-gray-700 dark:text-white">
        Selected Work
      </h1>
      <div className="flex flex-col gap-4">
        {projectsData.map((item) => (
          <div key={item.id} className="project-card-wrapper">
            <ProjectCard
              title={item.title}
              description={item.description}
              image={item.image}
              logo={item.logo}
            />
          </div>
        ))}
      </div>

      <div className='mt-4 flex justify-center'>
        <BlackButton text="See More" icon="" />
      </div>
    </div>
  )
}

export default SelectedProjects
