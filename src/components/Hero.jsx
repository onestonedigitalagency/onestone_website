import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import icon from '../assets/icon.ico'
function Hero() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const heroImages = [
    'https://cdn.cosmos.so/94579ea4-daee-43f9-b778-84156b731361.jpeg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isLoading, heroImages.length])

  const loaderVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  }

  const loaderTextVariants = {
    initial: { y: 0 },
    exit: {
      y: -100,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  }

  const loaderCounterVariants = {
    initial: { opacity: 1, scale: 1 },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4 },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <>
      {/* LOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
            variants={loaderVariants}
            initial="initial"
            exit="exit"
          >
            <div className="relative w-full text-centerjustify-center items-center max-w-md px-8">
              <motion.div
                className="overflow-hidden mb-8"
                variants={loaderTextVariants}
                exit="exit"
              >
               <motion.img 
    src={icon} 
    alt="OneStone Logo"
    className="w-40 h-16 mb-6 object-contain" // Adjust size as needed
    initial={{ scale: 0.8, opacity: 1 }}
    
  />
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl text-white font-bold text-center"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  OneStone
                </motion.h1>
              </motion.div>

              <div className="w-full h-[1px] bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.div
                className="flex justify-between mt-4"
                variants={loaderCounterVariants}
                exit="exit"
              >
                <span className="text-white/50 text-sm font-light">Loading</span>
                <span className="text-white text-sm font-mono">
                  {Math.min(Math.round(loadingProgress), 100)}%
                </span>
              </motion.div>

              <motion.div
                className="mt-8 flex justify-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {['C', 'r', 'e', 'a', 't', 'i', 'n', 'g', '.', '.', '.'].map(
                  (letter, index) => (
                    <motion.span
                      key={index}
                      className="text-white/30 text-xs font-light"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                    >
                      {letter}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>

            <motion.div
              className="absolute top-8 left-8 text-white/20 text-xs font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              EST. 2026
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-8 text-white/20 text-xs font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              DIGITAL AGENCY
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO (FULL WIDTH BREAKOUT) */}
      <section
        className="relative h-screen overflow-hidden w-[100vw] left-1/2 -translate-x-1/2"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={heroImages[currentImage]}
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
          variants={containerVariants}
          initial="hidden"
          animate={!isLoading ? 'visible' : 'hidden'}
        >
          <motion.div className="overflow-hidden mb-4" variants={itemVariants}>
            <span className="text-white/70 text-sm sm:text-base uppercase tracking-[0.3em]">
              Creative Design Studio
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase font-bold leading-[0.9]"
              variants={itemVariants}
            >
              We Create
            </motion.h1>
          </div>

          <div className="">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-cookie normal-case font-normal leading-[0.9]"
              variants={itemVariants}
            >
              Digital Experiences
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase font-bold leading-[0.9]"
              variants={itemVariants}
            >
              That Matter
            </motion.h1>
          </div>

          <motion.div
            className="w-24 sm:w-32 md:w-48 h-[2px] bg-white mt-8 origin-left"
            variants={lineVariants}
          />

          <motion.p
            className="text-white/70 text-base sm:text-lg md:text-xl font-light max-w-md sm:max-w-lg mt-6 sm:mt-8"
            variants={itemVariants}
          >
            A creative agency crafting bold brands, immersive websites, and memorable digital experiences.
          </motion.p>

         
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={!isLoading ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-[1px] h-12 bg-white/30 relative overflow-hidden"
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full bg-white"
                  animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
              <span className="text-white/50 text-xs uppercase tracking-widest">
                Scroll to explore
              </span>
            </div>

            <div className="flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    currentImage === index
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white text-xs uppercase tracking-wider transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white text-xs uppercase tracking-wider transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white text-xs uppercase tracking-wider transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Floating */}
        <motion.div
          className="absolute top-1/4 right-8 sm:right-16 md:right-24 z-10 hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={!isLoading ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="text-white/30 text-xs uppercase tracking-widest writing-vertical">
            OneStone Studio © 2026
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Hero