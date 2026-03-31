import React, { useState, useEffect, useRef } from 'react'
import Footer from './Footer'

// --- 1. DUMMY DATA (Simulating your database) ---
const ALL_PROJECTS = [
  { id: 1, title: 'Doctors Dashboard', year: '2026', tags: 'Making Life of doctors and Patients easy', img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80' },
  { id: 2, title: 'Faceyoguez', year: '2026', tags: 'Online personalised sessions for yoga and fitness', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80' },

   ]

function Work() {
  // --- 2. STATE MANAGEMENT ---
  const [displayedProjects, setDisplayedProjects] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  
  // Reference for the element that triggers the infinite scroll
  const loaderRef = useRef(null)

  const ITEMS_PER_PAGE = 3 // How many new projects to load each scroll

  // Load initial items on mount
  useEffect(() => {
    setDisplayedProjects(ALL_PROJECTS.slice(0, 2)) // Load first 2 to fill row 1 (with text block)
  }, [])

  // --- 3. INFINITE SCROLL LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0]
        // If the loader element is visible on screen, and we aren't already loading, load more
        if (target.isIntersecting && hasMore && !isLoading) {
          loadMoreProjects()
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the loader is visible
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current)
    }
  }, [hasMore, isLoading, displayedProjects])

  const loadMoreProjects = () => {
    setIsLoading(true)
    
    // Simulate a slight network delay so it feels natural
    setTimeout(() => {
      const currentLength = displayedProjects.length
      const nextProjects = ALL_PROJECTS.slice(currentLength, currentLength + ITEMS_PER_PAGE)
      
      if (nextProjects.length > 0) {
        setDisplayedProjects((prev) => [...prev, ...nextProjects])
      } 
      
      // If we've loaded all projects, stop the infinite scroll
      if (currentLength + nextProjects.length >= ALL_PROJECTS.length) {
        setHasMore(false)
      }
      
      setIsLoading(false)
    }, 800) // 800ms fake loading time
  }

  return (
    <div className='w-full min-h-screen pt-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32'>
        
        {/* Page Header */}
        <div className='w-full pb-8 mb-12 border-b border-gray-300'>
            <h1 className='text-5xl md:text-7xl uppercase font-semibold'>
                Selected <span className='font-cookie normal-case font-light'>works</span>
            </h1>
        </div>

        {/* Grid Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 flex-1'>
            
            {ALL_PROJECTS.map((project, index) => (
              <React.Fragment key={project.id}>
                
                {/* Standard Project Card */}
                <div className='flex flex-col group cursor-pointer relative'>
                    <div className='w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 relative'>
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className='w-full h-full object-cover blur-xl scale-110 group-hover:scale-125 transition-transform duration-700 ease-in-out'
                            loading="lazy"
                        />
                        {/* Hover Overlay with Gen Z Text */}
                        <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 p-6 text-center pointer-events-none'>
                            <p className='text-white font-medium text-lg md:text-xl xl:text-2xl leading-snug drop-shadow-md'>
                                gatekeeping this rn 💅<br/><br/>
                                <span className="opacity-90 text-sm md:text-base xl:text-lg">drop an email to get on the VIP list 👀✨</span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-4 flex justify-between items-center'>
                        <h2 className='text-2xl uppercase font-semibold'>{project.title}</h2>
                        <span className='text-sm italic font-light text-gray-500'>{project.year}</span>
                    </div>
                    <p className='text-gray-600 font-light mt-1'>{project.tags}</p>
                </div>

                {/* Inject the text block EXACTLY after the first project */}
                {index === 0 && (
                  <div className='flex flex-col items-center justify-center text-center p-8 border-y md:border-y-0 md:border-x border-gray-300 py-16 md:py-0'>
                      <h2 className='text-3xl md:text-4xl lg:text-5xl uppercase font-medium leading-[1.1]'>
                          Currently <br/>
                          <span className='font-cookie normal-case text-5xl md:text-6xl lg:text-7xl'>working</span><br/>
                          on two cool projects
                      </h2>
                      <p className='mt-6 text-gray-500 font-light text-sm md:text-base max-w-[250px]'>
                          Reach us to know more.
                      </p>
                  </div>
                )}

              </React.Fragment>
            ))}

        </div>

        {/* 
          LOADING TRIGGER 
          This invisible div triggers the IntersectionObserver when the user scrolls to it 
        */}
        <div ref={loaderRef} className='w-full py-10 flex justify-center items-center mb-10'>
          {isLoading && (
            <div className='flex flex-col items-center gap-2'>
               {/* Simple spinning loader */}
               <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
               <span className='uppercase font-semibold tracking-widest text-xs mt-2'>Loading</span>
            </div>
          )}
          {!hasMore && (
            <span className='text-gray-400 font-light italic'>You've reached the end of the archive.</span>
          )}
        </div>

     
    </div>
  )
}

export default Work