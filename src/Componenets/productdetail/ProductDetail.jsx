import React, { useState } from 'react'
import {
    useLocation,
    useNavigate
} from 'react-router-dom'

import './ProductDetail.css'


const ProductDetail = () => {

    const location = useLocation()

    const navigate = useNavigate()


    const product = location.state?.product


    const [quantity, setQuantity] = useState(1)

    const [selectedSize, setSelectedSize] =
        useState("Large")

    const [selectedColor, setSelectedColor] =
        useState("White")


    // =========================
    // PRODUCT NOT FOUND
    // =========================

    if (!product) {

        return (

            <div className="product_not_found">

                <h2>
                    Product not found
                </h2>

                <button
                    onClick={() =>
                        navigate('/shop')
                    }
                >
                    Go Back
                </button>

            </div>

        )

    }


    // =========================
    // ADD TO CART
    // =========================

    const addToCart = () => {

        const existingCart =
            JSON.parse(
                localStorage.getItem('cart')
            ) || []


        const existingProduct =
            existingCart.find(
                item =>
                    item.name === product.name
            )


        let updatedCart


        if (existingProduct) {

            updatedCart =
                existingCart.map(item =>

                    item.name === product.name
                        ? {
                            ...item,
                            quantity:
                                item.quantity +
                                quantity,
                            size:
                                selectedSize,
                            color:
                                selectedColor
                        }
                        : item

                )

        } else {

            updatedCart = [

                ...existingCart,

                {
                    ...product,
                    quantity: quantity,
                    size: selectedSize,
                    color: selectedColor
                }

            ]

        }


        localStorage.setItem(
            'cart',
            JSON.stringify(updatedCart)
        )


        // Header ko update karne ke liye

        window.dispatchEvent(
            new Event('cartUpdated')
        )


        // Cart page open

        navigate('/cart')

    }


    // =========================
    // QUANTITY
    // =========================

    const decreaseQuantity = () => {

        if (quantity > 1) {

            setQuantity(quantity - 1)

        }

    }


    const increaseQuantity = () => {

        setQuantity(quantity + 1)

    }


    return (

        <div className="detail_page">


            {/* ================= BREADCRUMB ================= */}

            <div className="breadcrumb">

                <span
                    onClick={() =>
                        navigate('/')
                    }
                    style={{ cursor: 'pointer' }}
                >
                    Home
                </span>

                <span>›</span>


                <span
                    onClick={() =>
                        navigate('/shop')
                    }
                    style={{ cursor: 'pointer' }}
                >
                    Shop
                </span>

                <span>›</span>

                <span>
                    Men
                </span>

                <span>›</span>

                <span>
                    T-Shirts
                </span>

            </div>


            {/* ================= PRODUCT DETAIL ================= */}

            <div className="product_detail">


                {/* LEFT */}

                <div className="detail_left">


                    <div className="detail_thumbnails">


                        <div className="thumbnail active">

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                        </div>


                        <div className="thumbnail">

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                        </div>


                        <div className="thumbnail">

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                        </div>


                    </div>


                    <div className="main_product_image">

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                    </div>

                </div>


                {/* RIGHT */}

                <div className="detail_right">


                    <h1>
                        {product.name}
                    </h1>


                    {/* RATING */}

                    <div className="detail_rating">

                        <span className="stars">
                            ★★★★★
                        </span>

                        <span className="rating_number">
                            {product.rating || "4.5/5"}
                        </span>

                    </div>


                    {/* PRICE */}

                    <div className="detail_price">

                        <span className="current_price">
                            {product.price}
                        </span>


                        {product.cut_price && (

                            <span className="old_price">
                                {product.cut_price}
                            </span>

                        )}


                        {product.discount && (

                            <span className="detail_discount">
                                {product.discount}
                            </span>

                        )}

                    </div>


                    {/* DESCRIPTION */}

                    <p className="detail_description">

                        This graphic t-shirt is perfect
                        for any occasion. Crafted from
                        a soft and breathable fabric,
                        it offers superior comfort
                        and style.

                    </p>


                    <hr />


                    {/* COLORS */}

                    <div className="detail_option">

                        <p>
                            Select Colors
                        </p>


                        <div className="color_list">

                            <span
                                className="color color_1"
                                onClick={() =>
                                    setSelectedColor("Green")
                                }
                            ></span>

                            <span
                                className="color color_2"
                                onClick={() =>
                                    setSelectedColor("Red")
                                }
                            ></span>

                            <span
                                className="color color_3"
                                onClick={() =>
                                    setSelectedColor("Blue")
                                }
                            ></span>

                        </div>

                    </div>


                    <hr />


                    {/* SIZE */}

                    <div className="detail_option">

                        <p>
                            Choose Size
                        </p>


                        <div className="size_list">


                            <button
                                className={
                                    selectedSize === "Small"
                                        ? "selected_size"
                                        : ""
                                }
                                onClick={() =>
                                    setSelectedSize("Small")
                                }
                            >
                                Small
                            </button>


                            <button
                                className={
                                    selectedSize === "Medium"
                                        ? "selected_size"
                                        : ""
                                }
                                onClick={() =>
                                    setSelectedSize("Medium")
                                }
                            >
                                Medium
                            </button>


                            <button
                                className={
                                    selectedSize === "Large"
                                        ? "selected_size"
                                        : ""
                                }
                                onClick={() =>
                                    setSelectedSize("Large")
                                }
                            >
                                Large
                            </button>


                            <button
                                className={
                                    selectedSize === "X-Large"
                                        ? "selected_size"
                                        : ""
                                }
                                onClick={() =>
                                    setSelectedSize("X-Large")
                                }
                            >
                                X-Large
                            </button>


                        </div>

                    </div>


                    <hr />


                    {/* QUANTITY + ADD TO CART */}

                    <div className="cart_section">


                        <div className="quantity">


                            <button
                                onClick={
                                    decreaseQuantity
                                }
                            >
                                −
                            </button>


                            <span>
                                {quantity}
                            </span>


                            <button
                                onClick={
                                    increaseQuantity
                                }
                            >
                                +
                            </button>


                        </div>


                        <button
                            className="add_to_cart"
                            onClick={addToCart}
                        >
                            Add to Cart
                        </button>


                    </div>


                </div>

            </div>

        </div>

    )

}

export default ProductDetail