import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function About() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  // Team members data
  const team = [
   
    { 
      name: 'Michael Brown', 
      role: 'Motion Designer', 
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      description: 'Animation specialist bringing brands to life'
    },
    { 
      name: 'Lisa Park', 
      role: 'Project Manager', 
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      description: 'Orchestrating projects from concept to delivery'
    },
  ]

  // Services data
  const services = [
    { 
      title: 'Brand Identity', 
      desc: 'Logo design, brand guidelines, visual systems, and brand strategy that define who you are.',
      icon: '◆'
    },
    { 
      title: 'Web Design & Development', 
      desc: 'Responsive websites, web applications, e-commerce, and custom digital solutions.',
      icon: '◇'
    },
    { 
      title: 'Art Direction', 
      desc: 'Creative direction, visual storytelling, campaigns, and photoshoots.',
      icon: '○'
    },
    { 
      title: 'Motion Design', 
      desc: '2D/3D animation, video production, motion graphics, and interactive experiences.',
      icon: '△'
    },
    { 
      title: 'Digital Marketing', 
      desc: 'Social media strategy, content creation, SEO, and performance marketing.',
      icon: '□'
    },
    { 
      title: 'Photography', 
      desc: 'Product photography, lifestyle shoots, post-production, and visual content.',
      icon: '▽'
    },
  ]

  // Clients/Partners logos (using placeholder text)
  const clients = [
    'Nike', 'Apple', 'Google', 'Spotify', 'Airbnb', 
    'Netflix', 'Adobe', 'Slack', 'Figma', 'Notion'
  ]

  // Studio images for carousel
  const studioImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80',
    'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80',
  ]

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % studioImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [studioImages.length])

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <>
      <div className='w-full min-h-screen'>
        
        {/* Hero Section */}
        <section className='w-full pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32'>
          {/* Breadcrumb */}
          <div className='mb-8 sm:mb-12'>
            <Link 
              to="/" 
              className='text-sm text-gray-500 hover:text-black transition-colors'
            >
              Home
            </Link>
            <span className='text-sm text-gray-400 mx-2'>/</span>
            <span className='text-sm'>About</span>
          </div>

          {/* Hero Title */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
            <div>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                             uppercase font-semibold leading-[0.9]'>
                We are
                <br />
                <span className='font-cookie normal-case font-normal'>
                  OneStone
                </span>
              </h1>
            </div>
            <div className='flex flex-col justify-end'>
              <p className='text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-gray-700'>
                A creative-driven hybrid structure, a one-stop shop from ideas to execution. 
                We transform brands into unforgettable experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative overflow-hidden'>
          <img 
            src={studioImages[currentImage]}
            alt="OneStone Studio"
            className='w-full h-full object-cover transition-opacity duration-1000'
          />
          <div className='absolute inset-0 bg-black/10'></div>
          
          {/* Image indicators */}
          <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2'>
            {studioImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300
                           ${currentImage === index ? 'bg-white w-8' : 'bg-white/50'}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className='w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16'>
            {/* Left - Label */}
            <div className='lg:col-span-3'>
              <span className='text-sm uppercase tracking-widest text-gray-500'>Our Story</span>
            </div>
            
            {/* Right - Content */}
            <div className='lg:col-span-9'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-8'>
                Founded in 2019, OneStone emerged from a simple belief: 
                <span className='font-cookie text-3xl sm:text-4xl md:text-5xl lg:text-6xl'> creativity </span> 
                should have no boundaries.
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <p className='text-base sm:text-lg text-gray-600 font-light leading-relaxed'>
                  We are not just a production house. We are your agency, a design studio, 
                  and a digital factory all in one place. A place where brands can be more 
                  authentic, bold, and rise above the crowd.
                </p>
                <p className='text-base sm:text-lg text-gray-600 font-light leading-relaxed'>
                  Our team brings together diverse expertise—from brand strategists to 
                  motion designers—all united by a passion for crafting meaningful work 
                  that resonates and endures.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full border-y border-gray-200 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
            <div className='text-center md:text-left'>
              <span className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cookie'>
                50+
              </span>
              <p className='mt-2 text-sm sm:text-base text-gray-500 uppercase tracking-wider'>
                Projects Completed
              </p>
            </div>
            <div className='text-center md:text-left'>
              <span className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cookie'>
                30+
              </span>
              <p className='mt-2 text-sm sm:text-base text-gray-500 uppercase tracking-wider'>
                Happy Clients
              </p>
            </div>
            <div className='text-center md:text-left'>
              <span className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cookie'>
                5
              </span>
              <p className='mt-2 text-sm sm:text-base text-gray-500 uppercase tracking-wider'>
                Years Experience
              </p>
            </div>
            <div className='text-center md:text-left'>
              <span className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cookie'>
                12
              </span>
              <p className='mt-2 text-sm sm:text-base text-gray-500 uppercase tracking-wider'>
                Awards Won
              </p>
            </div>
          </div>
        </section>

        <section className='w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-black text-white'>
          <div className='max-w-5xl mx-auto text-center'>
            <span className='text-sm uppercase tracking-widest text-gray-400 mb-8 block'>
              Our Philosophy
            </span>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight'>
              "We believe in the power of 
              <span className='font-cookie normal-case'> bold ideas </span> 
              and 
              <span className='font-cookie normal-case'> flawless execution </span>
              to transform businesses."
            </h2>
            <div className='mt-12 flex flex-col sm:flex-row justify-center gap-8 sm:gap-16'>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>Think Different</h3>
                <p className='text-gray-400 font-light text-sm sm:text-base'>
                  Challenge conventions, embrace creativity
                </p>
              </div>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>Craft with Care</h3>
                <p className='text-gray-400 font-light text-sm sm:text-base'>
                  Every pixel, every detail matters
                </p>
              </div>
              <div>
                <h3 className='text-lg sm:text-xl font-semibold mb-2'>Deliver Impact</h3>
                <p className='text-gray-400 font-light text-sm sm:text-base'>
                  Results that move the needle
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-4'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-semibold'>
              The <span className='font-cookie normal-case font-normal'>Team</span>
            </h2>
            <p className='text-gray-500 font-light text-sm sm:text-base max-w-xs'>
              The talented people behind every successful project
            </p>
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12'>
            {team.map((member, index) => (
              <div 
                key={index} 
                className='group cursor-pointer'
              >
                <div className='w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 mb-4 sm:mb-6'>
                  <img 
                    src={member.img}
                    alt={member.name}
                    className='w-full h-full object-cover 
                               group-hover:scale-105 transition-transform duration-700 ease-out
                               filter grayscale group-hover:grayscale-0 transition-all'
                    loading="lazy"
                  />
                </div>
                <h3 className='text-xl sm:text-2xl font-semibold'>{member.name}</h3>
                <p className='text-gray-500 font-light text-sm sm:text-base'>{member.role}</p>
                <p className='text-gray-400 font-light text-xs sm:text-sm mt-2 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className='w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 border-t border-gray-200'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-4'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-semibold'>
              What We <span className='font-cookie normal-case font-normal'>Do</span>
            </h2>
            <Link 
              to="/works" 
              className='text-sm sm:text-base underline hover:opacity-70 transition-opacity'
            >
              View Our Works →
            </Link>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {services.map((service, index) => (
              <div 
                key={index} 
                className='group p-6 sm:p-8 border border-gray-200 rounded-xl 
                           hover:border-black hover:bg-black hover:text-white
                           transition-all duration-500 cursor-pointer'
              >
                <span className='text-2xl sm:text-3xl mb-4 block opacity-30 group-hover:opacity-100 transition-opacity'>
                  {service.icon}
                </span>
                <h3 className='text-xl sm:text-2xl font-semibold mb-3'>{service.title}</h3>
                <p className='text-gray-600 group-hover:text-gray-300 font-light text-sm sm:text-base leading-relaxed transition-colors'>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className='w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 border-t border-gray-200'>
          <div className='text-center mb-12 sm:mb-16'>
            <span className='text-sm uppercase tracking-widest text-gray-500 mb-4 block'>
              Trusted By
            </span>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-light'>
              Brands we've had the pleasure to work with
            </h2>
          </div>
       
          <div className='overflow-hidden'>
            <div className='flex gap-8 sm:gap-12 md:gap-16 animate-marquee'>
              {[...clients, ...clients].map((client, index) => (
                <span 
                  key={index}
                  className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                             font-semibold text-gray-300 hover:text-black 
                             transition-colors whitespace-nowrap cursor-default'
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>
    
      </div>
      <Contact isOpen={isContactOpen} onClose={closeContact} />
    </>
  )
}

export default About