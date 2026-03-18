import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact' // Import your Contact component

function Footer() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const images = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop',
  ]

  // Change image every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [images.length])

  // Open contact modal
  const openContact = () => {
    setIsContactOpen(true)
  }

  // Close contact modal
  const closeContact = () => {
    setIsContactOpen(false)
  }

  return (
    <>
      <footer className='w-full px-4 '>
        {/* CTA Section */}
        <div 
          id="cta-section" 
          className='mt-12 pt-10 sm:pt-14 border-b border-t border-gray-300 pb-6 sm:pb-8'
        >
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         uppercase leading-tight
                         max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl'>
            Let's craft your project together
          </h1>
          {/* Changed from <a> to <button> to open modal */}
          <button 
            onClick={openContact}
            className='mt-6 sm:mt-8 
                       text-lg sm:text-xl md:text-2xl lg:text-3xl 
                       inline-block underline 
                       hover:opacity-70 transition-opacity
                       cursor-pointer'
          >
            Contact us
          </button>
        </div>

        {/* Footer Navigation */}
        <div
          id="footer-nav"
          className='mt-4 pt-10 sm:pt-14 pb-6 sm:pb-8
                     flex flex-col-reverse md:flex-row 
                     justify-between gap-8 md:gap-4'
        >
          {/* Col 1 - Random Image */}
          <div id="col-1" className='w-full md:w-1/3'>
            <div className='w-full sm:w-64 md:w-full lg:w-80 xl:w-96
                            h-48 sm:h-56 md:h-60 lg:h-72
                            overflow-hidden rounded-lg'>
              <img
                src={images[currentImageIndex]}
                alt="Random showcase"
                className='w-full h-full object-cover transition-opacity duration-300'
                loading="lazy"
              />
            </div>
          </div>

          {/* Col 2 - Terms/Legal */}
          <div 
            id="col-2" 
            className='w-full md:w-1/3
                       flex flex-col justify-start md:justify-end 
                       items-start md:items-end'
          >
            <ul className='text-left md:text-right
                           text-lg sm:text-xl md:text-2xl lg:text-3xl 
                           font-extralight 
                           space-y-1 sm:space-y-2
                           py-6 sm:py-8 md:py-0'>
              <li>
                <Link 
                  to="/terms" 
                  className='opacity-70 hover:opacity-100 transition-opacity cursor-pointer'
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/legal" 
                  className='opacity-70 hover:opacity-100 transition-opacity cursor-pointer'
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link 
                  to="/credits" 
                  className='opacity-70 hover:opacity-100 transition-opacity cursor-pointer'
                >
                  Credits
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 - Main Navigation */}
          <div 
            id="col-3" 
            className='w-full md:w-1/3 
                       text-left md:text-right'
          >
            <ul className='space-y-1 sm:space-y-2'>
              <li>
                <Link 
                  to="/works"
                  className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 
                             uppercase cursor-pointer 
                             opacity-80 hover:opacity-100 transition-opacity'
                >
                  Works
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 
                             uppercase cursor-pointer 
                             opacity-80 hover:opacity-100 transition-opacity'
                >
                  About
                </Link>
              </li>
              {/* Changed from Link to button to open modal */}
              <li>
                <button
                  onClick={openContact}
                  className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 
                             uppercase cursor-pointer 
                             opacity-80 hover:opacity-100 transition-opacity'
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

       
      </footer>

      {/* Contact Modal */}
      <Contact isOpen={isContactOpen} onClose={closeContact} />
    </>
  )
}

export default Footer