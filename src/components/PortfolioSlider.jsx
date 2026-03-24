import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import assets (GIFs and JPGs)
import asset1 from '../assets/1.gif'
import asset2 from '../assets/2.gif'
import asset3 from '../assets/3.gif'
import asset4 from '../assets/4.gif'
import asset6 from '../assets/6.jpg'
import asset7 from '../assets/7.jpg'
import asset8 from '../assets/8.jpg'
import asset9 from '../assets/9.gif'
import asset10 from '../assets/10.jpg'
import asset11 from '../assets/11.gif'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, title: 'We build fast, scalable websites and mobile apps tailored to your business needs.', client: 'Web and App Development', category: 'What We DO', image: asset1, slug: 'visual-motion' },
  { id: 2, title: 'We integrate smart automation to save your team time and cut repetitive work.', client: 'AI Automation', category: 'What We DO', image: asset2, slug: 'digital-dream' },
  { id: 3, title: 'Clean, intuitive interfaces that keep users engaged and coming back.', client: 'UI/UX Development ', category: 'What We DO', image: asset3, slug: 'ethereal-flow' },
  { id: 4, title: 'End-to-end SaaS platforms built to grow with your product and users.', client: 'SaaS Development', category: 'What We DO', image: asset4, slug: 'kinetic-art' },
  { id: 5, title: 'We dig into your existing site, find whats broken or slow, and give you a clear fix-it roadmap.', client: 'Website Audit', category: 'What WE DO', image: asset11, slug: 'dynamic-pulse' },
  { id: 6, title: 'Share your requirements, no long forms or sales calls needed.', client: 'Drop Us an Email ', category: 'How We Work', image: asset6, slug: 'still-narrative' },
  { id: 7, title: 'We reach out, understand your goals, and ask the right questions.', client: 'We Connect at Your Time', category: 'How We Work', image: asset7, slug: 'aesthetic-lens' },
  { id: 8, title: 'You get a clear, tailored plan — not a copy-paste proposal.', client: 'We Craft the Best Solution', category: 'How We Work', image: asset8, slug: 'urban-vision' },
  { id: 9, title: 'A working demo lands in your inbox within 3 days, not 3 weeks.', client: 'Demo in 3 Days', category: 'How We Work', image: asset9, slug: 'fluid-motion' },
  { id: 10, title: 'We wrap up the paperwork and get straight to building.', client: 'Then the Easy Part ', category: 'How We Work', image: asset10, slug: 'modern-essence' },
]

const PortfolioSlider = () => {
  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Average scroll distance per project to make it feel natural
  const scrollDistance = 800 * (projects.length - 1)

  // Preload images on mount
  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  // ScrollTrigger for both index tracking and decorative line
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Index tracking
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const index = Math.min(
            Math.floor(self.progress * (projects.length - 0.01)),
            projects.length - 1
          )
          setCurrentIndex(index)
        }
      })

      // Decorative path animation
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
  const containerHeight = scrollDistance + window.innerHeight

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
              <div className="portfolio-slider__counter-num-wrap" style={{ position: 'relative', display: 'flex' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="portfolio-slider__counter-num"
                  >
                    {String(currentIndex + 1)}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="portfolio-slider__counter-total">
                /{String(projects.length)}
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
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Center - Image Display (Carousel Style) */}
          <div className="portfolio-slider__center">
            <div className="portfolio-slider__image-wrap">
              <motion.div 
                className="portfolio-slider__image-strip"
                initial={false}
                animate={{ y: `-${currentIndex * 100}%` }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="portfolio-slider__image-item">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="portfolio-slider__img"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
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
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {projects[currentIndex]?.category}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Brand List - Static with highlight */}
            <div className="portfolio-slider__brands">
              <div className="portfolio-slider__brands-fade portfolio-slider__brands-fade--top"></div>
              <div className="portfolio-slider__brands-fade portfolio-slider__brands-fade--bottom"></div>
              <div 
                className="portfolio-slider__brands-list"
                style={{ transform: `translateY(-${(currentIndex - 2) * 3}rem)` }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`portfolio-slider__brand ${index === currentIndex ? 'is-active' : ''}`}
                  >
                    {project.client}
                  </div>
                ))}
              </div>
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