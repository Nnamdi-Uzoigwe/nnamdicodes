
import WhiteButton from "@/app/components/WhiteButton";
import { Mail } from "lucide-react";
import { FaGithub, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function ContactSection() {
  return (
    <div className="border-t border-gray-200 dark:border-gray-800 py-10 px-6 lg:px-60">
      {/* form */}
      <form className="w-full bg-[#F6F6F6] shadow-lg rounded-xl dark:bg-[#181818] p-8">
        <header className=" flex items-center border-b pb-4 border-gray-200 dark:border-gray-700">
          <div className="flex gap-2">
            <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-[#F63636]" />
            <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-[#F6C136]" />
            <div className="w-2 lg:w-3 h-2 lg:h-3 rounded-full bg-[#68F636]" />
          </div> 

          <h3 className="absolute left-1/2 -translate-x-1/2 text-gray-800 pointer-events-none dark:text-white font-semibold">
            New Message 
          </h3> 
        </header>

        {/* Email */}
        <div className="my-4 flex items-center gap-2">
            {/* <p className="font-semibold text-gray-800 dark:text-white">Email:</p> */}
            <input 
              type="text" 
              placeholder="Enter your email address" 
              className="w-full bg-transparent border-b border-gray-600 dark:border-gray-400 py-2 px-1 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-800 dark:focus:border-white transition-colors" 
            />
        </div>
        {/* Name */}
        <div className="my-4 flex items-center gap-2">
            {/* <p className="font-semibold text-gray-800 dark:text-white">Name:</p> */}
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full bg-transparent border-b border-gray-600 dark:border-gray-400 py-2 px-1 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-800 dark:focus:border-white transition-colors" 
            />
        </div>
        {/* Name */}
        <div className="my-4 flex items-center gap-2">
            {/* <p className="font-semibold text-gray-800 dark:text-white">Subject:</p> */}
            <input 
              type="text" 
              placeholder="Enter Subject" 
              className="w-full bg-transparent border-b border-gray-600 dark:border-gray-400 py-2 px-1 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-800 dark:focus:border-white transition-colors" 
            />
        </div>
        <div className="my-4">
            <textarea className="min-h-50 h-auto rounded-lg p-4 text-gray-800 dark:text-white bg-[#f3f3f3] dark:bg-[#0d0d0d] placeholder-gray-500 dark:placeholder-gray-400 w-full" placeholder="Write your message here"></textarea>
        </div>

        <div className="flex justify-start lg:justify-end">
            <button className="w-full lg:w-fit py-2 px-8 text-white bg-black dark:bg-[#333030] cursor-pointer  rounded-lg">Send</button>
        </div>
      </form>
        
        <div className="mt-10 flex justify-center items-center text-gray-600 dark:text-gray-200 gap-8">
            <IoMail size={21} />
            <IoLogoLinkedin size={19} />
            <FaXTwitter size={19} />
            <FaGithub size={19} />
            <FaSquareInstagram size={19} />
        </div>
    </div>
  );
}



