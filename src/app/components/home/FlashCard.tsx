import React from "react";
import Image from "next/image";
import Link from "next/link";

interface flashCardProps {
  title: string;
  description: string;
  image: string;
}

const FlashCard = ({ title, description, image }: flashCardProps) => {
  return (
    <Link
      href=""
      className="bg-[#f6f6f6] transition-transform duration-200 ease-in-out hover:scale-105 dark:bg-[#181818] flex flex-col justify-between items-center border pt-8 rounded-[20px] border-gray-200 dark:border-[#383737] overflow-hidden"
    >
      {/* Text section */}
      <div className="px-8 pb-6 text-center">
        <h4 className="text-black dark:text-white font-bold text-xl">
          {title}
        </h4>
        <p className="text-[#808080]">{description}</p>
      </div>

      {/* Image section */}
      <div className="relative w-full h-100">
        <Image src={image} alt="image" fill className="object-cover" />
      </div>
    </Link>
  );
};
export default FlashCard;
