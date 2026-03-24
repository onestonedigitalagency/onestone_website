import React from 'react';
import { motion } from 'framer-motion';

function AboutOverview() {
  return (
    <section className="relative py-24 md:py-32 px-6 flex items-center justify-center overflow-hidden">
      
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-black/5 blur-3xl rounded-full opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-3xl text-center"
      >
        
        {/* Label */}
        <span className="uppercase tracking-[0.4em] text-[11px] text-gray-400 mb-8 block font-inter">
          Who we are
        </span>

        {/* Heading */}
        <h1 className="font-serif text-2xl md:text-4xl leading-[1.5] text-[#111] tracking-tight">
          We craft digital experiences that feel as refined as they perform.
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          We are an elite digital agency driven by deep research and creative clarity. 
          Every solution is built from the ground up —{" "}
          <span className="italic text-black/70">bespoke, never templated.</span>{" "}
          From strategy to execution, we merge bold design thinking with scalable engineering 
          to create systems that evolve with your ambition.
        </p>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[1px] bg-black/20 mx-auto mt-10"
        />

        {/* CTA */}
        <div className="mt-10">
          <a
            href="/about"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em]"
          >
            <span className="relative">
              Our Story
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </span>

            <span className="transform group-hover:translate-x-1 transition-all duration-300">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutOverview;