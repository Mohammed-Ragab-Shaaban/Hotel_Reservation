import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useState } from 'react'



gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CheckAvailability() {

    useGSAP(()=>{
        let mm = gsap.matchMedia();
        mm.add({
            isMobile:"(max-width: 640px)",
            isTablet:"(max-width: 768px)",
            isDesktop:"(max-width: 1536px)",
        },(context)=>{
            let {isMobile , isTablet , isDesktop } = context.conditions;

            if(isDesktop){
                gsap.from(".check",
                    { 
                        scrollTrigger:{
                        trigger:".check",
                        // toggleActions: "restart pause reverse none",
                        start: "top 80%",
                        end:"+=100",
                        // markers:true,
                         scrub: true,
                        },
                        x : 5000,
                       autoAlpha:0,
                        
                    }
                        );  
                       }
                       /////
             if(isTablet){
                gsap.from(".check",
                    { 
                        scrollTrigger:{
                        trigger:".check",
                        // toggleActions: "restart pause reverse none",
                        start: "top 80%",
                        end:"+=100",
                        // markers:true,
                         scrub: true,
                        },
                        x : 5000,
                       autoAlpha:0,
                        
                    }
                        );  
                       }
                       /////
             if(isMobile){
                gsap.from(".check",
                    { 
                        scrollTrigger:{
                        trigger:".check",
                        // toggleActions: "restart pause reverse none",
                        start: "top 50%",
                        end:"+=100",
                        // markers:true,
                         scrub: true,
                        },
                        x : 5000,
                       autoAlpha:0,
                        
                    }
                        );  
                       }
                       /////
        }
    )
                    
    },{})

    const [guest , setguests] = useState(false);
    const handleSubmit = (event)=>{
        event.preventDefault();
    }

  return (
    <div className='check bg-black absolute right-0 left-0 -top-15 z-30 sm:-top-1/4 w-10/12 m-auto py-3 rounded'>
      <div className='manualContainer '>
        <form action="" onSubmit={handleSubmit}>
            <div className='py-5 text-white gap-2 flex flex-col sm:flex-row items-center justify-center *:self-stretch *:grow'>
               
               {/* Check-in */}
                <div className='flex flex-col *:p-2'>
                    <label htmlFor="Checkin" >Check-in</label>
                    <input type="date" 
                           id='Checkin' 
                           placeholder='Choose a date' 
                           className='rounded text-black'/>
                </div>
               
               {/* Check-out */}
                 <div className='flex flex-col *:p-2'>
                    <label htmlFor="Checkout" >Check-out</label>
                    <input type="date" 
                           id='Checkout' 
                           placeholder='Choose a date' 
                           className='rounded text-black'/>
                </div>

                {/* Rooms */}
                 <div className='flex flex-col *:p-2'>
                    <label htmlFor="Checkout" >Rooms</label>
                    <select name="rooms" id="rooms" className='rounded text-black'>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">+5</option>
                    </select>
                </div>

            {/* // Guests */}
                <div className='flex flex-col *:p-2 relative'>
                    <label htmlFor="guests" >Guests</label>
                    <button onClick={()=>{setguests(!guest)}}>1 Adult</button>
                    <div className={`absolute ${guest ? "opacity-100" : "opacity-0"} transition-all duration-500 bg-black z-30 left-0 right-0 top-full min-w-52`}>
                        <ul className=' p-2'>
                            <li className='*:block *:mb-2 *:w-full border-b-main-color'>
                                <label htmlFor="Adults">Adults</label>
                                <select name="Adults" id="Adults" className='text-black rounded p-2'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="+5">+5</option>
                                </select>
                            </li>
                            <li className='*:block *:mb-2 *:w-full border-b-main-color'>
                                <label htmlFor="Adults">Children (2–12 years old)</label>
                                <select name="Adults" id="Adults" className='text-black rounded p-2'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="+5">+5</option>
                                </select>
                            </li>
                            <li className='*:block *:mb-2 *:w-full border-b-main-color'>
                                <label htmlFor="Adults">Infants (0–2 years old)</label>
                                <select name="Adults" id="Adults" className='text-black rounded p-2'>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                 
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Check Availability */}
                <div className='m-auto'>
                    <button type='submit' className='bg-main-color rounded-full w-28 h-28 m-auto block text-center'>Check <br /> Availability</button>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}







