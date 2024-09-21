import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>My Projects</h1>
        <div className=' h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard src="/Portfolio.png"
            title="Portfolio"
            description="I built a stunning portfolio using Next.js for optimal performance, Framer Motion for engaging animations, and React Three for immersive 3D graphics. This showcase reflects my skills and passion for creating dynamic web experiences!" />
            <ProjectCard src="/Foodie.png"
            title="Foodie"
            description="Foodie is a responsive web for buying groceries, fast food, and essentials online. Built with the MERN stack, it features React.js, Tailwind CSS, Redux, secure JWT authentication, and Stripe for payments create seamless user experience." />
            <ProjectCard src="/Traveler.jpeg"
            title="Traveler"
            description="A social app for travelers to share their journeys, interact with others, and explore new destinations. This project showcases my ability to integrate user authentication, manage state effectively, and create a seamless user experience.
" />

        </div>
    </div>
  )
}

export default Project