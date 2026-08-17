import React from 'react'
import Navbar from '../../Componenets/navbar/Navbar'
import Header from '../../Componenets/header/Header'
import Footer from '../../Componenets/footer/Footer'
import Filter from '../../Componenets/filter/Filter'
import Casual from '../../Componenets/causal/Casual'
import './Casual_Product.css'

const Casual_Product = () => {
    return (
        <div>

            <Navbar />
            <Header />

            <div className="casual_page">

                {/* Breadcrumb */}
                <div className="casual_breadcrumb">
                    <span>Home</span>
                    <b>›</b>
                    <span>Casual</span>
                </div>

                {/* FILTER + CASUAL PRODUCTS */}
                <div className="casual_content">

                    <Filter />

                    <Casual />

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Casual_Product