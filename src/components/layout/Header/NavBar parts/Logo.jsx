import React from 'react'
import logo from '../../../../assets/images/HotelLogo.png'



export default function Logo(props) {
  return (
    
<div>
    <img src={logo} alt='hotel resevation logo' width={props.width} className={`${props.d_hidden_block} md:block m-auto`}/>
</div>
    
  )
}