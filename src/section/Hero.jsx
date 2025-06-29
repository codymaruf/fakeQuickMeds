
const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/delevery.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Headline */}
      <div className="absolute z-10 top-20 md:top-17 left-6 sm:left-10">
        <h1 className='font-medium text-xl sm:font-bold sm:text-3xl md:text-4xl'>Fast, reliable prescription delivery —<br /> anywhere, anytime</h1>
      </div>

      {/* Subtext & Button */}
      <div className='absolute z-10 p-10 top-95 tablet:top-105 sm:right-5 text-center tablet:flex tablet:flex-col'>
             <p className='text-lg md:font-bold text-center mb-5'>On-demand access to essential meds. No lines. No delays.</p>
            <button
                    href="#cta"
                className="px-5 py-2 rounded-md text-sm font-semibold bg-sky-blue text-gray-800 hover:bg-navy-blue hover:text-white cursor-pointer transition duration-200 ease-in-out "
            >
                    Join Waitlist
            </button>
       </div>
    </section>
  );
};

export default Hero;
