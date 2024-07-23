import Details from '@/components/Details'
import Landing from '@/components/Landing'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div className=' w-full min-h-screen bg-white text-black'>
      <div>
      <Navbar/>
      <Landing/>
      <Details/>
      </div>
    </div>
  )
}

export default page
