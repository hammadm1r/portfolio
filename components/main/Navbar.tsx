'use client';
import Image from "next/image";
import React from "react";
import { motion} from "framer-motion";
import { Socials } from "@/constants";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex  flex-row item-center justify-center m-auto px-[-10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center mr-10"
        >
          <motion.div
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 190, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 90,
            }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            className=" h-full w-full flex items-center justify-center"
          >
            <Image src="/Herolog.png" alt="logo" width={40} height={40} />
          </motion.div>
        </a>
        {/* <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 ">
            <div className="flex items-center justify-between border border-[#7042f861] w-full h-auto mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href = "#about-me" className="cursor-pointer">About Me</a>
            <a href = "#skill" className="cursor-pointer">Skill</a>
            <a href = "#Projects" className="cursor-pointer">Projects</a>
            </div>
        </div>*/}
        
      </div>
    </div>
  );
}

export default Navbar;
