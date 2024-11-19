import Navbar from '@/app/Components/Navbar'
import React from 'react'
import Banner from './Components/Banner'
import About from './Components/About'
import OurProduct from './Components/OurProduct'
import OurVideos from './Components/OurVideos'
import Testimonial from './Components/Testimonial'
import OurClients from './Components/Ourclients'
import Footer from './Components/Footer'

const page = () => {
  return (
    <div className='overflow-hiden' >
      <Navbar  />
      <Banner/>
      <About/>
      <OurProduct/>
      <OurVideos/>
      <Testimonial/>
      <OurClients/>
      <Footer/>
    </div>
  )
}

export default page