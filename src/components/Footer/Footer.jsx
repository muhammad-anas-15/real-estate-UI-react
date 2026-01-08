import React from 'react'
import logo_dark from "../../assets/logo_dark.svg"
const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='flex text-center'>
            {/* Three columns for that use div */}
             {/* col-1 */}
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>

            {/* col-2 */}
            <div className='w-full md:w1/5 mb-0 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='text-gray-400 flex flex-col gap-3'>
                  <a href="#Header" className='cursor-pointer hover:text-white'>Home</a>
                  <a href="#About" className='cursor-pointer hover:text-white'>About</a>
                  <a href="#Contact" className='cursor-pointer hover:text-white'>Contact Us</a>
                  <a href="#Header" className='cursor-pointer hover:text-white'>Privacy Policy</a>
                </ul>
            </div>

            {/* col-3 */}
            <div>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'> The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className=' flex gap-2 mt-5'>
                        <input type="text" name='Name' placeholder="Your Name" className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"/>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded '>Subscribe</button>
                 </div>
            </div>
        </div>
        <div className='text-gray-500 text-center border-t border-gray-700 py-4 mt-10 '>
            Copyright 2025 © Muhammad Anas. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer