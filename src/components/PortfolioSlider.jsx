import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, title: "Valentine's Day", client: 'Marc Jacobs', category: 'Fashion', image: '/images/project-1.jpg', slug: 'valentines-day' },
  { id: 2, title: 'TVC 100 ans', client: 'Linvosges', category: 'Commercials', image: '/images/project-2.jpg', slug: 'tvc-100-ans' },
  { id: 3, title: 'The Light You Feel', client: 'Lutron', category: 'Commercials', image: '/images/project-3.jpg', slug: 'light-you-feel' },
  { id: 4, title: 'Parco x Miu Miu', client: 'Beau Magazine', category: 'Fashion', image: '/images/project-4.jpg', slug: 'parco-miu-miu' },
  { id: 5, title: 'Abyssae', client: "L'artisan parfumeur", category: 'Cosmetics', image: '/images/project-5.jpg', slug: 'abyssae' },
  { id: 6, title: 'Spring Evergreen', client: 'Boll & Branch', category: 'Commercials', image: '/images/project-6.jpg', slug: 'spring-evergreen' },
  { id: 7, title: 'Les Eaux à la Mode', client: 'Miu Miu', category: 'Cosmetics', image: '/images/project-7.jpg', slug: 'les-eaux' },
  { id: 8, title: 'Home Collection', client: 'Hermès', category: 'Luxury', image: '/images/project-8.jpg', slug: 'home-collection' },
  { id: 9, title: 'Dualtime', client: 'Louis Vuitton', category: 'Luxury', image: '/images/project-9.jpg', slug: 'dualtime' },
  { id: 10, title: 'Nothing is static', client: 'PussPuss Magazine', category: 'Fashion', image: '/images/project-10.jpg', slug: 'nothing-static' },
]

const PortfolioSlider = () => {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [trackWidth, setTrackWidth] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  // Calculate track width on mount and resize
  useLayoutEffect(() => {
    const calculateWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth)
        setWindowWidth(window.innerWidth)
      }
    }
    
    calculateWidth()
    window.addEventListener('resize', calculateWidth)
    return () => window.removeEventListener('resize', calculateWidth)
  }, [])

  // Scroll progress for horizontal movement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Calculate the exact amount to move (track width - visible area)
  const scrollDistance = trackWidth - windowWidth + 200 // 200 for padding

  // Transform vertical scroll to horizontal movement with exact pixels
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollDistance])

  // Update current index based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const index = Math.min(
        Math.floor(latest * projects.length),
        projects.length - 1
      )
      if (index !== currentIndex && index >= 0) {
        setCurrentIndex(index)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, currentIndex])

  // GSAP animation for decorative line
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.decorative-path', {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  // Calculate container height based on scroll distance needed
  const containerHeight = Math.max(scrollDistance + window.innerHeight, window.innerHeight * 2)

  return (
    <section
      ref={containerRef}
      className="portfolio-slider"
      style={{ height: `${containerHeight}px` }}
    >
      {/* Sticky Container */}
      <div className="portfolio-slider__sticky">
        <div className="portfolio-slider__grid">
          
          {/* Left Column - Counter */}
          <div className="portfolio-slider__left">
            <div className="portfolio-slider__counter">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="portfolio-slider__counter-num"
                >
                  {String(currentIndex + 1).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
              <span className="portfolio-slider__counter-total">
                /{String(projects.length).padStart(2, '0')}
              </span>
            </div>

            {/* Project Title - Left */}
            <div className="portfolio-slider__title-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={projects[currentIndex]?.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {projects[currentIndex]?.title}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Decorative curved line */}
            <svg className="portfolio-slider__decoration" viewBox="0 0 200 400" fill="none">
              <path
                className="decorative-path"
                d="M180 0 Q 20 100, 100 200 Q 180 300, 20 400"
                stroke="#E5E5E3"
                strokeWidth="1"
                fill="none"
                strokeDasharray="1000"
                strokeDashoffset="1000"
              />
            </svg>
          </div>

          {/* Center - Images Slider */}
          <div className="portfolio-slider__center">
            <motion.div 
              ref={trackRef}
              style={{ x }} 
              className="portfolio-slider__track"
            >
              {projects.map((project, index) => (
                <a
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="portfolio-slider__card"
                >
                  <div className="portfolio-slider__image-wrap">
                    <div 
                      className="portfolio-slider__image"
                      style={{
                        background: `linear-gradient(${135 + index * 20}deg, 
                          hsl(${index * 36}, 30%, 85%) 0%, 
                          hsl(${index * 36 + 30}, 40%, 75%) 100%)`,
                      }}
                    >
                      <span className="portfolio-slider__placeholder">{project.client}</span>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Category & Brand List */}
          <div className="portfolio-slider__right">
            {/* Category */}
            <div className="portfolio-slider__category">
              <AnimatePresence mode="wait">
                <motion.span
                  key={projects[currentIndex]?.category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {projects[currentIndex]?.category}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Brand List */}
            <div className="portfolio-slider__brands">
              <div className="portfolio-slider__brands-fade portfolio-slider__brands-fade--top" />
              <div className="portfolio-slider__brands-fade portfolio-slider__brands-fade--bottom" />
              
              <motion.div
                className="portfolio-slider__brands-list"
                animate={{ y: `-${(currentIndex / projects.length) * 50}%` }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {[...projects, ...projects].map((project, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    className={`portfolio-slider__brand ${
                      index % projects.length === currentIndex ? 'is-active' : ''
                    }`}
                  >
                    {project.client}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Link */}
        <a href="/works" className="portfolio-slider__link">
          <span>All our projects</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default PortfolioSlider