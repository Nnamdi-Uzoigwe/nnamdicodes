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
      title: "Norwyn Solution Website",
      logo: "/norwyn-logo.png",
      description: "Designed and developed a professional website for Norwyn Solution, a London-based investment fraud recovery firm. The site presents complex forensic and legal services in a clear, trust-building layout with strong calls-to-action.",
      image: "/norwyn-img.png",
      gitLink: "https://github.com/Nnamdi-Uzoigwe/norwyn",
      url: "https://www.norwynsolution.com/"
    },
    {
      id: 2,
      title: "DeCave Management Website",
      logo: "/decave-logo.svg",
      description: "deCave is a premium event management platform centered around Afro-centric culture, nightlife, and community — designing immersive experiences that go beyond just events. Built with Next.js, it showcases upcoming events, a gallery of past editions, and partnership opportunities for brands looking to connect with a culture-driven audience.",
      image: "/decavemgt-image.png",
      gitLink: "https://github.com/novtryx/decave",
      url: "https://decavemgt.com"
    },
    {
      id: 3,
      title: "Novtryx Official Website",
      logo: "/novtryxLogo.png",
      description: "Novtryx is a software development company website designed to showcase modern web and mobile solutions. The site focuses on clean UI, clear service presentation, and smooth user experience, reflecting the company’s commitment to building reliable, scalable digital products.",
      image: "/novtryxImg.png",
      gitLink: "https://github.com/novtryx/novtryx-website",
      url: "https://www.novtryx.com"
    },
    {
      id: 4,
      title: "Taski Mobile App",
      logo: "/taski-logo.png",
      description: "Taski is a mobile app designed to help users manage their tasks and productivity efficiently. Built with React Native and Expo, it offers a seamless experience across platforms with a focus on simplicity and effectiveness.",
      image: "/taski-img.png",
      gitLink: "https://github.com/Nnamdi-Uzoigwe/taski",
      url: "https://expo.dev/preview/update?message=first+release&updateRuntimeVersion=1.0.0&createdAt=2026-04-24T17%3A01%3A36.879Z&slug=exp&projectId=474413b1-44bc-4325-b21d-508eeef2e04b&group=a1b989ef-5584-4387-852b-a502a6f28b7a"
    }
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
