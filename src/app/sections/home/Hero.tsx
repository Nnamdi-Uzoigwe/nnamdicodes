"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import BlackButton from "@/app/components/BlackButton";
import WhiteButton from "@/app/components/WhiteButton";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Select only headings, paragraph, and button container
    const heroElements = heroRef.current.querySelectorAll(
      "h1, p, div.flex.mt-3"
    );

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });
    tl.fromTo(
      heroElements,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div
      ref={heroRef}
      className="flex flex-col justify-center items-start lg:items-center px-6 lg:px-60 pt-60 pb-40 will-change-transform"
    >
      <div className="flex flex-col items-start lg:items-center">
        <h1 className="text-[30px] lg:text-[50px] font-bold text-gray-500 dark:text-gray-400">
          Hi 👋
        </h1>
        <div className="flex gap-2">
          <h1 className="text-[30px] lg:text-[50px] font-bold text-gray-500 dark:text-gray-400">
            I'm
          </h1>
          <h1 className="text-[30px] lg:text-[50px] font-bold dark:text-gray-100 text-gray-700">
            Nnamdi Uzoigwe
          </h1>
        </div>
      </div>

      <p className="w-full max-w-xl text-left lg:text-center text-md lg:text-lg my-4 text-gray-600 dark:text-[#808080]">
        From responsive websites to mobile apps, I create digital products that
        are fast, intuitive, and built to scale - delivering experiences that
        delight users and drive real impact.
      </p>

      <div className="mt-3 w-full lg:w-fit flex flex-col lg:flex-row gap-2">
        <Link
          href="/UZOIGWE-NNAMDI-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BlackButton text="See My Resumé" icon="" />
        </Link>
        <Link href="/contact">
          <WhiteButton text="Get in touch" icon="" />
        </Link>
      </div>
    </div>
  );
}
