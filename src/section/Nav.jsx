import React from 'react'

const Nav = () => {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm font-poppins">
      {/* Logo */}
      <div className="text-2xl font-semibold text-navy-blue">
        <img src="/assets/logo-bg1.png" alt="logo" className='h-12'/>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-base text-gray-600 font-medium">
        <a href="#problem" className="hover:text-violate transition">Problem</a>
        <a href="#solution" className="hover:text-violate transition">Solution</a>
        <a href="#team" className="hover:text-violate transition">Team</a>
        <a href="#vision" className="hover:text-violate transition">Vision</a>
      </div>

      {/* CTA Button */}
      <button
        href="#cta"
        className="px-5 py-2 rounded-md text-sm font-semibold bg-sky-blue text-gray-800 hover:bg-navy-blue hover:text-white cursor-pointer transition duration-200 ease-in-out"
      >
        Join Waitlist
      </button>
    </nav>
  )
}

export default Nav