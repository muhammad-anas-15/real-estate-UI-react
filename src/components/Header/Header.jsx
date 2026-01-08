import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div 
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative' 
      style={{ backgroundImage: "url('/backround_image.jpg')" }} 
      id='Header'
    >
        {/* 1. Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <Navbar/>

        {/* Content Container */}
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative z-10'
        >
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 drop-shadow-lg leading-tight'>
                Explore homes that <br /> fit your dreams
            </h2>

            {/* Buttons Section */}
            <div className='flex justify-center gap-6 mt-16'>
                {/* Projects Button: Outline Style */}
                <a 
                    href="#Projects" 
                    className='border border-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-black font-medium'
                >
                    Projects
                </a>

                {/* Contact Button: Solid Color Style */}
                <a 
                    href="#Contact" 
                    className='px-8 py-3 rounded-full bg-blue-600 text-lg text-white font-medium transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-lg'
                >
                    Contact Us
                </a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header