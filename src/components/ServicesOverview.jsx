import React from 'react'

function ServicesOverview() {
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
      <div id="row-3" className='mt-12 pt-14 border-b  border-gray-300 pb-8'>
        <h1 className='text-5xl md:text-7xl md:w-4xl uppercase'>Let's craftyour project together</h1>
        <a href="/contact" className='mt-8  text-xl md:text-3xl inline-block underline  transition-colors'>
          Contact us
        </a>
      </div>
      
    </div>
  )
}

export default ServicesOverview