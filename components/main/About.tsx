"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { triggerAsyncId } from "async_hooks";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon, ArrowDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { Socials } from "@/constants";
const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      id="about-me"
    >
      <motion.div
        // initial={{ rotate: 0, scale: 0 }}
        // animate={{ rotate: 190, scale: 1 }}
        // transition={{
        //   type: "spring",
        //   stiffness: 260,
        //   damping: 90,
        // }}
        // whileHover={{ scale: 1.1, rotate: 360 }}
        className=" h-full w-full flex items-center justify-center"
      >
        <Image
          src="/Profile_Image.png"
          alt="work Icons"
          width={450}
          height={450}
        />
      </motion.div>
      <div className="flex flex-col h-full w-full justify-center m-auto text-start">
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
          <h1 className="Welcome-text text-[13px]">About Me</h1>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Hammad
            </span>{" "}
            Farooq Meer
          </span>
        </motion.div>
        <motion.p
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(0.8)}
          className=" my-5 text-lg text-gray-400 max-w-[600px]"
        >
          As a passionate and dedicated web developer, I specialize in creating
          dynamic and responsive web applications using the MERN stack (MongoDB,
          Express.js, React.js, Node.js). My journey in web development began as
          a self-learner, driven by a curiosity to understand how the internet
          works and a desire to build impactful digital solutions.
        </motion.p>
        <div className="flex flex-row gap-5  mr-[15px] px-[20px] py-[10px]">
          {Socials.map((social) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate="visible"
              variants={slideInFromRight(1)}
              whileHover={{ scale: 1.5, rotate: 360 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
            >
              <Image
                className="cursor-pointer"
                src={social.src}
                alt={social.name}
                key={social.name}
                onClick={() => window.open(social.link, "_blank")}
                width={24}
                height={24}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
