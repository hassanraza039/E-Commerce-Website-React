import React from 'react'
import logo1 from './images/vector_1.png'
import logo2 from './images/vector_2.png'
import logo3 from './images/vector_3.png'
import logo4 from './images/vector_4.png'
import logo5 from './images/vector_5.png'

import './Logos.css'
const Logos = () => {
  return (
    <div className='logo_container'>
        <img src={logo1} alt="logo_img" className='logos'/>
        <img src={logo2} alt="logo_img" className='logos'/>
        <img src={logo3} alt="logo_img" className='logos'/>
        <img src={logo4} alt="logo_img" className='logos'/>
        <img src={logo5} alt="logo_img" className='logos'/>

    </div>
  )
}

export default Logos
