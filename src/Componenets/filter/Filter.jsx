import React, { useState } from 'react'
import './Filter.css'

const Filter = () => {

    const [selectedSize, setSelectedSize] = useState("Large")
    const [selectedColor, setSelectedColor] = useState("green")

    const colors = [
        "green",
        "red",
        "yellow",
        "orange",
        "blue",
        "darkblue",
        "purple",
        "pink",
        "white",
        "black"
    ]

    const sizes = [
        "XX-Small",
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large",
        "3X-Large",
        "4X-Large"
    ]

    return (
        <aside className="filter">

            {/* FILTER HEADER */}

            <div className="filter_header">

                <h3>Filters</h3>

                <span>☷</span>

            </div>


            {/* CATEGORIES */}

            <div className="filter_categories">

                <p>
                    T-shirts
                    <span>›</span>
                </p>

                <p>
                    Shorts
                    <span>›</span>
                </p>

                <p>
                    Shirts
                    <span>›</span>
                </p>

                <p>
                    Hoodie
                    <span>›</span>
                </p>

                <p>
                    Jeans
                    <span>›</span>
                </p>

            </div>


            <hr />


            {/* PRICE */}

            <div className="filter_section">

                <div className="filter_title">

                    <h4>Price</h4>

                    <span>⌃</span>

                </div>


                <div className="price_slider">

                    <div className="price_line"></div>

                    <span className="price_dot left"></span>

                    <span className="price_dot right"></span>

                </div>


                <div className="price_values">

                    <span>$50</span>

                    <span>$200</span>

                </div>

            </div>


            <hr />


            {/* COLORS */}

            <div className="filter_section">

                <div className="filter_title">

                    <h4>Colors</h4>

                    <span>⌃</span>

                </div>


                <div className="colors">

                    {colors.map((color) => (

                        <span
                            key={color}
                            className={`filter_color ${color} ${
                                selectedColor === color
                                    ? "active_color"
                                    : ""
                            }`}
                            onClick={() =>
                                setSelectedColor(color)
                            }
                        ></span>

                    ))}

                </div>

            </div>


            <hr />


            {/* SIZE */}

            <div className="filter_section">

                <div className="filter_title">

                    <h4>Size</h4>

                    <span>⌃</span>

                </div>


                <div className="sizes">

                    {sizes.map((size) => (

                        <button
                            key={size}
                            className={
                                selectedSize === size
                                    ? "selected_filter_size"
                                    : ""
                            }
                            onClick={() =>
                                setSelectedSize(size)
                            }
                        >
                            {size}
                        </button>

                    ))}

                </div>

            </div>


            <hr />


            {/* DRESS STYLE */}

            <div className="filter_section">

                <div className="filter_title">

                    <h4>Dress Style</h4>

                    <span>⌃</span>

                </div>


                <div className="dress_style">

                    <p>
                        Casual
                        <span>›</span>
                    </p>

                    <p>
                        Formal
                        <span>›</span>
                    </p>

                    <p>
                        Party
                        <span>›</span>
                    </p>

                    <p>
                        Gym
                        <span>›</span>
                    </p>

                </div>

            </div>


            {/* APPLY FILTER */}

            <button className="apply_filter">

                Apply Filter

            </button>

        </aside>
    )
}

export default Filter