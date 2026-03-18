import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Contact from './Contact'
import icon from '../assets/icon.ico'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  
  // Get current route
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else if (!isContactOpen) {
      document.body.style.overflow = 'unset'
    }
    return () => {
      if (!isContactOpen) {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isMenuOpen, isContactOpen])

  // Close modals with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsContactOpen(false)
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const openContact = () => { setIsMenuOpen(false); setIsContactOpen(true) }
  const closeContact = () => setIsContactOpen(false)

  // Check if we should use light (white) styling
  const isLightMode = isHomePage && !isScrolled && !isMenuOpen

  // Determine navbar styles based on page and scroll position
  const getNavbarStyles = () => {
    // When mobile menu is open, always use dark text
    if (isMenuOpen) {
      return 'bg-transparent text-black'
    }
    
    // Home page: white text initially, black text on scroll
    if (isHomePage) {
      return isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm text-black'
        : 'bg-transparent text-white'
    }
    
    // Other pages: always black text with white background on scroll
    return isScrolled
      ? 'bg-white/90 backdrop-blur-md shadow-sm text-black'
      : 'bg-transparent text-black'
  }

  return (
    <>
      <nav
        className={`w-full h-16 md:h-20 flex items-center justify-between
                    px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32
                    fixed top-0 left-0 z-50 
                    transition-all duration-500
                    ${getNavbarStyles()}`}
      >
        {/* Branding */}
        <div className='font-bold text-xl sm:text-2xl md:text-3xl z-50'>
          <Link
            to="/"
            className='hover:opacity-70 transition-opacity flex items-center gap-2'
          >
            <img 
              src={icon} 
              alt="OneStone Logo"
              className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 object-contain
                         transition-all duration-500
                         ${isLightMode ? 'invert brightness-0 invert' : 'brightness-0'}`}
            />
            <span>OneStone</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div id="desktop-menu" className='hidden md:block'>
          <ul className='flex items-center gap-4 lg:gap-6 xl:gap-8'>

            {/* Works */}
            <li className='uppercase flex font-semibold group cursor-pointer text-sm lg:text-base'>
              <Link to="/works" className='flex hover:opacity-70 transition-opacity'>
                <span>Works</span>
                <span className='whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 ease-out'>
                  <span className='pl-1'>
                    <span className='lowercase font-light italic'>we've</span> done
                  </span>
                </span>
              </Link>
            </li>

            {/* About */}
            <li className='uppercase flex font-semibold group cursor-pointer text-sm lg:text-base'>
              <Link to="/about" className='flex hover:opacity-70 transition-opacity'>
                <span>About</span>
                <span className='whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 ease-out'>
                  <span className='pl-1'>
                    <span className='lowercase font-light italic'>our</span> story
                  </span>
                </span>
              </Link>
            </li>

            {/* Contact */}
            <li
              onClick={openContact}
              className='uppercase font-semibold cursor-pointer text-sm lg:text-base hover:opacity-70 transition-opacity'
            >
              Contact
            </li>

            {/* Social Links */}
            <li className='uppercase font-semibold text-sm lg:text-base'>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:opacity-70 transition-opacity'
              >
                IG
              </a>
              <span className='mx-1 opacity-40'>/</span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:opacity-70 transition-opacity'
              >
                YT
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden z-50 p-2 -mr-2 focus:outline-none
                     transition-colors duration-300
                     ${isMenuOpen ? 'text-black' : ''}`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <div className='w-6 h-5 flex flex-col justify-between'>
            <span
              className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-center
                         ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300
                         ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}
            />
            <span
              className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-center
                         ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white text-black z-40 md:hidden 
                   transition-all duration-500 ease-in-out
                   ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div
          className={`h-full flex flex-col justify-center items-center
                     transition-all duration-500 delay-100
                     ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <ul className='flex flex-col items-center gap-6 sm:gap-8'>
            {/* Mobile - Works */}
            <li
              className={`transition-all duration-300
                         ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}
            >
              <Link
                to="/works"
                onClick={() => setIsMenuOpen(false)}
                className='uppercase font-semibold text-4xl sm:text-5xl hover:opacity-70 transition-opacity'
              >
                Works
              </Link>
            </li>

            {/* Mobile - About */}
            <li
              className={`transition-all duration-300
                         ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
            >
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className='uppercase font-semibold text-4xl sm:text-5xl hover:opacity-70 transition-opacity'
              >
                About
              </Link>
            </li>

            {/* Mobile - Contact */}
            <li
              className={`transition-all duration-300
                         ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
            >
              <button
                onClick={openContact}
                className='uppercase font-semibold text-4xl sm:text-5xl hover:opacity-70 transition-opacity'
              >
                Contact
              </button>
            </li>

            {/* Mobile - Social Links */}
            <li
              className={`transition-all duration-300 mt-8
                         ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
            >
              <div className='flex gap-6'>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='uppercase font-semibold text-xl hover:opacity-70 transition-opacity'
                >
                  Instagram
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='uppercase font-semibold text-xl hover:opacity-70 transition-opacity'
                >
                  YouTube
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Modal */}
      <Contact isOpen={isContactOpen} onClose={closeContact} />
    </>
  )
}

export default Navbar