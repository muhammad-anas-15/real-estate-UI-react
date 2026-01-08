import React from 'react';
import { testimonialsData } from '../../assets/assets.js';
import { motion } from 'framer-motion';

const Testimonials = () => {

  // Animation Variants for Staggered Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card showing
        duration: 1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly lower
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // Starts animation when 20% visible
      variants={containerVariants}
      className="container py-16 lg:px-32 mx-auto w-full overflow-hidden"
      id="Testimonials"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Customer <span className="underline underline-offset-4 decoration-1 decoration-blue-500 font-light">Testimonials</span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto text-lg">
          Real Stories from Those Who Found Home with Us
        </p>
      </div>

      {/* Testimonial Cards Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} // Lift effect on hover
            className="max-w-[340px] bg-white border border-gray-100 shadow-xl rounded-2xl px-8 py-10 text-center relative transition-all duration-300"
          >
            
            {/* User Image - Clean, no icon */}
            <div className='relative inline-block'>
                <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-100 object-cover"
                />
            </div>

            {/* Name & Position */}
            <h2 className="text-xl font-bold text-gray-800 mt-2">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4 text-sm font-medium uppercase tracking-wide">{testimonial.position}</p>

            {/* Star Ratings */}
            <div className="flex justify-center mb-6 gap-1">
              {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                <span key={starIndex} className="text-yellow-500 text-lg drop-shadow-sm">★</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed italic">
              "{testimonial.text}"
            </p>
            
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;