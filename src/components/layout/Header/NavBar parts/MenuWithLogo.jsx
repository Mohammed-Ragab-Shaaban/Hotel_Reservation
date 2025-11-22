import React from 'react'
import { Link } from 'react-router'
import Logo from './Logo'



export default function MenuWithLogo(props) {
  return (
    <div className={`${props.d_hidden_block} md:flex justify-center text-white`}>

        <ul className='uppercase flex flex-col md:flex-row md:gap-3  items-center
                       *:border-b md:*:border-none *:border-white *:w-11/12 text-center 
                       *:py-2 hover:*:bg-gray-800 md:hover:*:bg-transparent'>
            <li className='*:hover:text-main-color *:transition-all *:duration-500'><Link to={'#'}>Home</Link></li>
            <li className='*:hover:text-main-color *:transition-all *:duration-500'><Link to={'#'}>Rooms</Link></li>
            <li className='*:hover:text-main-color *:transition-all *:duration-500'><Link to={'#'}>Pages</Link></li>
            <li className='*:hover:text-main-color *:transition-all *:duration-500'><Link to={'#'}>Shops</Link></li>
        </ul>

        <div>
        <Logo width="30%" d_hidden_block = "hidden"/>
        </div>

          <ul className='uppercase flex flex-col md:flex-row md:gap-3 items-center
                         *:border-b md:*:border-none *:border-white *:w-11/12 text-center
                          *:py-2 last:*:border-none hover:*:bg-gray-800 md:hover:*:bg-transparent'>
            <li className='*:hover:text-main-color *:transition-all *:duration-500'><Link to={'#'}>Activities</Link></li>
            <li className='*:hover:text-main-color *:transition-all *:duration-500'><Link to={'#'}>Blogs</Link></li>
            <li className='*:hover:text-main-color *:transition-all *:duration-500'><Link to={'#'}>Landing</Link></li>
        </ul>

    </div>

  )
}
