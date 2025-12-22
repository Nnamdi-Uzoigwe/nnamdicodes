// import ProjectCard from "@/app/components/home/ProjectCard"
// import WorkCard from "@/app/components/works/WorkCard"

// const WorksContent = () => {
//     const projectsData = [
//     {
//       id: 1,
//       title: "StudySpark Web App - The AI Study Assistant",
//       logo: "/studySparkLogo.png",
//       description: "StudySpark app is an AI-powered web application designed to help students study smarter by combining real-time chat support with personalized course recommendations. The platform integrates advanced natural language processing through the Groq API, enabling students to ask questions, receive instant explanations, and get tailored academic guidance while they learn.",
//       image: "/StudySpark.png",
//       stack: ["Next.js", "TailwindCSS", "NextAuth", "GroqAPI", "MongoDB"]
//     },
//     {
//       id: 2,
//       title: "Fluorish Fuel Station Application",
//       logo: "/station-logo.png",
//       description: "Still in progress. A role-based web application built to streamline filling station operations. It provides dashboards for managers, cashiers, accountants, supervisors, and attendants to record fuel sales, manage pumps, track lubricant purchases, and monitor stock. The system aims to reduce manual processes and improve operational visibility, and is currently under active development.",
//       image: "/FillingStationImg.png",
//       stack: ["Next.js", "Express.js", "TailwindCSS", "Cloudinary"]
//     },
//     {
//       id: 3,
//       title: "Celestia Website",
//       logo: "/celestiaLogo.png",
//       description: "Celestia is a mini period tracker web application designed to help users monitor their menstrual cycles with ease and accuracy. The platform predicts the next period date, ovulation day, and fertile window, giving users valuable insights into their reproductive health. Built with React and TailwindCSS for a clean and responsive interface, Celestia ensures that users can quickly log and view their cycle information across devices.",
//       image: "/celestiaImg.png",
//       stack: ["React.js", "Node.js", "MongoDB", "TailwindCSS"]
//     },
//     {
//       id: 4,
//       title: "Stain Website Landing Page",
//       logo: "/stain-logo.svg",
//       description: "Stain is a modern SaaS website design that I implemented using Vue 3 with the Composition API and Tailwind CSS. The project showcases my ability to translate a professional Figma concept into a fully responsive, production-ready front-end.",
//       image: "/StainLandingImg.png",
//       stack: ["Vue.js", "TailwindCSS", "Composition API"]
//     },
//     {
//       id: 5,
//       title: "Scam Information System",
//       logo: "/scamlogo.png",
//       description: "NG Scam Information Database is a web platform built to raise awareness and protect the public from fraudulent activities in Nigeria. The system allows users to report and search scam cases, creating a growing, community-driven database of scam-related information. With React powering the frontend, the platform provides a smooth and responsive user experience, while TailwindCSS ensures a clean, modern, and accessible interface. On the backend, Express manages the server-side logic, while MongoDB and Supabase are leveraged for scalable data storage and real-time access to reported cases, ensuring that information is both reliable and quickly retrievable.",
//       image: "/ScamImg.png",
//       stack: ["React.js", "Express.js", "Supabase", "MongoDB", "TailwindCSS"]
//     },
//   ]

//   return (
//     <div className="border-t border-gray-200 dark:border-gray-800 py-10 px-6 lg:px-60">
//         <div className="flex flex-col gap-4">
//         {projectsData.map((item) => (
//           <div key={item.id} className="project-card-wrapper">
//             <WorkCard
//               title={item.title}
//               description={item.description}
//               image={item.image}
//               logo={item.logo}
//               stack={item.stack}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default WorksContent



'use client'

import React, { useEffect, useRef } from "react";
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
      title: "StudySpark Web App - The AI Study Assistant",
      logo: "/studySparkLogo.png",
      description: "StudySpark app is an AI-powered web application designed to help students study smarter by combining real-time chat support with personalized course recommendations. The platform integrates advanced natural language processing through the Groq API, enabling students to ask questions, receive instant explanations, and get tailored academic guidance while they learn.",
      image: "/StudySpark.png",
      stack: ["Next.js", "TailwindCSS", "NextAuth", "GroqAPI", "MongoDB"],
      gitLink: "https://github.com/Nnamdi-Uzoigwe/StudySpark-App",
      url: "https://study-spark-app.vercel.app/"
    },
    {
      id: 2,
      title: "Fluorish Fuel Station Application",
      logo: "/station-logo.png",
      description: "Still in progress. A role-based web application built to streamline filling station operations. It provides dashboards for managers, cashiers, accountants, supervisors, and attendants to record fuel sales, manage pumps, track lubricant purchases, and monitor stock. The system aims to reduce manual processes and improve operational visibility, and is currently under active development.",
      image: "/FillingStationImg.png",
      stack: ["Next.js", "Express.js", "TailwindCSS", "Cloudinary"],
      gitLink: "https://github.com/tgtech123/Filling-Station-system",
      url: "https://filling-station-system.vercel.app/"
    },
    {
      id: 3,
      title: "Celestia Website",
      logo: "/celestiaLogo.png",
      description: "Celestia is a mini period tracker web application designed to help users monitor their menstrual cycles with ease and accuracy. The platform predicts the next period date, ovulation day, and fertile window, giving users valuable insights into their reproductive health. Built with React and TailwindCSS for a clean and responsive interface, Celestia ensures that users can quickly log and view their cycle information across devices.",
      image: "/celestiaImg.png",
      stack: ["React.js", "Node.js", "MongoDB", "TailwindCSS"],
      gitLink: "https://github.com/Nnamdi-Uzoigwe/Period-Tracker-Web-App",
      url: "https://celestia-web-app.vercel.app/"
    },
    {
      id: 4,
      title: "Stain Website Landing Page",
      logo: "/stain-logo.svg",
      description: "Stain is a modern SaaS website design that I implemented using Vue 3 with the Composition API and Tailwind CSS. The project showcases my ability to translate a professional Figma concept into a fully responsive, production-ready front-end.",
      image: "/StainLandingImg.png",
      stack: ["Vue.js", "TailwindCSS", "Composition API"],
      gitLink: "https://github.com/Nnamdi-Uzoigwe/Stain-website",
      url: "https://stain-website.vercel.app/"
    },
    {
      id: 5,
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