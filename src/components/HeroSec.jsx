import React from 'react'
import { HERO_CONTENT } from '../constants'
import pfp from "../assets/kevinRushProfile.jpg"
const HeroSec = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className="mb-16 text-6xl font-thin tracking-tight lg:mb-16 lg:text-8xl">Abderrhim</h1>
                    <span className='bg-gradient-to-tr from-cyan-500 via-slate-500 to-blue-900 bg-clip-text text-4xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </span>
                    <p className='my-2 max-w-xl py-6 font-light '>{HERO_CONTENT}</p>
                </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={pfp} alt="pfp"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSec