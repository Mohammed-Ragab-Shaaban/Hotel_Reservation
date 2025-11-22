import React from 'react'
import bg_contact_us from '../../assets/images/bg_contact_us.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'


export default function ContactUs() {

 const style_contact_us = {
        backgroundImage : `url(${bg_contact_us})` ,
        // backgroundColor : "yellow",
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    useGSAP(()=>{
        gsap.from(".contact_us_top",{
            scrollTrigger:{
                trigger:".contact_us_top",
                start:"top 90%",
                end:"+=50",
                scrub:true
            },
            scaleY:0,           
            transformOrigin:"bottom center",
            autoAlpha:0,
        });
       gsap.from(".contact_us_bottom",{
            scrollTrigger:{
                trigger:".contact_us_bottom",
                start:"top 90%",
                end:"+=50",
                scrub:true
            },
            // delay:.5,
            scaleY:0,
            transformOrigin:"top center",
            autoAlpha:0,
        });

          gsap.from(".contact_us",{
            scrollTrigger:{
                trigger:".contact_us",
                start:"top 90%",
                end:"+=50",
                scrub:true
            },
            // delay:.5,
            scale:0,
            // transformOrigin:"top center",
            autoAlpha:0,
        })

    },[])

  return (
    <div style={style_contact_us} className='py-8 font-semibold'>
        <div className='manualContainer flex flex-col sm:flex-row *:grow gap-3 sm:*:w-1/2'>
            <div className='flex justify-center items-center'><h1 className='headingFont text-4xl'>LET’S START YOUR JOURENY WITH STAYEASE</h1></div>
            <div className='flex gap-3'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='contact_us_top flex gap-2 text-2xl border-b *:py-3'>
                        <span><FontAwesomeIcon icon={faMobileScreen} /></span>
                        <p><Link>+1 502 6251 7802</Link></p>
                    </div>

                     <div className='contact_us_bottom flex gap-2 text-2xl *:py-3'>
                        <span><FontAwesomeIcon icon={faEnvelopeOpen} /></span>
                        <p><Link>+1 502 6251 7802</Link></p>
                    </div>

                </div>
                 <div className='m-auto'>
                    <button type='submit' className='contact_us bg-black rounded-full w-32 h-32 m-auto block text-center text-white'>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}
