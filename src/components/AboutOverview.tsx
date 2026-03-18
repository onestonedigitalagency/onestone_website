import React, { useState, useEffect } from 'react'

function AboutOverview() {
  const [currentGif, setCurrentGif] = useState(0)
  
  const gifs = [
    'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
    'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
    'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif',
    'https://media.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif',
    'https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGif((prev) => (prev + 1) % gifs.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [gifs.length])

  const cookieFont = {
    fontFamily: "'Cookie', cursive"
  }

  return (
    <div className=' '>
      
      {/* Grid Container - ensures perfect alignment */}
      <div className='grid grid-cols-1 md:grid-cols-[36rem_1px_1fr]'>
        
        {/* Row 1 - Column 1 */}
        <div className='p-4'>
          {/* Empty or add content */}
        </div>
        
        {/* Row 1 - Vertical Separator */}
        <div className='hidden md:block bg-gray-300'></div>
        
        {/* Row 1 - Column 2 */}
        <div className='p-4'>
          <h1 style={cookieFont} className='mt-24 md:w-4xl text-3xl md:text-5xl leading-tight'>
            OneStone is a creative-driven hybrid structure, a one-stop shop, from ideas to execution. 
            We are not just a digital agency, we are your design studio, and a digital factory 
            all in one place. A place where brands can be more authentic, bold, and rise above the crowd.
          </h1>
        </div>

        {/* Horizontal Separator - spans all columns */}
        <div className='col-span-1 md:col-span-3 h-[1px] bg-gray-300'></div>

        {/* Row 2 - Column 1 */}
        <div className='p-4'>
          <div className='w-full h-64 md:h-96 overflow-hidden rounded-lg'>
            <img 
              src={gifs[currentGif]} 
              alt="Random animation" 
              className='w-full h-full object-cover'
              key={currentGif}
            />
          </div>
        </div>
        
        {/* Row 2 - Vertical Separator */}
        <div className='hidden md:block bg-gray-300'></div>
        
        {/* Row 2 - Column 2 */}
        <div className='p-4 flex'>
          <a href="/about" className='underline text-xl md:text-3xl hover:opacity-70 transition-opacity'>
            About us
          </a>
        </div>

      </div>

    </div>
  )
}

export default AboutOverview