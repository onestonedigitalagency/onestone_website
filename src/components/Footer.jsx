import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact' // Import your Contact component
import footerGif from '../assets/footer.gif'


function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false)


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
         <section className='w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 
                           bg-gray-50 border-t border-gray-200'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                           uppercase font-semibold leading-tight mb-6 sm:mb-8'>
              Ready to start your 
              <span className='font-cookie normal-case font-normal'> project</span>?
            </h2>
            <p className='text-gray-600 font-light text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto'>
              Let's collaborate and bring your vision to life. We're excited to hear about your ideas.
            </p>
            <button
              onClick={openContact}
              className='px-8 sm:px-10 py-4 sm:py-5 bg-black text-white 
                         uppercase font-semibold text-sm sm:text-base
                         hover:bg-gray-800 transition-colors rounded-full'
            >
              Get in Touch
            </button>
          </div>
        </section>

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
                src={footerGif}
                alt="Footer showcase"
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