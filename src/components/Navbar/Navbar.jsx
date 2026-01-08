import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.svg";
import menu_icon from "../../assets/menu_icon.svg";
import cross_icon from "../../assets/cross_icon.svg";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Handle Scroll Effect (Transparent -> Solid White)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center px-6 md:px-20 lg:px-32'>
        
        {/* Logo */}
        <img src={logo} alt="Estate Logo" className='w-28 md:w-32 cursor-pointer' />

        {/* Desktop Menu */}
        <ul className={`hidden md:flex gap-8 text-base font-medium transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
          <a href="#Header" className='cursor-pointer hover:text-blue-500 transition-colors'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-blue-500 transition-colors'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-blue-500 transition-colors'>Projects</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-blue-500 transition-colors'>Testimonials</a>
        </ul>

        {/* Sign Up Button */}
        <button 
          className={`hidden md:block px-8 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
            isScrolled 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-white text-gray-900 hover:bg-gray-100'
          }`}
        >
          Sign Up
        </button>

        {/* Mobile Menu Icon */}
        <img 
          onClick={() => setShowMobileMenu(true)} 
          src={menu_icon} 
          className={`md:hidden w-7 cursor-pointer ${isScrolled ? 'brightness-0' : ''}`} // Makes icon black on white bg
          alt="Menu" 
        />
      </div>

      {/* ---------- Mobile Menu Overlay ---------- */}
      <div className={`md:hidden fixed inset-0 bg-white z-50 overflow-hidden transition-transform duration-300 ease-in-out ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header inside Mobile Menu */}
        <div className='flex justify-between items-center p-6 border-b border-gray-100'>
            <img src={logo} alt="Logo" className="w-24" />
            <img 
              onClick={() => setShowMobileMenu(false)} 
              src={cross_icon} 
              className='w-6 cursor-pointer hover:rotate-90 transition-transform' 
              alt="Close" 
            />
        </div>

        {/* Links */}
        <ul className='flex flex-col items-center gap-6 mt-10 text-lg font-medium text-gray-700'>
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className='hover:text-blue-600 transition-colors'>Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='hover:text-blue-600 transition-colors'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='hover:text-blue-600 transition-colors'>Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='hover:text-blue-600 transition-colors'>Testimonials</a>
          
          <button className='bg-blue-600 text-white px-10 py-3 rounded-full mt-4 hover:bg-blue-700 transition-colors'>
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;