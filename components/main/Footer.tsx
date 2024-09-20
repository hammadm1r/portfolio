import React from 'react'
import { RxDiscordLogo, RxGithubLogo ,RxInstagramLogo ,RxLinkedinLogo } from "react-icons/rx";
import {FaYoutube} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full h-full bg-[#030014] text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Community</div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <FaYoutube />
                        <span className='text-[15px] ml-[6px]'>Youtube</span>
                    </div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxGithubLogo />
                        <span className='text-[15px] ml-[6px]'>Github</span>
                    </div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <FaYoutube />
                        <span className='text-[15px] ml-[6px]'>Telegram</span>
                    </div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxDiscordLogo />
                        <span className='text-[15px] ml-[6px]'>Discord</span>
                    </div>
                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Social Media</div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                    <RxLinkedinLogo />
                    <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                    </div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxGithubLogo />
                        <span className='text-[15px] ml-[6px]'>Facebook</span>
                    </div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <FaYoutube />
                        <span className='text-[15px] ml-[6px]'>youtube</span>
                    </div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                    <RxInstagramLogo/>
                    <span className='text-[15px] ml-[6px]'>Instagram</span>
                    </div>
                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>About</div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px]'>About</span>
                    </div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px]'>Become Sponsor</span>
                    </div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px]'>Learning about me</span>
                    </div>
                    <div className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px]'>hammadmeer105@gmail.com</span>
                    </div>
                </div>


            </div>
            <div className="mb-[20px] text-[15px] text-center">
                &copy; Hammad Farooq Meer 2024 Inc. All rights reserverd
            </div>
        </div>
    </div>
  )
}

export default Footer