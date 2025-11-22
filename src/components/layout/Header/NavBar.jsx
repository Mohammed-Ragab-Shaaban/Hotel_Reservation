import React from 'react'
import MenuWithLogo from './NavBar parts/MenuWithLogo'
import Logo from './NavBar parts/Logo'
import { BookNowButton } from '../../Buttons'
import SideBarIcon from './NavBar parts/SideBarIcon'
import SideBar from './NavBar parts/SideBar'
import ContactBar from './ContactBar'


export default function NavBar() {
  return (
    <div className='relative'>
      <ContactBar />
      <div className='flex justify-between md:justify-center md:gap-6 items-center'>
      <div className='md:hidden'> <Logo width="30%" />  </div>
        <MenuWithLogo d_hidden_block = "hidden" />
        {/* <BookNowButton d_block="block" /> */}
        <SideBarIcon />
      </div>
      <SideBar />
    </div>
  )
}








