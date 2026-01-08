import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    // Added 'w-full overflow-hidden' to ensure no child element breaks the layout
    <div className='w-full overflow-hidden bg-white'> 
       <ToastContainer/>
       <Header/>
       <About/>
       <Projects/>
       <Testimonials/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App