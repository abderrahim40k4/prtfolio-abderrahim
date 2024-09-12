import React from 'react'
import { BsBootstrap } from 'react-icons/bs'
import { DiLaravel, DiMongodb, DiSass } from 'react-icons/di'
import { RiNodejsLine, RiReactjsLine, RiTailwindCssLine, RiVuejsLine } from 'react-icons/ri'
import { TbBrandMysql, TbBrandNextjs } from 'react-icons/tb'
import { animate, delay, motion } from "framer-motion"


const iconVaraints = (duration) =>({
    intial:{y: -10},

    animate:{
        y:[10, -10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const TechnologieSec = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className="my-20 text-4xl text-center">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVaraints(2.5)}
            inherit="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVaraints(3)}
            inherit="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsLine className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div 
            variants={iconVaraints(3.5)}
            inherit="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiLaravel  className='text-7xl text-red-400' />
            </motion.div>
            <motion.div 
            variants={iconVaraints(4)}
            inherit="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl text-white'/>
            </motion.div>
            <motion.div 
            variants={iconVaraints(4.5)}
            inherit="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiVuejsLine className='text-7xl text-teal-400'/>
            </motion.div>
            <motion.div 
            variants={iconVaraints(5)}
            inherit="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className='text-7xl text-sky-400'/>
            </motion.div>
            <motion.div 
            variants={iconVaraints(5.5)}
            inherit="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiSass className='text-7xl text-fuchsia-400'/>
            </motion.div>
            <motion.div 
            variants={iconVaraints(6)}
            inherit="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsBootstrap className='text-7xl text-violet-400'/>
            </motion.div>
            <motion.div 
            variants={iconVaraints(6.5)}
            inherit="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMongodb className='text-7xl text-emerald-600'/>
            </motion.div>
            <motion.div 
            variants={iconVaraints(10)}
            inherit="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandMysql className='text-7xl text-blue-500'/>
            </motion.div>
        </div>

    </div>
  )
}

export default TechnologieSec