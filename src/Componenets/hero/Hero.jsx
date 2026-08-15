import React from 'react'
import './Hero.css'
import Button from '../button/Button'
import Stat from '../stat/Stat'
import hero from './images/hero.png'
import vector from './images/hero_vector.png'
const Hero = () => {
    return (
        <div className='hero_container'>
            <div className="combine_hero">
            <div className="first_hero">
                <h1 className='hero_h1'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='hero_p'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <Button title='Shop Now'/>
                <Stat/>
            </div>
            <div className="second_hero">
                <img src={hero} alt="hero_image" className='hero_img' />
                <img src={vector} alt="" className='vector_1'/>
                <img src={vector} alt="" className='vector_2'/>

            </div>
            </div>
        </div>
    )
}

export default Hero
