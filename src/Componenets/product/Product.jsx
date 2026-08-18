import React, { useState } from 'react'
import './product.css'
import Heading from '../heading/Heading'
import { useNavigate } from 'react-router-dom'

import star from './images/star.png'
import Product_list from './productData'

const Product = ({ products, heading = "NEW ARRIVALS" }) => {

    const [showMore, setShowMore] = useState(false)

    const finalProducts = products || Product_list

    const navigate = useNavigate()

    return (
        <div>

            <div className="h1">
                <Heading heading={heading} />
            </div>

            <div className="product_container">

                {finalProducts
                    .slice(0, showMore ? finalProducts.length : 4)
                    .map((product, index) => (

                        <div
                            className="product_card"
                            key={index}
                            onClick={() =>
                                navigate('/shop', {
                                    state: { product }
                                })
                            }
                        >

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

                                {product.cut_price && (
                                    <p className="cut_price">
                                        {product.cut_price}
                                    </p>
                                )}

                                {product.discount && (
                                    <p className="discount">
                                        {product.discount}
                                    </p>
                                )}

                            </div>

                        </div>

                    ))}

            </div>

            {finalProducts.length > 4 && (

                <div className="product_button">

                    <button
                        onClick={() =>
                            setShowMore(!showMore)
                        }
                    >
                        {showMore ? "View Less" : "View More"}
                    </button>

                </div>

            )}

            <div className="hr"></div>

        </div>
    )
}

export default Product