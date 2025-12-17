'use client'

import WhiteButton from '@/app/components/WhiteButton'
import { SendHorizonal } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LetsWork = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.lets-work-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="px-6 lg:px-60 pb-20 flex flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-between"
    >
      {/* Text */}
      <div className="lets-work-item">
        <h1 className="text-[25px] mb-2 lg:text-[37px] font-semibold text-gray-700 dark:text-white">
          Let's work together
        </h1>
        <p className="text-[#808080] w-full lg:w-[65%]">
          Want to discuss an opportunity to create something great? I'm ready when you are.
        </p>
      </div>

      {/* Button */}
      <div className="lets-work-item w-full lg:w-fit">
        <WhiteButton text="Get in touch" icon={<SendHorizonal />} />
      </div>
    </div>
  )
}

export default LetsWork
