
'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkCard from "@/app/components/works/WorkCard";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WorksContent = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const projectsData = [
    {
      id: 1,
      title: "Norwyn Solution Website",
      logo: "/norwyn-logo.png",
      description: "Designed and developed a professional website for Norwyn Solution, a London-based investment fraud recovery firm. The site presents complex forensic and legal services in a clear, trust-building layout with strong calls-to-action.",
      image: "/norwyn-img.png",
      stack: ["Next.js", "Tailwind", "Resend"],
      gitLink: "https://github.com/Nnamdi-Uzoigwe/norwyn",
      url: "https://www.norwynsolution.com/"
    },
    {
      id: 2,
      title: "DeCave Management Website",
      logo: "/decave-logo.svg",
      description: "deCave is a premium event management platform centered around Afro-centric culture, nightlife, and community — designing immersive experiences that go beyond just events. Built with Next.js, it showcases upcoming events, a gallery of past editions, and partnership opportunities for brands looking to connect with a culture-driven audience.",
      image: "/decavemgt-image.png",
      stack: ["Next.js", "Tailwind", "Zustand", "Express.js", "MongoDB", "Paystack"],
      gitLink: "https://github.com/novtryx/decave",
      url: "https://decavemgt.com"
    },
    {
      id: 3,
      title: "Novtryx Official Website",
      logo: "/novtryxLogo.png",
      description: "Novtryx is a software development company website designed to showcase modern web and mobile solutions. The site focuses on clean UI, clear service presentation, and smooth user experience, reflecting the company’s commitment to building reliable, scalable digital products.",
      image: "/novtryxImg.png",
      stack: ["Next.js", "TailwindCSS"],
      gitLink: "https://github.com/novtryx/novtryx-website",
      url: "https://www.novtryx.com"
    },
    {
      id: 4,
      title: "Taski Mobile App",
      logo: "/taski-logo.png",
      description: "Taski is a mobile app designed to help users manage their tasks and productivity efficiently. Built with React Native and Expo, it offers a seamless experience across platforms with a focus on simplicity and effectiveness.",
      image: "/taski-img.png",
      stack: ["React Native", "Expo", "Nativewind"],
      gitLink: "https://github.com/Nnamdi-Uzoigwe/taski",
      url: "https://expo.dev/preview/update?message=first+release&updateRuntimeVersion=1.0.0&createdAt=2026-04-24T17%3A01%3A36.879Z&slug=exp&projectId=474413b1-44bc-4325-b21d-508eeef2e04b&group=a1b989ef-5584-4387-852b-a502a6f28b7a"
    },
    {
      id: 5,
      title: "Fluorish Fuel Station Application",
      logo: "/station-logo.png",
      description: "Still in progress. A role-based web application built to streamline filling station operations. It provides dashboards for managers, cashiers, accountants, supervisors, and attendants to record fuel sales, manage pumps, track lubricant purchases, and monitor stock. The system aims to reduce manual processes and improve operational visibility, and is currently under active development.",
      image: "/FillingStationImg.png",
      stack: ["Next.js", "Express.js", "TailwindCSS", "Cloudinary"],
      gitLink: "https://github.com/tgtech123/Filling-Station-system",
      url: "https://filling-station-system.vercel.app/"
    },
    {
      id: 6,
      title: "Celestia Website",
      logo: "/celestiaLogo.png",
      description: "Celestia is a mini period tracker web application designed to help users monitor their menstrual cycles with ease and accuracy. The platform predicts the next period date, ovulation day, and fertile window, giving users valuable insights into their reproductive health. Built with React and TailwindCSS for a clean and responsive interface, Celestia ensures that users can quickly log and view their cycle information across devices.",
      image: "/celestiaImg.png",
      stack: ["React.js", "Node.js", "MongoDB", "TailwindCSS"],
      gitLink: "https://github.com/Nnamdi-Uzoigwe/Period-Tracker-Web-App",
      url: "https://celestia-web-app.vercel.app/"
    },
    {
      id: 7,
      title: "Stain Website Landing Page",
      logo: "/stain-logo.svg",
      description: "Stain is a modern SaaS website design that I implemented using Vue 3 with the Composition API and Tailwind CSS. The project showcases my ability to translate a professional Figma concept into a fully responsive, production-ready front-end.",
      image: "/StainLandingImg.png",
      stack: ["Vue.js", "TailwindCSS", "Composition API"],
      gitLink: "https://github.com/Nnamdi-Uzoigwe/Stain-website",
      url: "https://stain-website.vercel.app/"
    },
     {
      id: 8,
      title: "Lilies Web Application",
      logo: "/lilies-logo.svg",
      description: "Lilies is a full-stack food ordering web app built with Next.js, featuring authentication via NextAuth, a dynamic menu with cart and checkout powered by Paystack, and order tracking — all styled with Tailwind CSS. Data is persisted in MongoDB through Next.js API routes, with a clean dashboard experience for managing profiles, orders, and deliveries.",
      image: "/lilie-web-image.png",
      stack: ["Next.js", "Next-Auth", "MongoDB", "Paystack API", "TailwindCSS"],
      gitLink: "https://github.com/Nnamdi-Uzoigwe/Lilies-web",
      url: "https://lilies-web.vercel.app/"
    },
    {
      id: 9,
      title: "Scam Information System",
      logo: "/scamlogo.png",
      description: "NG Scam Information Database is a web platform built to raise awareness and protect the public from fraudulent activities in Nigeria. The system allows users to report and search scam cases, creating a growing, community-driven database of scam-related information. With React powering the frontend, the platform provides a smooth and responsive user experience, while TailwindCSS ensures a clean, modern, and accessible interface. On the backend, Express manages the server-side logic, while MongoDB and Supabase are leveraged for scalable data storage and real-time access to reported cases, ensuring that information is both reliable and quickly retrievable.",
      image: "/ScamImg.png",
      stack: ["React.js", "Express.js", "Supabase", "MongoDB", "TailwindCSS"],
      gitLink: "https://github.com/Nnamdi-Uzoigwe/Scam-Information-System",
      url: "https://scam-information-system.vercel.app/"
    },
  ];

  useEffect(() => {
    // Animate each project card individually as it comes into view from below
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 py-10 px-6 lg:px-60">
      <div className="flex flex-col gap-4">
        {projectsData.map((item, index) => (
          <div 
            key={item.id} 
            className="project-card-wrapper"
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
          >
            <WorkCard
              title={item.title}
              description={item.description}
              image={item.image}
              logo={item.logo}
              stack={item.stack}
              gitLink={item.gitLink}
              url={item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksContent;