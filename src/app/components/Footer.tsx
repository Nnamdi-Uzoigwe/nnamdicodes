"use client";

import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="px-6 lg:px-60 py-10 pb-30 lg:pb-20 relative overflow-hidden border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-0">
        {/* left */}
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-between">
          <div>
            {/* logo */}
            <div
              className={`font-bold text-xl mb-2 transition-colors duration-300 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="text-red-600">{"<"}</span>
            <span className="text-green-600 mr-1">{">"}</span>
              Nnamdi
            </div>

            <p className="text-[#808080]">Thanks for stopping by ッ</p>
          </div>

          <p className="text-[#808080]">
            &copy; 2025 Nnamdi Uzoigwe. All Rights Reserved
          </p>
        </div>

        {/* right */}
        {/* <div> */}
        {/* links */}
        <div className="flex flex-col items-start lg:items-end">
          <h4 className="font-semibold text-black text-lg mb-6 dark:text-white">
            Links
          </h4>

          <div className="flex flex-col text-gray-500 dark:text-gray-200 gap-2 items-start lg:items-end">
            <Link href="">About</Link>
            <Link href="">Work</Link>
            <Link href="">Tech Stack</Link>
            <Link href="">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col items-start lg:items-end">
          <h4 className="font-semibold text-black text-lg mb-6 dark:text-white">
            Others
          </h4>

          <div className="flex flex-col text-gray-500 dark:text-gray-200 gap-2 items-start lg:items-end">
            <Link href="">Email</Link>
            <Link href="">Twitter</Link>
            <Link href="">Github</Link>
            <Link href="">Linkedin</Link>
          </div>
        </div>

        {/* </div> */}
      </div>

      {/* Bottom gradient blob */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-200 h-100">
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-yellow-300/40 dark:bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-50 w-75 h-75 bg-red-400/40 dark:bg-red-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-100 w-75 h-75 bg-purple-400/40 dark:bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-150 w-75 h-75 bg-blue-300/40 dark:bg-blue-400/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
