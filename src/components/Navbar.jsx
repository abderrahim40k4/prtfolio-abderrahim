import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-10 px-20">
        <div className='flex flex-shrink-0 items-center '>
            <p className='text-2xl font-bold text-white'>ABDO</p>
            </div>
        <div className="flex flex-row  justify-center items-center gap-8 text-2xl text-white">
            <FaLinkedin/>
            <FaInstagram/>
            <FaGithub/>
        </div>
    </nav>
  )
}

export default Navbar