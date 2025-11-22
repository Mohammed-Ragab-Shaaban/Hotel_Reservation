import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIcon } from '../../../../store/slices/sideBarIconSlice';

export default function SideBarIcon() {


  const value = useSelector((state)=> state.sideBarIcon.value)
  const dispatch = useDispatch();
  console.log(value);

  return (
          <div className='md:hidden text-white text-3xl min-w-14'>
            <span 
              className='hover:text-main-color transition-all duration-500'
              onClick={()=>{dispatch(changeIcon())}}
            >
                 {value ? <FontAwesomeIcon icon={faBars}/> :  <FontAwesomeIcon icon={faXmark}/>}
            </span>
          </div>
  )
}



