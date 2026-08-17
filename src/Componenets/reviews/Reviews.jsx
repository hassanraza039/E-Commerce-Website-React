import React, { useState } from 'react'
import './Reviews.css'

import {
    FiSliders,
    FiMoreHorizontal,
    FiChevronDown,
    FiX
} from 'react-icons/fi'

import { FaCheck } from 'react-icons/fa'

const Reviews = () => {

    const [activeTab, setActiveTab] = useState("reviews")
    const [showMore, setShowMore] = useState(false)
    const [showSort, setShowSort] = useState(false)
    const [sort, setSort] = useState("Latest")
    const [filter, setFilter] = useState("All")
    const [showReviewForm, setShowReviewForm] = useState(false)

    const reviews = [

        {
            name: "Samantha D.",
            rating: 5,
            date: "August 14, 2023",
            text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
        },

        {
            name: "Alex M.",
            rating: 4,
            date: "August 15, 2023",
            text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics."
        },

        {
            name: "Ethan R.",
            rating: 4,
            date: "August 16, 2023",
            text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect."
        },

        {
            name: "Olivia P.",
            rating: 5,
            date: "August 17, 2023",
            text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear."
        },

        {
            name: "Liam K.",
            rating: 4,
            date: "August 18, 2023",
            text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill."
        },

        {
            name: "Ava H.",
            rating: 5,
            date: "August 19, 2023",
            text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout make it a conversation starter."
        }

    ]

    const faqs = [
        {
            question: "What material is this t-shirt made from?",
            answer: "This t-shirt is made from soft and comfortable premium cotton."
        },
        {
            question: "What sizes are available?",
            answer: "The product is available in multiple sizes from Small to XXL."
        },
        {
            question: "How long does delivery take?",
            answer: "Delivery usually takes 3 to 5 working days."
        },
        {
            question: "Can I return the product?",
            answer: "Yes, you can return the product according to the store's return policy."
        }
    ]

    const filteredReviews =
        filter === "All"
            ? reviews
            : reviews.filter(review => review.rating === Number(filter))

    const displayedReviews = showMore
        ? filteredReviews
        : filteredReviews.slice(0, 6)


    return (

        <section className="reviews">

            {/* TOP TABS */}

            <div className="review_tabs">

                <button
                    className={activeTab === "details" ? "active_tab" : ""}
                    onClick={() => setActiveTab("details")}
                >
                    Product Details
                </button>

                <button
                    className={activeTab === "reviews" ? "active_tab" : ""}
                    onClick={() => setActiveTab("reviews")}
                >
                    Rating & Reviews
                </button>

                <button
                    className={activeTab === "faqs" ? "active_tab" : ""}
                    onClick={() => setActiveTab("faqs")}
                >
                    FAQs
                </button>

            </div>


            {/* PRODUCT DETAILS */}

            {activeTab === "details" && (

                <div className="tab_content">

                    <h2>Product Details</h2>

                    <p>
                        This stylish t-shirt is designed with premium quality
                        fabric for maximum comfort and everyday use.
                    </p>

                    <div className="details_list">

                        <p><strong>Material:</strong> 100% Cotton</p>
                        <p><strong>Fit:</strong> Regular Fit</p>
                        <p><strong>Pattern:</strong> Printed</p>
                        <p><strong>Available Sizes:</strong> S, M, L, XL, XXL</p>

                    </div>

                </div>

            )}


            {/* REVIEWS */}

            {activeTab === "reviews" && (

                <>

                    <div className="reviews_header">

                        <h2>
                            All Reviews
                            <span>(451)</span>
                        </h2>


                        <div className="review_actions">

                            {/* FILTER */}

                            <div className="filter_wrapper">

                                <button
                                    className="filter_btn"
                                    onClick={() =>
                                        setFilter(filter === "All" ? "5" : "All")
                                    }
                                >
                                    <FiSliders />
                                </button>

                            </div>


                            {/* SORT */}

                            <div className="sort_wrapper">

                                <button
                                    className="latest_btn"
                                    onClick={() => setShowSort(!showSort)}
                                >
                                    {sort}
                                    <FiChevronDown />
                                </button>

                                {showSort && (

                                    <div className="sort_menu">

                                        <button
                                            onClick={() => {
                                                setSort("Latest")
                                                setShowSort(false)
                                            }}
                                        >
                                            Latest
                                        </button>

                                        <button
                                            onClick={() => {
                                                setSort("Oldest")
                                                setShowSort(false)
                                            }}
                                        >
                                            Oldest
                                        </button>

                                    </div>

                                )}

                            </div>


                            {/* WRITE REVIEW */}

                            <button
                                className="write_btn"
                                onClick={() => setShowReviewForm(true)}
                            >
                                Write a Review
                            </button>

                        </div>

                    </div>


                    {/* REVIEW CARDS */}

                    <div className="review_grid">

                        {displayedReviews.map((review, index) => (

                            <div
                                className="review_card"
                                key={index}
                            >

                                <div className="review_top">

                                    <div className="review_stars">
                                        {"★".repeat(review.rating)}
                                        {"☆".repeat(5 - review.rating)}
                                    </div>

                                    <FiMoreHorizontal className="dots" />

                                </div>


                                <div className="review_name">

                                    {review.name}

                                    <span className="verified">
                                        <FaCheck />
                                    </span>

                                </div>


                                <p className="review_text">
                                    "{review.text}"
                                </p>


                                <p className="review_date">
                                    Posted on {review.date}
                                </p>

                            </div>

                        ))}

                    </div>


                    {/* LOAD MORE */}

                    {filteredReviews.length > 4 && (

                        <div className="load_more">

                            <button
                                onClick={() => setShowMore(!showMore)}
                            >
                                {showMore
                                    ? "Show Less"
                                    : "Load More Reviews"
                                }
                            </button>

                        </div>

                    )}

                </>

            )}


            {/* FAQ */}

            {activeTab === "faqs" && (

                <div className="faq_section">

                    <h2>Frequently Asked Questions</h2>

                    {faqs.map((faq, index) => (

                        <details
                            className="faq_item"
                            key={index}
                        >

                            <summary>
                                {faq.question}
                                <FiChevronDown />
                            </summary>

                            <p>
                                {faq.answer}
                            </p>

                        </details>

                    ))}

                </div>

            )}


            {/* WRITE REVIEW POPUP */}

            {showReviewForm && (

                <div className="review_overlay">

                    <div className="review_form">

                        <button
                            className="close_review"
                            onClick={() => setShowReviewForm(false)}
                        >
                            <FiX />
                        </button>

                        <h2>Write a Review</h2>

                        <input
                            type="text"
                            placeholder="Your name"
                        />

                        <select defaultValue="">
                            <option value="" disabled>
                                Select Rating
                            </option>
                            <option value="5">★★★★★</option>
                            <option value="4">★★★★☆</option>
                            <option value="3">★★★☆☆</option>
                            <option value="2">★★☆☆☆</option>
                            <option value="1">★☆☆☆☆</option>
                        </select>

                        <textarea
                            placeholder="Write your review..."
                        />

                        <button
                            className="submit_review"
                            onClick={() => setShowReviewForm(false)}
                        >
                            Submit Review
                        </button>

                    </div>

                </div>

            )}

        </section>

    )

}

export default Reviews