'use client'

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHeader() {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".about-heading", {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate paragraph
      gsap.from(".about-paragraph", {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={headerRef}
      className="flex flex-col justify-center items-start lg:items-center px-6 lg:px-60 pt-40 pb-30 will-change-transform"
    >
      <h1 className="about-heading text-[30px] lg:text-[50px] font-bold text-gray-700 dark:text-white">
        A little bit about me
      </h1>
      <p className="about-paragraph w-full max-w-xl text-left lg:text-center text-md lg:text-lg my-4 text-gray-600 dark:text-[#808080]">
        Who I am and what I do.
      </p>
    </div>
  );
}
