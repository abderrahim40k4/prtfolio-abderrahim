import React from 'react'
import { ABOUT_TEXT } from '../constants'
import pfp from "../assets/about.jpg"

const AboutSec = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className="my-20 text-4xl text-center">About
                <span className="text-neutral-500 font-medium"> Me</span>
            </h2>
            <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={pfp} alt="pfp" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className='flex flex-col items-center lg:items-start'>
                        <p className='my-2 max-w-xl py-6 font-light '>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSec