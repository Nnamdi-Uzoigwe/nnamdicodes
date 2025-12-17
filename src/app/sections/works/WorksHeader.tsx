import React from "react";

const WorksHeader = () => {
  return (
    <div className="flex flex-col justify-center items-start lg:items-center px-6 lg:px-60 pt-40 pb-30">
      <h1 className="stack-heading text-[30px] lg:text-[50px] font-bold text-gray-700 dark:text-white">
        My Work
      </h1>
      <p className="stack-paragraph w-full max-w-xl text-left lg:text-center text-md lg:text-lg my-4 text-gray-600 dark:text-[#808080]">
        Projects I've worked on recently
      </p>
    </div>
  );
};

export default WorksHeader;
