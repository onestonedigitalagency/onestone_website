import React from 'react'

function ServicesOverview() {

  const services = [
    {
      id: '01',
      title: 'We Build It For You',
      items: ['Build Your Idea', 'Custom Tool Build', 'Launch Page ', 'Connect Your Tools', 'Add AI to Your Business']
    },
    {
      id: '02',
      title: 'We Fix & Improve What You Have',
      items: ['Website Health Check', 'Fix My Existing System', 'Speed Up My System', 'Secure My Website ', 'Get a Clear Plan First']
    },
    {
      id: '03',
      title: 'We Stay With You',
      items: ['Monthly Care Plan', 'Keep My Site Fast & Healthy ', 'Your Tech Person, On Demand', 'SEO/GEO/AEO optimization', 'We Build, You Sell']
    },

  ]

  return (
    <div className='w-full min-h-fit pb-16'>
    
      <div className='flex justify-end px-10'>
        <h1 className='w-xs md:w-3xl text-5xl md:text-9xl uppercase text-end leading-tight'>
          Other services
        </h1>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 px-10 pt-16'>
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