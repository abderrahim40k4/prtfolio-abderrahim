import React from 'react'
import { delay, motion } from "framer-motion"


import { HERO_CONTENT } from '../constants'
import pfp from "../assets/kevinRushProfile.jpg"
import { duration } from '@mui/material'


const HeroSec = () => {
const container =(delay) => (
    {
        hidden:{
            x: -10,
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
                duration:0.5,
                delay:delay,
            }
        }
    }
)

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0)}
                    initial='hidden'
                    animate="visible"
                    className="mb-16 text-6xl font-thin tracking-tight lg:mb-16 lg:text-8xl">Abderrhim</motion.h1>
                    <motion.span 
                    variants={container(0)}
                    initial='hidden'
                    animate="visible"
                    className='bg-gradient-to-tr from-cyan-500 via-slate-500 to-blue-900 bg-clip-text text-4xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </motion.span>
                    <motion.p 
                   variants={container(0)}
                   initial='hidden'
                   animate="visible"
                    className='my-2 max-w-xl py-6 font-light '>{HERO_CONTENT}</motion.p>
                </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                   variants={container(0.5)}
                   initial='hidden'
                   animate="visible"
                    src={pfp} alt="pfp"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSec