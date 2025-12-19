'use client'

import BlackButton from "@/app/components/BlackButton";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text sections
      gsap.from(".main-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // starts when section enters viewport
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,
      });

      // Animate image
      gsap.from(".main-image", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate button
      gsap.from(".main-button", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="border-t border-gray-200 dark:border-gray-800 py-10 px-6 lg:px-60">
      <div className="flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row justify-between items-center">
        {/* content */}
        <section>
          <div className="main-text">
            <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
              WHO I AM
            </h4>
            <p className="w-full max-w-xl my-4 text-gray-600 dark:text-[#808080]">
              My name is Nnamdi Uzoigwe. I am a software developer with a Bachelor's degree in
              Computer Science, based in Abuja, Nigeria.
            </p>
          </div>

          <div className="main-text">
            <h4 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
              WHAT I DO
            </h4>
            <p className="w-full max-w-xl my-4 text-gray-600 dark:text-[#808080]">
              I am a software developer with experience building and delivering
              software products as a freelancer. I specialize in crafting modern,
              scalable web applications using technologies such as React, Next.js,
              Tailwind CSS, and TypeScript. Through freelance projects, I have
              collaborated with clients to design and develop solutions that solve
              real-world problems, improve user experience, and deliver measurable
              value. I enjoy turning ideas into reliable, well-designed products
              that users love to interact with.
            </p>
          </div>

          <p className="main-text w-full max-w-xl mt-10 text-gray-600 dark:text-[#808080]">
            Feel free to reach out via <span className="text-black dark:text-white underline">e-mail</span>, or follow me on <span className="text-black dark:text-white underline">Twitter</span>. Want to
            see where I've worked? Check out my <span className="text-black dark:text-white underline">Resume</span>, or Connect with me on <span className="text-black dark:text-white underline">LinkedIn</span>.
          </p>
        </section>

        <div className="main-image w-80 h-85 shadow-lg rounded-xl bg-[#0d0d0d] flex items-center justify-center p-2">
          <Image src="/myimg.jpeg" width={300} className="rounded-xl" height={430} alt="my picture" />
        </div>
      </div>

      <Link href="/contact" className="main-button mt-10 flex justify-center lg:justify-end">
        <BlackButton text="Get In Touch" icon={<SendHorizonal />} />
      </Link>
    </div>
  );
};

export default MainContent;
