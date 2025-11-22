import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useGSAP } from '@gsap/react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all';

import React, { useState } from 'react'

export default function Inquery() {


    const [openItemID , setOpenItemID] = useState(null);

    const faqs=[
        { id: 1, itemStatus:false , title: 'How do I make a reservation?', content: 'You can make a reservation online through our website, via our mobile app, or by calling our reservation desk directly.' },
        { id: 2, itemStatus:false ,title: 'What are the check-in and check-out times?', content: 'Check-in is at 3:00 PM, and check-out is at 11:00 AM.' },
        { id: 3, itemStatus:false ,title: 'What is your cancellation policy?', content: 'Our standard policy allows free cancellation up to 48 hours before arrival.' },
        { id: 4, itemStatus:false ,title: 'Do you require a deposit at check-in?', content: 'Our standard policy allows free cancellation up to 48 hours before arrival.' },
        { id: 5, itemStatus:false , title: 'Can I request an extra bed or crib?', content: 'Our standard policy allows free cancellation up to 48 hours before arrival.' },
    ]

    const handleToggle = (itemId)=>{
        setOpenItemID( openItemID === itemId ? null : itemId );
    }

         useGSAP(()=>{
         gsap.from(".gsap_inquery",{
            scrollTrigger:{
                trigger:".gsap_inquery",
                start:"top 90%",
                end:"+=500",
                scrub:true,
                
            },
            x:200,           
            autoAlpha:0,
            stagger:.25,
           });
            },[]);


  return (
    <div className='py-8 overflow-hidden'>
        <h1 className='text-5xl headingFont uppercase'>Have to need an inquiry?</h1>
        <div>
            {
                faqs.map((el)=>{
                    return(
                        <div key={el.id} className='gsap_inquery my-3 py-3 border-b' onClick={()=> handleToggle(el.id)}>
                            <div className='flex justify-between *:py-2'>
                                <h3 className='text-2xl font-bold'>{el.title}</h3>
                                <span>{el.id === openItemID ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</span>
                            </div>
                            <p className={`${el.id === openItemID ? "max-h-96" : "max-h-0"} overflow-hidden transition-all duration-500 ease-in-out`}>{el.content}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}



