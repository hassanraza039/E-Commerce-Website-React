import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../Componenets/navbar/Navbar'
import Footer from '../../Componenets/footer/Footer'
import './Cart.css'

const Cart = () => {

    const [cartItems, setCartItems] = useState([])

    // Load cart
    useEffect(() => {

        const savedCart =
            JSON.parse(localStorage.getItem('cart')) || []

        setCartItems(savedCart)

    }, [])


    // Save cart
    const saveCart = (items) => {

        setCartItems(items)

        localStorage.setItem(
            'cart',
            JSON.stringify(items)
        )
    }


    // Increase quantity
    const increaseQuantity = (index) => {

        const updatedCart = [...cartItems]

        updatedCart[index].quantity += 1

        saveCart(updatedCart)
    }


    // Decrease quantity
    const decreaseQuantity = (index) => {

        const updatedCart = [...cartItems]

        if (updatedCart[index].quantity > 1) {

            updatedCart[index].quantity -= 1

            saveCart(updatedCart)
        }
    }


    // Delete product
    const removeProduct = (index) => {

        const updatedCart =
            cartItems.filter((_, i) => i !== index)

        saveCart(updatedCart)
    }


    // Price convert
    const getPrice = (price) => {

        return Number(
            price.replace('$', '')
        )
    }


    // Subtotal
    const subtotal = cartItems.reduce(
        (total, product) =>
            total +
            getPrice(product.price) *
            product.quantity,
        0
    )


    // Discount 20%
    const discount = subtotal * 0.20

    // Delivery
    const deliveryFee =
        cartItems.length > 0 ? 15 : 0

    // Total
    const total =
        subtotal - discount + deliveryFee


    return (

        <div className="cart_page">

            <Navbar />


            {/* CART CONTENT */}

            <div className="cart_container">


                {/* BREADCRUMB */}

                <div className="cart_breadcrumb">

                    <Link to="/">
                        Home
                    </Link>

                    <b>›</b>

                    <span>
                        Cart
                    </span>

                </div>


                {/* TITLE */}

                <h1 className="cart_heading">
                    YOUR CART
                </h1>


                {/* CART AREA */}

                <div className="cart_content">


                    {/* LEFT SIDE */}

                    <div className="cart_products">


                        {cartItems.length === 0 ? (

                            <div className="empty_cart">

                                <h2>
                                    Your cart is empty
                                </h2>

                                <p>
                                    Add some products to your cart.
                                </p>

                            </div>

                        ) : (

                            cartItems.map((product, index) => (

                                <div
                                    className="cart_item"
                                    key={index}
                                >


                                    {/* IMAGE */}

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="cart_product_image"
                                    />


                                    {/* PRODUCT INFO */}

                                    <div className="cart_product_info">

                                        <h3>
                                            {product.name}
                                        </h3>

                                        <p>
                                            Size:
                                            <span>
                                                {product.size || "Large"}
                                            </span>
                                        </p>

                                        <p>
                                            Color:
                                            <span>
                                                {product.color || "White"}
                                            </span>
                                        </p>

                                        <strong>
                                            {product.price}
                                        </strong>

                                    </div>


                                    {/* DELETE */}

                                    <button
                                        className="delete_button"
                                        onClick={() =>
                                            removeProduct(index)
                                        }
                                    >
                                        🗑
                                    </button>


                                    {/* QUANTITY */}

                                    <div className="quantity">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(index)
                                            }
                                        >
                                            −
                                        </button>

                                        <span>
                                            {product.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(index)
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="order_summary">

                        <h2>
                            Order Summary
                        </h2>


                        <div className="summary_row">

                            <span>
                                Subtotal
                            </span>

                            <strong>
                                ${subtotal.toFixed(0)}
                            </strong>

                        </div>


                        <div className="summary_row">

                            <span>
                                Discount (-20%)
                            </span>

                            <strong className="discount_price">
                                -${discount.toFixed(0)}
                            </strong>

                        </div>


                        <div className="summary_row">

                            <span>
                                Delivery Fee
                            </span>

                            <strong>
                                ${deliveryFee}
                            </strong>

                        </div>


                        <hr />


                        <div className="total_row">

                            <span>
                                Total
                            </span>

                            <strong>
                                ${total.toFixed(0)}
                            </strong>

                        </div>


                        {/* PROMO */}

                        <div className="promo">

                            <div className="promo_input">

                                <span>
                                    ✉
                                </span>

                                <input
                                    type="text"
                                    placeholder="Add promo code"
                                />

                            </div>

                            <button>
                                Apply
                            </button>

                        </div>


                        {/* CHECKOUT */}

                        <button className="checkout_button">

                            Go to Checkout

                            <span>
                                →
                            </span>

                        </button>

                    </div>

                </div>

            </div>


            <Footer />

        </div>
    )
}

export default Cart