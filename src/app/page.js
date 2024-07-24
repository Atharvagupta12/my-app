import Application from '@/components/Application'
import Details from '@/components/Details'
import Discuss from '@/components/Discuss'
import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Team from '@/components/Team'
import React from 'react'

function page() {
  return (
    <div className=' w-full min-h-screen bg-white text-black'>
      <div>
      <Navbar/>
      <Landing/>
      <Details/>
      <Projects/>
      <Discuss/>
      <Application/>
      <Team/>
      </div>
    </div>
  )
}

export default page
