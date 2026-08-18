import React, { useState } from 'react'
import './Filter.css'

const Filter = ({ onFilter }) => {

    const [selectedSize, setSelectedSize] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")


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


    const categories = [
        "T-shirts",
        "Shorts",
        "Shirts",
        "Hoodie",
        "Jeans"
    ]


    // =========================
    // APPLY FILTER
    // =========================

    const applyFilter = () => {

        onFilter({

            size: selectedSize,
            color: selectedColor,
            category: selectedCategory,
            maxPrice: 200

        })

    }


    return (

        <aside className="filter">

            {/* HEADER */}

            <div className="filter_header">

                <h3>Filters</h3>

                <span>☷</span>

            </div>


            {/* CATEGORIES */}

            <div className="filter_categories">

                {categories.map(category => (

                    <p
                        key={category}
                        className={
                            selectedCategory === category
                                ? "category_active"
                                : ""
                        }
                        onClick={() => {

                            if (
                                selectedCategory === category
                            ) {
                                setSelectedCategory("")
                            } else {
                                setSelectedCategory(category)
                            }

                        }}
                    >

                        {category}

                        <span>›</span>

                    </p>

                ))}

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

                    {colors.map(color => (

                        <span
                            key={color}
                            className={`
                                filter_color
                                ${color}
                                ${
                                    selectedColor === color
                                        ? "active_color"
                                        : ""
                                }
                            `}
                            onClick={() => {

                                if (
                                    selectedColor === color
                                ) {
                                    setSelectedColor("")
                                } else {
                                    setSelectedColor(color)
                                }

                            }}
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

                    {sizes.map(size => (

                        <button
                            key={size}
                            className={
                                selectedSize === size
                                    ? "selected_filter_size"
                                    : ""
                            }
                            onClick={() => {

                                if (
                                    selectedSize === size
                                ) {
                                    setSelectedSize("")
                                } else {
                                    setSelectedSize(size)
                                }

                            }}
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


            {/* APPLY */}

            <button
                className="apply_filter"
                onClick={applyFilter}
            >
                Apply Filter
            </button>

        </aside>
    )
}

export default Filter