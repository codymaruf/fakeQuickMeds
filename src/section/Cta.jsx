import React from 'react'

function Cta() {
  return (
    <section id='cta' className="w-full px-6 py-16 bg-little-gray mt-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-10">
  {/* Text Content */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-poppins text-navy-blue">
      Join the <span className='text-blue-950 underline'>waitlist</span>. Back the future of medical access.
    </h2>
   <button
                    href="#cta"
                className="hidden md:block px-5 py-2 rounded-md text-sm font-semibold bg-sky-blue text-gray-800 hover:bg-navy-blue hover:text-white cursor-pointer transition duration-200 ease-in-out h-10 w-30 mx-auto"
            >Join Waitlist</button>
  </div>

  {/* Image */}
  <div className="w-full md:w-1/2 flex justify-center items-center flex-col gap-5 ">
  
    <img
      src="/assets/light-problem.webp"
      alt="People waiting in a queue"
      className="w-full max-w-[300px] rounded-lg object-cover"
    />
    <button
                    href="#cta"
                className="md:hidden px-5 py-2 rounded-md text-sm font-semibold bg-sky-blue text-gray-800 hover:bg-navy-blue hover:text-white cursor-pointer transition duration-200 ease-in-out h-10 w-30"
            >Join Waitlist</button>
  </div>

 
</section>
  )
}

export default Cta



// 7. CTA Section (Repeat Hero)
// Headline:
// Join the waitlist. Back the future of medical access.

// CTA Button:
// [Back Us] or [Join the Waitlist]