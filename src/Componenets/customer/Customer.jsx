import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import './Customer.css'

const Customer = () => {

    const customers = [
        {
            name: "Sarah M.",
            comment: "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        },
        {
            name: "Alex K.",
            comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
        },
        {
            name: "James L.",
            comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends."
        },
        {
            name: "Moosa H.",
            comment: "The quality of the products is amazing. Everything I ordered arrived exactly as expected and the style is excellent."
        },
        {
            name: "Ayesha K.",
            comment: "I really enjoyed shopping here. The products look great and the overall shopping experience was very smooth."
        }
    ]

    return (
        <div className="customer_container">

            <div className="customer_header">

                <h1 className='customer_h1'>
                    OUR HAPPY CUSTOMERS
                </h1>

                <div className="customer_arrows">

                    <button className="customer_prev">
                        ←
                    </button>

                    <button className="customer_next">
                        →
                    </button>

                </div>

            </div>


            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.customer_prev',
                    nextEl: '.customer_next'
                }}
                spaceBetween={12}
                slidesPerView={3}
                className="customer_slider"
            >

                {customers.map((customer, index) => (

                    <SwiperSlide key={index}>

                        <div className="customer_card">

                            <div className="customer_stars">
                                ★ ★ ★ ★ ★
                            </div>

                            <div className="customer_name">
                                {customer.name}

                                <span className="verified">
                                    ✓
                                </span>
                            </div>

                            <p>
                                "{customer.comment}"
                            </p>

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </div>
    )
}

export default Customer