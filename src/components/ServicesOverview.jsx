import React, { useState, useEffect } from 'react'

function ServicesOverview() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 1000)

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
    <div className='w-full min-h-fit pb-16'>
    
      <div className='flex justify-end px-10'>
        <h1 className='w-xs md:w-3xl text-5xl md:text-9xl uppercase text-end leading-tight'>
          Our services
        </h1>
      </div>
      <div className='w-full grid grid-cols-1 px-10 sm:grid-cols-2 lg:grid-cols-4 justify-between pt-16'>
        {services.map((service) => (
          <div key={service.id}>
            <h2 className='text-2xl md:text-3xl font-bold mb-4'>
              {service.id}. {service.title}
            </h2>

            <ul className='space-y-2 '>
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

    </div>
  )
}

export default ServicesOverview