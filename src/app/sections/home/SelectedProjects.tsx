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
      title: "Novtryx Official Website",
      logo: "/novtryxLogo.png",
      description: "Novtryx is a software development company website designed to showcase modern web and mobile solutions. The site focuses on clean UI, clear service presentation, and smooth user experience, reflecting the company’s commitment to building reliable, scalable digital products.",
      image: "/novtryxImg.png",
      gitLink: "https://github.com/novtryx/novtryx-website",
      url: "https://www.novtryx.com"
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
      title: "Lilies Web Application",
      logo: "/lilies-logo.svg",
      description: "Lilies is a full-stack food ordering web app built with Next.js, featuring authentication via NextAuth, a dynamic menu with cart and checkout powered by Paystack, and order tracking — all styled with Tailwind CSS. Data is persisted in MongoDB through Next.js API routes, with a clean dashboard experience for managing profiles, orders, and deliveries.",
      image: "/lilie-web-image.png",
      gitLink: "https://github.com/Nnamdi-Uzoigwe/Lilies-web",
      url: "https://lilies-web.vercel.app/"
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
