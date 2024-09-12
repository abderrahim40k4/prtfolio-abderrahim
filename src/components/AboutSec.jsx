import React from 'react'
import { delay, motion } from "framer-motion"

import { ABOUT_TEXT } from '../constants'
import pfp from "../assets/about.jpg"

const AboutSec = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className="my-20 text-4xl text-center">About
                <span className="text-neutral-500 font-medium"> Me</span>
            </h2>
            <motion.div 
            className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x:-100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.1, delay:1}}
                        src={pfp} alt="pfp" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.p initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:0.1, delay:1}}
                    className='my-2 max-w-xl py-6 font-light '>{ABOUT_TEXT}</motion.p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutSec