import { faInstagram, faLinkedin, faSquareFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactBar() {
  return (
    <div className='hidden md:block'>
        <div className='manualContainer flex justify-between py-3 text-white'>
            <div className='*:hover:cursor-pointer *:hover:text-main-color *:transition-all *:duration-500 *:mr-1'>
                <span><FontAwesomeIcon icon={faPhoneVolume}/></span> <span>Call us: 011 478 51 251</span> 
            </div>
            <div className='*:hover:cursor-pointer  flex gap-2'>
              <div className=' hover:text-main-color transition-all duration-500'><FontAwesomeIcon icon={faSquareFacebook}/></div>  
              <div className=' hover:text-main-color transition-all duration-500'><FontAwesomeIcon icon={faInstagram} /></div>  
              <div className=' hover:text-main-color transition-all duration-500'><FontAwesomeIcon icon={faLinkedin} /></div>  
              <div className=' hover:text-main-color transition-all duration-500'><FontAwesomeIcon icon={faXTwitter} /></div>     
            </div>
            <div className='*:hover:cursor-pointer *:hover:text-main-color *:transition-all *:duration-500 *:mr-1'>
               <span><FontAwesomeIcon icon={faEnvelopeOpen}/></span>  <span>Mail us: alrayyany55@gmail.com</span> 

            </div>
        </div>

    </div>
  )
}
