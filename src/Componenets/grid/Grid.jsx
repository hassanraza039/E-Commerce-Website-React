import React from 'react'
import './Grid.css'

import G_1 from './images/G_1.png'
import G_2 from './images/G_2.png'
import G_3 from './images/G_3.png'
import G_4 from './images/G_4.png'

const Grid = () => {
    return (
        <div className='grid_container'>

            <h1 className='grid_h1'>
                BROWSE BY DRESS STYLE
            </h1>

            <section className='grid_section'>

    <div className='grid_card'>
        <img src={G_1} alt="Casual" className='grid_img img1' />
    </div>

    <div className='grid_card'>
        <img src={G_2} alt="Formal" className='grid_img img2' />
    </div>

    <div className='grid_card'>
        <img src={G_3} alt="Party" className='grid_img img2' />
    </div>

    <div className='grid_card'>
        <img src={G_4} alt="Gym" className='grid_img img1' />
    </div>

</section>

        </div>
    )
}

export default Grid