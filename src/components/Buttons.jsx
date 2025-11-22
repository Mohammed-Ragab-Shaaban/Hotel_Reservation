import React from 'react'

export function BookNowButton(props) {
  return (
    <div className={` hidden md:${props.d_block} `}>
      <button>Book Now</button>
    </div>
  )
}
