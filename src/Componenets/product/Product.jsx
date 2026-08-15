import React, { useState } from 'react'
import './Product.css'
import Heading from '../heading/Heading'
import P_1 from './images/P_1.png'
import P_2 from './images/P_2.png'
import P_3 from './images/P_3.png'
import P_4 from './images/P_4.png'
import star from './images/star.png'

const Product = () => {

    const [showMore, setShowMore] = useState(false)

    const Product_list = [
        {
            image: P_1,
            name: "T-SHIRT WITH TAPE DETAILS",
            rating: "4.5/5",
            price: "$120",
            cut_price: "",
            discount: ""
        },
        {
            image: P_2,
            name: "SKINNY FIT JEANS",
            rating: "3.5/5",
            price: "$240",
            cut_price: "$260",
            discount: "-20%"
        },
        {
            image: P_3,
            name: "CHECKERED SHIRT",
            rating: "4.5/5",
            price: "$180",
            cut_price: "",
            discount: ""
        },
        {
            image: P_4,
            name: "SLEEVE STRIPED T-SHIRT",
            rating: "4.5/5",
            price: "$130",
            cut_price: "$160",
            discount: "-30%"
        },
        {
            image: P_1,
            name: "VERTICAL STRIPED SHIRT",
            rating: "4.0/5",
            price: "$212",
            cut_price: "",
            discount: ""
        },
        {
            image: P_2,
            name: "COURAGE GRAPHIC T-SHIRT",
            rating: "4.5/5",
            price: "$145",
            cut_price: "",
            discount: ""
        },
        {
            image: P_3,
            name: "LOOSE FIT BERMUDA SHORTS",
            rating: "3.5/5",
            price: "$80",
            cut_price: "$100",
            discount: "-20%"
        },
        {
            image: P_4,
            name: "FADED SKINNY JEANS",
            rating: "4.5/5",
            price: "$210",
            cut_price: "",
            discount: ""
        }
    ]

    return (
        <div>
            <div className='h1'>
            <Heading heading='NEW ARRIVALS'/>
            </div>
            <div className="product_container">

                {Product_list
                    .slice(0, showMore ? 8 : 4)
                    .map((product, index) => (

                        <div className="product_card" key={index}>

                            <img
                                src={product.image}
                                alt={product.name}
                                className="products"
                            />

                            <p className="product_p">
                                {product.name}
                            </p>

                            <div className="comment">

                                <img
                                    src={star}
                                    alt="star"
                                    className="star"
                                />

                                <p className="rating">
                                    {product.rating}
                                </p>

                            </div>

                            <div className="price">

                                <p>
                                    {product.price}
                                </p>

                                <p className="cut_price">
                                    {product.cut_price}
                                </p>

                                <p className="discount">
                                    {product.discount}
                                </p>

                            </div>

                        </div>

                    ))}

            </div>

            <div className="product_button">

                <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? "View Less" : "View More"}
                </button>

            </div>
            <div className='hr'></div>
        </div>
    )
}

export default Product