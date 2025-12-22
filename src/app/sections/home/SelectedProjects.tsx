'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ProjectCard from "@/app/components/home/ProjectCard"
import WhiteButton from '@/app/components/WhiteButton'
import BlackButton from '@/app/components/BlackButton'
import Link from 'next/link'

const SelectedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const projectsData = [
    {
      id: 1,
      title: "StudySpark Web App - The AI Study Assistant",
      logo: "/studySparkLogo.png",
      description: "StudySpark app is an AI-powered web application designed to help students study smarter by combining real-time chat support with personalized course recommendations. The platform integrates advanced natural language processing through the Groq API, enabling students to ask questions, receive instant explanations, and get tailored academic guidance while they learn.",
      image: "/StudySpark.png",
      gitLink: "https://github.com/Nnamdi-Uzoigwe/StudySpark-App",
      url: "https://study-spark-app.vercel.app/"
    },
    {
      id: 2,
      title: "Fluorish Fuel Station Application",
      logo: "/station-logo.png",
      description: "Still in progress. A role-based web application built to streamline filling station operations. It provides dashboards for managers, cashiers, accountants, supervisors, and attendants to record fuel sales, manage pumps, track lubricant purchases, and monitor stock. The system aims to reduce manual processes and improve operational visibility, and is currently under active development.",
      image: "/FillingStationImg.png",
      gitLink: "https://github.com/tgtech123/Filling-Station-system",
      url: "https://filling-station-system.vercel.app/"
    },
    {
      id: 3,
      title: "Stain Website Landing Page",
      logo: "/stain-logo.svg",
      description: "Stain is a modern SaaS website design that I implemented using Vue 3 with the Composition API and Tailwind CSS. The project showcases my ability to translate a professional Figma concept into a fully responsive, production-ready front-end.",
      image: "/StainLandingImg.png",
      gitLink: "https://github.com/Nnamdi-Uzoigwe/Stain-website",
      url: "https://stain-website.vercel.app/"
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
              gitLink={item.gitLink}
              url={item.url}
            />
          </div>
        ))}
      </div>

      <Link href="/works" className='mt-4 flex justify-center'>
        <BlackButton text="See More" icon="" />
      </Link>
    </div>
  )
}

export default SelectedProjects
