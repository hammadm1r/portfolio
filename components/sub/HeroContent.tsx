"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon,ArrowDownIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { Socials } from "@/constants";
function HeroContent() {
  return (
    <motion.div initial='hidden' animate="visible" className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
        <div className='flex flex-col h-full w-full justify-center m-auto text-start'>
            <motion.div variants={slideInFromTop} className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 ' />
                <h1 className='Welcome-text text-[13px]'>Full Stack Developer</h1>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto' >
                <span><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Hammad</span> Farooq Ahmed Meer</span>
            </motion.div>
            <motion.p variants={slideInFromLeft(0.8)} className=' my-5 text-lg text-gray-400 max-w-[600px]' >
            I am a passionate MERN stack developer focused on creating dynamic, scalable, and user-centric web applications.
            </motion.p>
            <div className="flex flex-row gap-5  mr-[15px] px-[20px] py-[10px]">
            {
                Socials.map((social)=>(
                  <motion.div
                  whileHover={{ scale: 1.5, rotate: 360 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%",
                  }}
                ><Image 
                    className="cursor-pointer"
                    src={social.src}
                    alt={social.name}
                    key={social.name}
                    onClick={() => window.open(social.link, '_blank')}
                    width={24}
                    height={24}
                    /></motion.div>
                ))
            }
        </div> 
            <motion.a variants={slideInFromLeft(1)} className=' py-2 button-primary text-center text-white text-lg cursor-pointer max-w-[200px]' >
            Resume 
            </motion.a>
        </div>
        <motion.div   initial={{rotate:0 , scale: 0 }}
  animate={{ rotate: 190, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 90
  }}   whileHover={{ scale: 1.1, rotate: 360 }}
  className=' h-full w-full flex items-center justify-center' >
            <Image src="/Herolog.png" alt ="work Icons" width={250} height={250} />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent