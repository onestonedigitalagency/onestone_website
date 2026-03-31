import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'

function About() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  // Set page title for SEO
  useEffect(() => {
    document.title = 'About — OneStone'
    return () => { document.title = 'OneStone — Elite Digital Agency' }
  }, [])

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
                             uppercase font-semibold leading-[0.9] tracking-tight'>
                We build for
                <br />
                <span className='font-cookie normal-case font-normal'>
                  businesses
                </span>
                <br />
                that deserve better.
              </h1>
            </div>
            <div className='flex flex-col justify-end'>
              <p className='text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-gray-700 max-w-xl'>
                OneStone is an elite digital agency born from a simple frustration — too many businesses running on websites and code that quietly hold them back. We exist to fix that.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className='w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16'>
            {/* Left - Label */}
            <div className='lg:col-span-3'>
              <span className='text-sm uppercase tracking-widest text-gray-500'>Our Origin</span>
            </div>

            {/* Right - Content */}
            <div className='lg:col-span-9'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-8'>
                As developers, we kept seeing the same pattern — local businesses, ambitious founders, growing brands — all sitting on 
                <span className='font-cookie text-3xl sm:text-4xl md:text-5xl lg:text-6xl'> fragile </span>
                websites, leaking code, and digital infrastructure that nobody had properly thought through.
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <p className='text-base sm:text-lg text-gray-600 font-light leading-relaxed'>
                  They'd approach us quietly, almost apologetically, with a problem they'd been living with for months. A slow site. A broken checkout. A competitor outranking them. And we'd fix it in an afternoon.
                </p>
                <p className='text-base sm:text-lg text-gray-600 font-light leading-relaxed'>
                  That gap — between what businesses have and what they deserve — is exactly why OneStone exists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props Section */}
        <section className='w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 border-t border-gray-200'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16'>
            {/* Prop 1 */}
            <div className='flex flex-col'>
              <span className='text-3xl mb-6'>◎</span>
              <h3 className='text-xl sm:text-2xl font-semibold mb-4'>We translate tech into clarity</h3>
              <p className='text-gray-600 font-light text-base sm:text-lg leading-relaxed'>
                Most founders are not engineers — and they shouldn't have to be. We take a pile of requirements, cut through the noise, and tell you exactly what you need, why, and what it'll cost. No jargon. No padding.
              </p>
            </div>

            {/* Prop 2 */}
            <div className='flex flex-col'>
              <span className='text-3xl mb-6 text-yellow-500'>⚡</span>
              <h3 className='text-xl sm:text-2xl font-semibold mb-4'>We research so you don't overpay</h3>
              <p className='text-gray-600 font-light text-base sm:text-lg leading-relaxed'>
                Tech moves fast. The best tool this year costs half what it did last year and performs twice as well. We stay on the frontier — testing, benchmarking, choosing — so every build uses the right stack at the right price.
              </p>
            </div>

            {/* Prop 3 */}
            <div className='flex flex-col'>
              <span className='text-3xl mb-6'>⬡</span>
              <h3 className='text-xl sm:text-2xl font-semibold mb-4'>We build with security by default</h3>
              <p className='text-gray-600 font-light text-base sm:text-lg leading-relaxed'>
                Most small business sites treat security as an afterthought — until something goes wrong. We wire it in from the start: access control, data handling, deployment hygiene. Protection shouldn't be a premium add-on.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Block */}
        <section className='w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-black text-white text-center flex flex-col items-center'>
          <div className='max-w-5xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.4] italic text-gray-300'>
              "The non-technical business owner doesn't need a 40-page spec — they need someone who listens carefully, thinks clearly, and builds confidently. <br/>
              <span className='font-cookie text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mt-8 font-normal not-italic text-white'>
                That's the work we do.
              </span>"
            </h2>
          </div>
        </section>

        {/* Process Section */}
        <section className='w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
            <div className='group border-t border-gray-300 pt-8'>
              <span className='text-4xl font-light text-gray-300 block mb-6 group-hover:text-black transition-colors font-cookie'>01</span>
              <h3 className='text-xl font-semibold mb-3 uppercase tracking-wide'>Diagnose</h3>
              <p className='text-gray-600 font-light text-sm sm:text-base leading-relaxed'>
                We audit what you have — code quality, site performance, security gaps — and map it against what your business actually needs to grow.
              </p>
            </div>

            <div className='group border-t border-gray-300 pt-8'>
              <span className='text-4xl font-light text-gray-300 block mb-6 group-hover:text-black transition-colors font-cookie'>02</span>
              <h3 className='text-xl font-semibold mb-3 uppercase tracking-wide'>Translate</h3>
              <p className='text-gray-600 font-light text-sm sm:text-base leading-relaxed'>
                We turn technical complexity into plain-English decisions. You understand every trade-off before a single line of new code is written.
              </p>
            </div>

            <div className='group border-t border-gray-300 pt-8'>
              <span className='text-4xl font-light text-gray-300 block mb-6 group-hover:text-black transition-colors font-cookie'>03</span>
              <h3 className='text-xl font-semibold mb-3 uppercase tracking-wide'>Build</h3>
              <p className='text-gray-600 font-light text-sm sm:text-base leading-relaxed'>
                We use the best available tools — chosen for performance, cost-efficiency, and longevity — not whatever's trending on Twitter this week.
              </p>
            </div>

            <div className='group border-t border-gray-300 pt-8'>
              <span className='text-4xl font-light text-gray-300 block mb-6 group-hover:text-black transition-colors font-cookie'>04</span>
              <h3 className='text-xl font-semibold mb-3 uppercase tracking-wide'>Hand over</h3>
              <p className='text-gray-600 font-light text-sm sm:text-base leading-relaxed'>
                You leave with something you understand, can maintain, and feel genuinely confident about. That confidence is the deliverable.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        {/* <section className='w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-gray-50 border-t border-gray-200 text-center'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-none mb-8 uppercase tracking-tight'>
              In the end, we're chasing <br className="hidden sm:block" />
              one thing only —
              <span className='font-cookie normal-case font-normal block mt-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black'>
                happy faces.
              </span>
            </h2>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-600 font-light mb-10 max-w-2xl mx-auto'>
              When a client walks away feeling in control of their own tech, we've done our job.
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
        </section> */}

      </div>
      <Contact isOpen={isContactOpen} onClose={closeContact} />
    </>
  )
}

export default About