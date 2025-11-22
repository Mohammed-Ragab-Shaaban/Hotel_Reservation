import React from 'react'
import { useSelector } from 'react-redux'
import MenuWithLogo from './MenuWithLogo'

export default function SideBar() {

  const value = useSelector((state)=> state.sideBarIcon.value)


  return (
    <div 
        className={`bg-black ${value ? "max-h-0" : "max-h-screen" } 
                    transition-all duration-500 absolute right-0 left-0 top-fulls overflow-hidden z-10`}>
      <MenuWithLogo d_hidden_block = "block"/>
    </div>
  )
}
