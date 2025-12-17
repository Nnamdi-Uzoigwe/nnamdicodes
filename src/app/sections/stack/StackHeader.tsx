'use client'

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackHeader = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading with a bounce
      gsap.from(".stack-heading", {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 80,
        duration: 0.8,
        ease: "bounce.out",
      });

      // Animate paragraph with slight delay
      gsap.from(".stack-paragraph", {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: "bounce.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={headerRef}
      className="flex flex-col justify-center items-start lg:items-center px-6 lg:px-60 pt-40 pb-30"
    >
      <h1 className="stack-heading text-[30px] lg:text-[50px] font-bold text-gray-700 dark:text-white">
        Tech Stack
      </h1>
      <p className="stack-paragraph w-full max-w-xl text-left lg:text-center text-md lg:text-lg my-4 text-gray-600 dark:text-[#808080]">
        The development tools, frameworks and apps I use.
      </p>
    </div>
  );
}

export default StackHeader;
