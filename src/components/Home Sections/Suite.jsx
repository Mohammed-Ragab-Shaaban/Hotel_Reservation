import React, { useRef } from 'react'
import bg_Suite from '../../assets/images/bg-Suite.png'
import suite1 from '../../assets/images/Suite1.png'
import suite2 from '../../assets/images/Suite2.png'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap, { SplitText } from 'gsap/all'


export function Suite() {

 const styleSuite = {
        backgroundImage : `url(${bg_Suite})` ,
        // backgroundColor : "yellow",
        // height: "300px",
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:"auto",
    }

  const textEffectRef = useRef(null);
  
  useGSAP(()=>{
    if(textEffectRef.current){
      let split = SplitText.create(textEffectRef.current,{type:"words,chars"});
      // let split = new SplitText(textEffectRef.current, { type: 'words,chars' });
        gsap.from(split.chars,{
        scrollTrigger:{
                        trigger:textEffectRef.current,
                        // toggleActions: "restart pause reverse none",
                        start: "top 80%",
                        end:"+=300",
                        // markers:true,
                         scrub: true,
                        },
                        x : 5,
                        autoAlpha:.1,
                        stagger:.05,
                        });
        return ()=> split.revert();
    }
  },[])

  return (
    <div style={styleSuite}>
        <div className='manualContainer py-14'>
             <div className='text-center text-white p-10 text-6xl'>
                <h1 className='headingFont textEffect' ref={textEffectRef}> The Skyline Suite <br /> For Your Need </h1>
            </div>
            <div className='flex flex-col sm:flex-row gap-3 rounded *:grow'>
                <SingleSuite
                    bg_image={suite1} 
                    link_1="Exclusive Suite" 
                    prag_1="Pectore atque arcu at hic ducimus quos minim nisl in qui patria te hic castrorum"
                    link_2 ="See More" />
                <SingleSuite
                    bg_image={suite2} 
                    link_1="Luxury Suite" 
                    prag_1="Pectore atque arcu at hic ducimus quos minim nisl in qui patria te hic castrorum"
                    link_2 ="See More" />
            </div>
        </div>
    </div>
  )
}


export function SingleSuite(props) {
 return(
    <div   className='*:hover:scale-y-100 flex justify-center items-center text-white min-h-120 p-3 sm:w-1/2'
           style={{backgroundImage:`url(${props.bg_image})`, backgroundSize:"cover" , backgroundPosition:"center"}}>

        <div className='h scale-y-0 transition-all duration-500 origin-top  bg-opacity-70 bg-black text-center *:mb-3 p-3 flex flex-col justify-center items-center'>
            <Link className='text-main-color text-3xl'>{props.link_1}</Link>
            <p>{props.prag_1}</p>
            <Link className='text-main-color underline'>{props.link_2}</Link>
        </div>

    </div>
 )
}
