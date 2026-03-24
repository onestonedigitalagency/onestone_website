import React from 'react';
import { motion } from 'framer-motion';

function AboutOverview() {
  const serifFont = {
    fontFamily: "'Instrument Serif', Georgia, serif",
    fontWeight: 'normal' as const
  }

  const labelFont = {
    fontFamily: "'Inter', sans-serif",
    textTransform: 'uppercase' as const,
    letterSpacing: '0.2em',
    fontSize: '0.75rem'
  }

  return (
    <section className='relative bg-transparent py-16 md:py-24 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[50vh]'>
      {/* Background Accent - Subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className='max-w-xl mx-auto text-center'
      >
        <span 
          style={labelFont} 
          className="inline-block text-gray-400 mb-6 tracking-[0.3em]"
        >
          Who we are
        </span>
        
        <h1 
          style={serifFont} 
          className='text-lg md:text-[1.5rem] leading-[1.4] text-[#1A1A1A] tracking-tight'
        >
          We are an elite digital agency driven by deep research and creative confidence. 
          Every solution we craft is tailored to your unique vision — <span className="italic opacity-70">bespoke, never templated.</span> 
          From the first brief to the final build, we combine bold design thinking with 
          hard-coded, fully customizable, and infinitely upscalable development. 
          We don't just build products; we engineer experiences that deliver measurable ROI 
          and grow alongside your ambitions. Your success is the brief. Everything else is execution.
        </h1>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[1px] bg-black/10 mx-auto mt-10"
        />
        
        <div className="mt-8">
          <a 
            href="/about" 
            style={labelFont} 
            className='group inline-flex items-center gap-2 hover:gap-4 transition-all duration-300 py-2'
          >
            <span className="text-xs border-b border-black/20 group-hover:border-black pb-1 transition-colors">Our Story</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transform group-hover:translate-x-1 transition-transform opacity-60">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
    </section>
  )
}

export default AboutOverview;