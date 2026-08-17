import React from 'react'
import './ProductDetail.css'
const ProductDetail = ({ product }) => {

    if (!product) {
        return (
            <div className="product_not_found">
                <h2>Product not found</h2>
            </div>
        )
    }

    return (
        <div className="detail_page">

            {/* Breadcrumb */}

            <div className="breadcrumb">
                Home
                <span>›</span>
                Shop
                <span>›</span>
                Men
                <span>›</span>
                T-Shirts
            </div>


            {/* Product Detail */}

            <div className="product_detail">

                {/* Left Side */}

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


                {/* Right Side */}

                <div className="detail_right">

                    <h1>
                        {product.name}
                    </h1>


                    {/* Rating */}

                    <div className="detail_rating">

                        <span className="stars">
                            ★★★★★
                        </span>

                        <span className="rating_number">
                            {product.rating}
                        </span>

                    </div>


                    {/* Price */}

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


                    {/* Description */}

                    <p className="detail_description">
                        This graphic t-shirt is perfect for any occasion.
                        Crafted from a soft and breathable fabric, it offers
                        superior comfort and style.
                    </p>


                    <hr />


                    {/* Colors */}

                    <div className="detail_option">

                        <p>Select Colors</p>

                        <div className="color_list">

                            <span className="color color_1"></span>
                            <span className="color color_2"></span>
                            <span className="color color_3"></span>

                        </div>

                    </div>


                    <hr />


                    {/* Size */}

                    <div className="detail_option">

                        <p>Choose Size</p>

                        <div className="size_list">

                            <button>Small</button>
                            <button>Medium</button>
                            <button className="selected_size">
                                Large
                            </button>
                            <button>X-Large</button>

                        </div>

                    </div>


                    <hr />


                    {/* Quantity + Cart */}

                    <div className="cart_section">

                        <div className="quantity">

                            <button>−</button>

                            <span>1</span>

                            <button>+</button>

                        </div>


                        <button className="add_cart">
                            Add to Cart
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetail