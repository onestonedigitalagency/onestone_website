import React , { useState, useEffect } from 'react'

function ServicesOverview() {


  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array of Unsplash images
  const images = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=500&fit=crop',
  ]

  // Change image every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 1000)

    // Cleanup on unmount
    return () => clearInterval(interval)
  }, [images.length])
  const services = [
    {
      id: '01',
      title: 'Branding',
      items: ['Art direction', 'Brand Strategy', 'Tone & Voice', 'Insights', 'Content strategy']
    },
    {
      id: '02',
      title: 'Creative',
      items: ['Storytelling', 'Copywriting', 'Social media guidelines', 'Photo + Video direction', '3D Visualization']
    },
    {
      id: '03',
      title: 'Digital',
      items: ['Web Design', 'UI/UX', 'Development', 'E-commerce', 'SEO']
    },
    {
      id: '04',
      title: 'Production',
      items: ['Video Production', 'Photography', 'Motion Graphics', 'Post Production', 'Sound Design']
    }
  ]

  return (
    <div className='w-screen min-h-screen p-4 md:p-8'> 
      
      {/* Row 1 */}
      <div id="row-1" className='flex justify-end  pb-8'>
        <h1 className='w-xs md:w-3xl text-5xl md:text-9xl uppercase text-end leading-tight'>
          Our services
        </h1>
      </div>

      {/* Row 2 */}
      <div id="row-2" className='pt-8 pb-8'>
        <h1 className='w-full md:w-3xl text-5xl md:text-9xl uppercase leading-tight'>
          List your services
        </h1>
      </div>

      {/* Row 3 - Services Grid */}
      <div id="row-3" className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-16'>
        
        {services.map((service) => (
          <div key={service.id} className='text-left'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4'>
              {service.id}. {service.title}
            </h2>
            <ul className='space-y-2'>
              {service.items.map((item, index) => (
                <li 
                  key={index} 
                  className='text-lg text-gray-600 hover:text-black transition-colors cursor-pointer'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <div id="row-3" className='mt-12 pt-14 border-b border-t border-gray-300 pb-8'>
        <h1 className='text-5xl md:text-7xl md:w-4xl uppercase'>Let's craftyour project together</h1>
        <a href="/contact" className='mt-8  text-xl md:text-3xl inline-block underline  transition-colors'>
          Contact us
        </a>
      </div>
     


    <div 
  id="row-3" 
  className='mt-4 pt-14 flex-col-reverse flex md:flex-row justify-between border-gray-300 pb-8'
>
  {/* Col 1 - Random Image - Fixed width */}
  <div id="col-1" className='mb-8 md:mb-0 md:w-1/3'>
    <div className='w-auto h-60 overflow-hidden rounded-lg'>
      <img 
        src={images[currentImageIndex]} 
        alt="Random showcase"
        className='w-96 h-full object-cover transition-opacity duration-300'
      />
    </div>
  </div>

  {/* Col 2 - Terms/Legal - Fixed width */}
  <div id="col-2" className='flex flex-col justify-start md:justify-end md:items-end md:w-1/3'> 
  <ul className='text-left text-xl py-10 md:py-0 md:text-3xl font-extralight'>
  <li className='opacity-70 hover:opacity-100 transition-opacity cursor-pointer'>
    Terms and Conditions
  </li>
  <li className='opacity-70 hover:opacity-100 transition-opacity cursor-pointer'>
    Legal
  </li>
  <li className='opacity-70 hover:opacity-100 transition-opacity cursor-pointer'>
    Credits
  </li>
</ul>
</div>

  {/* Col 3 - Main Navigation - Fixed width */}
  <div id="col-3" className='text-end md:w-1/3'>
    <ul>
      <li className='text-5xl uppercase md:text-7xl cursor-pointer hover:font-light transition-all'>
        Works
      </li>
      <li className='text-5xl uppercase md:text-7xl cursor-pointer hover:font-light transition-all'>
        About
      </li>
      <li className='text-5xl uppercase md:text-7xl cursor-pointer hover:font-light transition-all'>
        Contact
      </li>
    </ul>
  </div>
</div>
 
      
    </div>
  )
}

export default ServicesOverview