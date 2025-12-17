import React from 'react'

const StackHeader = () => {
  return (
    <div className="flex flex-col justify-center items-start lg:items-center px-6 lg:px-60 pt-40 pb-30">
         <h1 className="about-heading text-[30px] lg:text-[50px] font-bold text-gray-700 dark:text-white">
        Tech Stack
      </h1>
      <p className="about-paragraph w-full max-w-xl text-left lg:text-center text-md lg:text-lg my-4 text-gray-600 dark:text-[#808080] font-semibold">
        The development tools, frameworks and apps I use.
      </p>
    </div>
  )
}

export default StackHeader