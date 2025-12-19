// export default function ContactHeader() {
//   return (
//     <div className="flex flex-col justify-center items-start lg:items-center px-6 lg:px-60 pt-40 pb-30 will-change-transform">
//       <h1 className="about-heading text-[30px] lg:text-[50px] font-bold text-gray-700 dark:text-white">
//         Get in touch
//       </h1>
//       <p className="about-paragraph w-full max-w-xl text-left lg:text-center text-md lg:text-lg my-4 text-gray-600 dark:text-[#808080]">
//         Let's build something awesome.
//       </p>
//     </div>
//   );
// }


'use client'

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ContactHeader() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate paragraph with slight delay
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-start lg:items-center px-6 lg:px-60 pt-40 pb-30 will-change-transform">
      <h1 
        ref={headingRef}
        className="about-heading text-[30px] lg:text-[50px] font-bold text-gray-700 dark:text-white"
      >
        Get in touch
      </h1>
      <p 
        ref={paragraphRef}
        className="about-paragraph w-full max-w-xl text-left lg:text-center text-md lg:text-lg my-4 text-gray-600 dark:text-[#808080]"
      >
        Let's build something awesome.
      </p>
    </div>
  );
}