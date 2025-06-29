import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-navy-blue text-white py-10 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    
    {/* Logo & Tagline */}
    <div>
      <h2 className="text-2xl font-bold font-poppins mb-2">QuickMeds</h2>
      <p className="text-sm text-gray-300 font-inter">
        Reliable healthcare logistics — fast, global, accessible.
      </p>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col gap-2 font-inter">
      <h3 className="text-lg font-semibold mb-1">Explore</h3>
      <a href="#problem" className="hover:underline">Problem</a>
      <a href="#solution" className="hover:underline">Solution</a>
      <a href="#cta" className="hover:underline">Join Waitlist</a>
      <a href="#team" className="hover:underline">Team</a>
      <a href="#vision" className="hover:underline">Vision</a>
    </div>

    {/* Contact / CTA */}
    <div className="flex flex-col gap-2 font-inter">
      <h3 className="text-lg font-semibold mb-1">Get in Touch</h3>
      <p>Email: azharmaruf900@gmail.com</p>
      <p>Location: Global & Remote</p>
    </div>

  </div>

  <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
    © {new Date().getFullYear()} QuickMeds. All rights reserved.
  </div>
</footer>

  )
}

export default Footer