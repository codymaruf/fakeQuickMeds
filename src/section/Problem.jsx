import React from 'react'

const Problem = () => {
  return (
    
<section id='problem' className="w-full px-6 py-16 bg-little-gray mt-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-10">
  {/* Text Content */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-poppins text-navy-blue">
      Getting <span className='text-blue-950'>medication</span> shouldn’t be this hard
    </h2>
    <p className="text-base sm:text-lg text-gray-700 font-inter">
      People still struggle to refill essential prescriptions due to long waits, pharmacy closures, or lack of mobility. In 2025, this is unacceptable.
    </p>
  </div>

  {/* Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/assets/queue.jpg"
      alt="People waiting in a queue"
      className="w-full max-w-[500px] rounded-lg shadow-md object-cover"
    />
  </div>
</section>
  )
}

export default Problem
