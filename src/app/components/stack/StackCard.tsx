'use client'

import Image from 'next/image'
import React from 'react'

interface StackCardProps {
  image: string
  name: string
  brief: string
  alt: string
}

const StackCard = ({ image, name, brief, alt }: StackCardProps) => {
  return (
    <div className="bg-[#f6f6f6] dark:bg-[#181818] border px-8 pb-4 border-gray-200 rounded-[20px] flex flex-col justify-end gap-10 h-auto min-h-75 dark:border-[#383737]">
      <div className='mx-auto'>
        <Image 
          src={image}
          height={110}
          width={110}
          alt={alt}
          className='rounded-xl'
        />
      </div>

      <div className="flex justify-between items-center">
        <h5 className='text-black font-semibold text-lg dark:text-white'>{name}</h5>

        <span className='bg-white/90 dark:bg-white/10 backdrop-blur-sm rounded-full text-[#808080] dark:text-gray-300 text-xs border border-white dark:border-gray-500 p-2'>
          {brief}
        </span>
      </div>
    </div>
  )
}

export default StackCard


