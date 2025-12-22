import React from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

interface projectCardProps {
    title: string,
    logo: string,
    description: string,
    image: string,
    gitLink: string,
    url: string
}

const ProjectCard = ({logo, title, description, image, url, gitLink}: projectCardProps) => {
  return (
    <div className="bg-[#f6f6f6] h-auto max-h-150 overflow-hidden dark:bg-[#181818] border px-8 pt-8 pb-8 lg:pb-8 border-gray-200 rounded-[20px] dark:border-[#383737] grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-2">
        <div className="bg-white px-2 dark:bg-white/80 border border-gray-300 dark:border-[#888]  shadow-inner rounded-xl h-20 flex justify-center items-center w-fit ">
        <Image src={logo} alt="react logo" width={70} height={70} />
        </div>
        <h2 className="font-semibold text-xl my-1 lg:text-2xl text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-[#808080] text-sm">
           {description}
        </p>


        <div className="mt-20 flex gap-4 text-gray-800 dark:text-white">
            <Link 
              href={url} 
              target="_blank" 
              className="flex gap-1 border border-gray-400 p-2 rounded-lg items-center">View Live <ExternalLink size={18} />
            </Link>
            <Link 
              href={gitLink} 
              target="_blank"
              className="flex gap-1 border border-gray-400 p-2 rounded-lg items-center">View Code <FaGithub />
            </Link>
        </div>
      </div>


      <div className="hidden lg:flex">
        <Image src={image} height={300} width={400} alt="subby image"/>
      </div>
    </div>
  );
};

export default ProjectCard;
