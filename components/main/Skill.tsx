import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skill = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 md:pb-80'
    id="skills" style={{transform:"scale(0.9)"}}>
        <SkillText/>
        <div className='flex flex-row justify-around flex-wrap m-4 gap-5 items-center'>
            {Frontend_skill.map((image,index)=>(
                <SkillDataProvider key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap m-4 gap-5 items-center'>
            {Backend_skill.map((image,index)=>(
                <SkillDataProvider key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>
        {/* <div className='flex flex-row justify-around flex-wrap m-4 gap-5 items-center'>
            {Full_stack.map((image,index)=>(
                <SkillDataProvider key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div> */}
        {/* <div className='flex flex-row justify-around flex-wrap m-4 gap-5 items-center'>
            {Other_skill.map((image,index)=>(
                <SkillDataProvider key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div> */}
    </section>
  )
}

export default Skill