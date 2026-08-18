import React, { useState, useEffect } from 'react'
import './Casual.css'
import { useNavigate } from 'react-router-dom'
import Product_list from '../product/productData'

const Casual = ({ filters = {} }) => {

    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(1)

    const productsPerPage = 9


    // =========================
    // CASUAL PRODUCTS
    // =========================

    let casualProducts = Product_list.filter(product =>
        [
            "T-shirts",
            "Shirts",
            "Jeans",
            "Shorts",
            "Hoodie"
        ].includes(product.category)
    )


    // =========================
    // CATEGORY FILTER
    // =========================

    if (filters.category) {

        casualProducts = casualProducts.filter(product =>
            product.category?.toLowerCase() ===
            filters.category.toLowerCase()
        )

    }


    // =========================
    // COLOR FILTER
    // =========================

    if (filters.color) {

        casualProducts = casualProducts.filter(product =>
            product.color?.toLowerCase() ===
            filters.color.toLowerCase()
        )

    }


    // =========================
    // SIZE FILTER
    // =========================

    if (filters.size) {

        casualProducts = casualProducts.filter(product =>
            product.size?.toLowerCase() ===
            filters.size.toLowerCase()
        )

    }


    // =========================
    // PRICE FILTER
    // =========================

    if (filters.maxPrice) {

        casualProducts = casualProducts.filter(product => {

            const price = Number(
                String(product.price)
                    .replace('$', '')
                    .replace(',', '')
            )

            return price <= filters.maxPrice

        })

    }


    // =========================
    // PAGINATION
    // =========================

    const totalPages = Math.ceil(
        casualProducts.length / productsPerPage
    )

    const startIndex =
        (currentPage - 1) * productsPerPage

    const currentProducts =
        casualProducts.slice(
            startIndex,
            startIndex + productsPerPage
        )


    // =========================
    // FILTER CHANGE
    // =========================

    useEffect(() => {

        setCurrentPage(1)

    }, [
        filters.category,
        filters.color,
        filters.size,
        filters.maxPrice
    ])


    // =========================
    // PAGE CHANGE
    // =========================

    const handlePageChange = (page) => {

        setCurrentPage(page)

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }


    // =========================
    // OPEN PRODUCT DETAIL
    // =========================

    const openProduct = (product) => {

        navigate('/product-detail', {
            state: {
                product: product
            }
        })

    }


    return (

        <main className="casual_products">


            {/* ================= TOP ================= */}

            <div className="casual_top">

                <h1>
                    Casual
                </h1>


                <div className="casual_sort">

                    <span>

                        Showing{" "}

                        {casualProducts.length === 0
                            ? 0
                            : startIndex + 1
                        }

                        -

                        {Math.min(
                            startIndex + productsPerPage,
                            casualProducts.length
                        )}

                        {" "}of{" "}

                        {casualProducts.length}

                        {" "}Products

                    </span>


                    <span>

                        Sort by:

                        <b>
                            {" "}Most Popular⌄
                        </b>

                    </span>

                </div>

            </div>


            {/* ================= PRODUCTS ================= */}

            {currentProducts.length === 0 ? (

                <div className="no_products">

                    <h2>
                        No Products Found
                    </h2>

                    <p>
                        Try another filter.
                    </p>

                </div>

            ) : (

                <div className="casual_grid">

                    {currentProducts.map((product, index) => (

                        <div
                            className="casual_card"
                            key={product.id || index}
                            onClick={() =>
                                openProduct(product)
                            }
                        >


                            {/* IMAGE */}

                            <div className="casual_image">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                            </div>


                            {/* PRODUCT NAME */}

                            <h3>
                                {product.name}
                            </h3>


                            {/* RATING */}

                            <div className="casual_rating">

                                <span>
                                    ★★★★★
                                </span>

                                <small>
                                    {product.rating || "4.5/5"}
                                </small>

                            </div>


                            {/* PRICE */}

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

                                    <span className="discount">
                                        {product.discount}
                                    </span>

                                )}

                            </div>

                        </div>

                    ))}

                </div>

            )}


            {/* ================= PAGINATION ================= */}

            {totalPages > 1 && (

                <div className="pagination">


                    <button
                        disabled={currentPage === 1}
                        onClick={() =>
                            handlePageChange(
                                currentPage - 1
                            )
                        }
                    >
                        ← Previous
                    </button>


                    <div className="page_numbers">

                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map(page => (

                            <button
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
                            </button>

                        ))}

                    </div>


                    <button
                        disabled={
                            currentPage === totalPages
                        }
                        onClick={() =>
                            handlePageChange(
                                currentPage + 1
                            )
                        }
                    >
                        Next →
                    </button>

                </div>

            )}

        </main>

    )

}

export default Casual