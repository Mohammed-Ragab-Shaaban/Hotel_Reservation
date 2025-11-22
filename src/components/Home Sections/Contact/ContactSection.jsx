import React from 'react'
import Contact from './Contact'
import Inquery from './Inquery'
import bg_Contact_Image from '../../../assets/images/contact_bg.png'

export default function ContactSection() {

    const bg_Contact = {
        backgroundImage: `url(${bg_Contact_Image})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
    }

  return (
    <div style={bg_Contact} className='py-8'>
        <div className='manualContainer flex flex-col sm:flex-row *:grow sm:*:w-1/2'>
            <Contact />
            <Inquery />
        </div>
    </div>
  )
}
