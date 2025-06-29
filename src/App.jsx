import React from 'react'
import Nav from './section/Nav'
import Hero from './section/Hero'
import Problem from './section/Problem'
import Solution from './section/Solution'
import Stats from './section/Stats'
import Team from './section/Team'
import Vision from './section/Vision'
import Cta from './section/Cta'
import Footer from './section/Footer'

const App = () => {
  return (
    <section className='overflow-hidden max-w-[1000px] flex flex-col mx-auto relative'>
        <Nav />
        <Hero />
        <Problem />
        <Solution />
        <Stats />
        <Team />
        <Vision />
        <Cta />
        <Footer />
    </section>
  )
}

export default App