import React from 'react'

const Vision = () => {
  return (
    <section id='vision' className="w-full px-6 pt-20 flex flex-col md:flex-row relative overflow-hidden">
  {/* Left: Text Content */}
  <div className="w-full md:w-1/2 relative z-10 text-center md:text-left">
  <div className="relative z-10">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-poppins text-navy-blue">
      We’re <span className="text-blue-950">building</span> the Stripe of <span className="text-blue-950 underline">healthcare logistics</span>
    </h2>
    <p className="text-base sm:text-lg text-black font-inter">
      API-powered delivery + pharmacy network. Fast access to <span className="font-extrabold">medicine — globally.</span>
    </p>
    </div>
    {/* Globe Background Image */}
    <img
      src="/assets/medecine.webp"
      alt="global background"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none opacity-30 z-0 pointer-events-none"
    />
  </div>

  {/* Right: Foreground Image */}
  <div className="w-full md:w-1/2 z-10 flex justify-center mt-10 md:mt-0">
    <img
      src="/assets/img_globe.png"
      alt="medecine"
      className="max-w-[700px] w-[130%] object-cover"
    />
  </div>
</section>


  )
}

export default Vision