import React from 'react'

const Team = () => {
  return (
    <section id='team' className="w-full px-6 py-16 bg-little-gray flex flex-col md:flex-row items-center gap-10 rounded-lg shadow-lg">
  {/* Text Content */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <div>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-poppins text-navy-blue">
        Built by <span className='text-blue-950'>healthcare</span> experts & <span className='text-blue-950'>delivery</span> veterans
    </h2>
    <p className="text-base sm:text-lg text-gray-700 font-inter">
      From ER doctors to ex-Amazon logistics managers — we know how to <span className='font-extrabold'>fix the broken medication system.</span>
    </p>
  </div>
  </div>

  {/* Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/assets/logistic.jpg"
      alt="logistic6"
      className="w-full max-w-[500px] object-cover"
    />
  </div>
</section>
  )
}

export default Team