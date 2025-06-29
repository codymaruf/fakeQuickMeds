import React from 'react'

const Solution = () => {
  return (
    <section id='solution' className="w-full px-6 py-16 bg-white flex flex-col md:flex-row-reverse items-center gap-10">
  {/* Text Content */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-poppins text-navy-blue">
      Meet <a href='#nav' className='text-blue-950 underline font-black'>QuickMeds</a> — your <span className='text-blue-950'>60-minute</span> prescription solution.
    </h2>
    <p className="text-base sm:text-lg text-gray-700 font-inter">
      We deliver <span className='font-bold'>doctor</span>-approved meds from local <span className='font-bold'>pharmacies</span> right to your door — with verified partners, tracking, and total ease.
    </p>
  </div>

  {/* Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/assets/pharmacy.avif"
      alt="pharmacy"
      className="w-full max-w-[500px] rounded-lg shadow-md object-cover"
    />
  </div>
</section>
  )
}

export default Solution