import React from 'react'
import brand_img from "../../assets/brand_img.png"
import brand_image from "../../assets/house.jpg"
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' 
      id='About'
    >
        {/* Header Section */}
        <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-gray-800'>
            About <span className='underline underline-offset-4 decoration-2 decoration-blue-500 font-light'>Our Brand</span>
        </h1>
        <p className='text-gray-500 text-center max-w-lg mb-12 text-lg'>
            Passionate About Properties, Dedicated to Your Vision 

[Image of modern real estate office interior]

        </p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-16 lg:gap-24 w-full'>
            
            {/* Left Side: Image with Animation */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='w-full md:w-1/2 relative'
            >
                <img 
                    src={brand_image} 
                    alt="Brand visual" 
                    className='w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'
                />
                {/* Optional decorative background blob */}
                <div className='absolute -z-10 bottom-[-20px] left-[-20px] w-full h-full border-4 border-blue-100 rounded-xl hidden md:block'></div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className='flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-600 w-full md:w-1/2'
            >
                {/* Stats Grid */}
                <div className='grid grid-cols-2 gap-x-10 gap-y-8 w-full mb-8'>
                    {[
                        { count: '10+', label: 'Years of Excellence' },
                        { count: '12+', label: 'Projects Completed' },
                        { count: '20+', label: 'Mn. Sq. Ft. Delivered' },
                        { count: '25+', label: 'Ongoing Projects' }
                    ].map((stat, index) => (
                        <div key={index} className='flex flex-col items-center md:items-start hover:scale-105 transition-transform duration-300 cursor-default'>
                            <p className='text-4xl font-bold text-gray-800 mb-1'>{stat.count}</p>
                            <p className='text-gray-500 text-sm sm:text-base'>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Text Content */}
                <p className='my-6 leading-relaxed text-gray-600 text-center md:text-left'>
                    With over a decade of experience, we don't just build structures; we build legacies. 
                    Our commitment to quality ensures that every square foot we deliver is a testament 
                    to luxury, comfort, and innovation. From residential havens to commercial hubs, 
                    we transform blueprints into reality.
                </p>

                {/* Button with Hover Animation */}
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition-colors duration-300'
                >
                    Learn More
                </motion.button>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default About