'use client'

import StackCard from "@/app/components/stack/StackCard";
import React from "react";

const StackContent = () => {
  const stackData = [
    { id: 1, name: "Next.js", brief: "Web Framework", alt: "Next.js logo", image: "/Nextjs.png" },
    { id: 2, name: "Typescript", brief: "Language", alt: "Typescript logo", image: "/typescript.png" },
    { id: 3, name: "TailwindCSS", brief: "CSS framework", alt: "TailwindCSS logo", image: "/tailwindcss.png" },
    { id: 4, name: "Vue.js", brief: "Web framework", alt: "Vue.js logo", image: "/vue.png" },
    { id: 5, name: "CSS", brief: "Styling", alt: "CSS logo", image: "/css.png" },
    { id: 6, name: "Vercel", brief: "Deployment", alt: "Vercel logo", image: "/vercel.png" },
    { id: 7, name: "Supabase", brief: "Backend Service", alt: "Supabase logo", image: "/supabase.png" },
    { id: 8, name: "Figma", brief: "Design", alt: "Figma logo", image: "/figma.png" },
    { id: 9, name: "VsCode", brief: "IDE", alt: "VsCode logo", image: "/vscode.png" },
    { id: 10, name: "Github", brief: "Version Control", alt: "Github logo", image: "/github.png" },
    { id: 11, name: "MongoDb", brief: "Cloud Database", alt: "MongoDb logo", image: "/mongodb.png" },
    { id: 12, name: "Expo", brief: "App Toolkit", alt: "Expo logo", image: "/Expo.png" },
    { id: 13, name: "Express.js", brief: "Server Framework", alt: "Express.js logo", image: "/express.png" },
    { id: 14, name: "Zustand", brief: "State Management", alt: "Zustand logo", image: "/zustand.png" },
    { id: 15, name: "Motion", brief: "Animation", alt: "Motion logo", image: "/Framer.png" },
    { id: 16, name: "React Native", brief: "App Framework", alt: "React Native logo", image: "/React.png" },
  ];

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 py-10 px-6 lg:px-60">
      <h4 className="text-[#808080] text-2xl font-bold mb-8">Dev & Design</h4>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {stackData.map((item) => (
          <StackCard
            key={item.id}
            name={item.name}
            brief={item.brief}
            alt={item.alt}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default StackContent;


