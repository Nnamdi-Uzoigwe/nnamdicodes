import React from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Label from "./Label";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  logo: string;
  description: string;
  image: string;
  stack: string[];
  gitLink: string;
  url: string
}

const WorkCard = ({
  logo,
  title,
  description,
  image,
  stack,
  gitLink,
  url
}: WorkCardProps) => {
  return (
    <div className="bg-[#f6f6f6] h-auto  lg:max-h-200 overflow-hidden dark:bg-[#181818] border px-8 pt-8 pb-8 lg:pb-8 border-gray-200 rounded-[20px] dark:border-[#383737] grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex flex-col w-full  gap-8">
        <div>
          <div className="bg-white dark:bg-white/80 border border-gray-300 dark:border-[#888] overflow-hidden shadow-inner rounded-xl h-17.5 flex justify-center items-center w-17.5 ">
            <Image src={logo} alt="react logo" width={70} height={70} />
          </div>
          <h2 className="font-semibold my-1 text-xl lg:text-2xl text-gray-800 dark:text-white">
            {title}
          </h2>
          <p className="text-[#808080] text-sm">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((item, index) => (
            <Label key={index} name={item} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-gray-800 dark:text-white">
          <Link
            href={url} 
            target="_blank"
            className="flex gap-1 active:scale-95 justify-center border border-gray-400 hover:bg-[#111] hover:text-white hover:border-black hover:dark:border-gray-400 hover:dark:scale-105 transition-all duration-200 p-2 rounded-lg items-center">
            View Live <ExternalLink size={18} />
          </Link>
          <Link 
            href={gitLink}
            target="_blank"
            className="flex active:scale-95 justify-center gap-1 border border-gray-400 hover:bg-[#111] hover:text-white hover:border-black hover:dark:border-gray-400 hover:dark:scale-105 transition-all duration-200 p-2 rounded-lg items-center">
            View Code <FaGithub />
          </Link>
        </div>
      </div>

      <div className="w-full ">
        <Image src={image} height={300} width={400} alt="subby image" />
      </div>
    </div>
  );
};

export default WorkCard;
