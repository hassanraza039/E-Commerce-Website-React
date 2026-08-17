import React, { useState } from 'react'
import './Casual.css'
import Product_list from '../product/productData'

const Casual = () => {

    const [currentPage, setCurrentPage] = useState(1)

    // Har page par 6 products
    const productsPerPage = 9

    // Casual category ke products
    const casualProducts = Product_list.filter(
        product =>
            product.category === "T-shirts" ||
            product.category === "Shirts" ||
            product.category === "Jeans" ||
            product.category === "Shorts"
    )

    // Total pages
    const totalPages = Math.ceil(
        casualProducts.length / productsPerPage
    )

    // Current page ke products
    const startIndex =
        (currentPage - 1) * productsPerPage

    const currentProducts = casualProducts.slice(
        startIndex,
        startIndex + productsPerPage
    )

    // Page click
    const handlePageChange = (page) => {

        setCurrentPage(page)

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    // Previous
    const handlePrevious = () => {

        if (currentPage > 1) {
            handlePageChange(currentPage - 1)
        }
    }

    // Next
    const handleNext = () => {

        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1)
        }
    }

    return (

        <main className="casual_products">

            {/* TOP */}

            <div className="casual_top">

                <h1>Casual</h1>

                <div className="casual_sort">

                    <span>
                        Showing {startIndex + 1}-
                        {Math.min(
                            startIndex + productsPerPage,
                            casualProducts.length
                        )}
                        {' '}of {casualProducts.length} Products
                    </span>

                    <span>
                        Sort by:
                        <b> Most Popular⌄</b>
                    </span>

                </div>

            </div>


            {/* PRODUCTS */}

            <div className="casual_grid">

                {currentProducts.map((product, index) => (

                    <div
                        className="casual_card"
                        key={index}
                    >

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                        <h3>
                            {product.name}
                        </h3>

                        <div className="casual_rating">

                            <span>
                                ★★★★★
                            </span>

                            <small>
                                {product.rating}
                            </small>

                        </div>

                        <div className="casual_price">

                            <b>
                                {product.price}
                            </b>

                            {product.cut_price && (
                                <del>
                                    {product.cut_price}
                                </del>
                            )}

                            {product.discount && (
                                <span>
                                    {product.discount}
                                </span>
                            )}

                        </div>

                    </div>

                ))}

            </div>


            {/* PAGINATION */}

            <div className="pagination">

                {/* PREVIOUS */}

                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    ← Previous
                </button>


                {/* PAGE NUMBERS */}

                <div className="page_numbers">

                    {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1
                    ).map((page) => (

                        <span
                            key={page}
                            className={
                                currentPage === page
                                    ? "active_page"
                                    : ""
                            }
                            onClick={() =>
                                handlePageChange(page)
                            }
                        >
                            {page}
                        </span>

                    ))}

                </div>


                {/* NEXT */}

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    Next →
                </button>

            </div>

        </main>
    )
}

export default Casual