import React from 'react'
import Header from '../components/layout/Header/Header.jsx'
import Counter from '../components/Counter.jsx'
import CheckAvailability from '../components/Home Sections/CheckAvailability.jsx'
import {Features , SingleFeatures} from '../components/Home Sections/Features.jsx'
import {Services} from '../components/Home Sections/Services.jsx'
import {Suite} from '../components/Home Sections/Suite.jsx'
import {ComfortSwction} from '../components/Home Sections/ComfortSwction.jsx'
import ContactSection from '../components/Home Sections/Contact/ContactSection.jsx'
import ContactUs from '../components/Home Sections/ContactUs.jsx'

export default function Home() {
  return (
    <div className='overflow-hidden'>
        <Header />
        <div className=' hhhhh'></div>
        {/* <Counter /> */}
        <div className='relative'>
          <CheckAvailability />
          <Features />
        </div>
        <Services />
        <Suite />
        <ComfortSwction />
        <ContactSection />
        <ContactUs />
        
    </div>
  )
}
