import React, { useState, useEffect } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <nav 
        className={`w-full h-16 md:h-20 flex items-center justify-between 
                    px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32
                    fixed top-0 left-0 z-50 transition-all duration-300
                    ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
      >
        {/* Branding */}
        <div 
          id="branding" 
          className='font-bold text-xl sm:text-2xl md:text-3xl z-50'
        >
          <a href="/" className='hover:opacity-80 transition-opacity'>
            OneStone
          </a>
        </div>

        {/* Desktop Menu */}
        <div id="desktop-menu" className='hidden md:block'>
          <ul className='flex items-center gap-4 lg:gap-6 xl:gap-8'>
            {/* Works */}
            <li className='uppercase flex font-semibold group relative cursor-pointer text-sm lg:text-base'>
              <a href="/works" className='flex'>
                <span>Works</span>
                <span className='whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 ease-out'>
                  <span className='pl-1'>
                    <span className='lowercase font-light italic'>we've</span> done
                  </span>
                </span>
              </a>
            </li>

            {/* About */}
            <li className='uppercase flex font-semibold group relative cursor-pointer text-sm lg:text-base'>
              <a href="/about" className='flex'>
                <span>About</span>
                <span className='whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 ease-out'>
                  <span className='pl-1'>
                    <span className='lowercase font-light italic'>our</span> story
                  </span>
                </span>
              </a>
            </li>

            {/* Contact */}
            <li className='uppercase font-semibold cursor-pointer text-sm lg:text-base'>
              <a href="/contact" className='hover:opacity-70 transition-opacity'>
                Contact
              </a>
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
              <span className='mx-1'>/</span>
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden z-50 p-2 -mr-2 focus:outline-none'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <div className='w-6 h-5 relative flex flex-col justify-between'>
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
        className={`fixed inset-0 bg-white z-40 md:hidden transition-all duration-500 ease-in-out
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
              className={`transform transition-all duration-300 
                         ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}
            >
              <a 
                href="/works" 
                onClick={() => setIsMenuOpen(false)}
                className='uppercase font-semibold text-4xl sm:text-5xl hover:opacity-70 transition-opacity'
              >
                Works
              </a>
            </li>

            {/* Mobile - About */}
            <li 
              className={`transform transition-all duration-300
                         ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
            >
              <a 
                href="/about" 
                onClick={() => setIsMenuOpen(false)}
                className='uppercase font-semibold text-4xl sm:text-5xl hover:opacity-70 transition-opacity'
              >
                About
              </a>
            </li>

            {/* Mobile - Contact */}
            <li 
              className={`transform transition-all duration-300
                         ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
            >
              <a 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className='uppercase font-semibold text-4xl sm:text-5xl hover:opacity-70 transition-opacity'
              >
                Contact
              </a>
            </li>

            {/* Mobile - Social Links */}
            <li 
              className={`transform transition-all duration-300 mt-8
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
    </>
  )
}

export default Navbar