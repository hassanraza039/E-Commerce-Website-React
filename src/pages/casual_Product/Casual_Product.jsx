import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../Componenets/navbar/Navbar'
import Header from '../../Componenets/header/Header'
import Footer from '../../Componenets/footer/Footer'
import Filter from '../../Componenets/filter/Filter'
import Casual from '../../Componenets/causal/Casual'

import './Casual_Product.css'


const Casual_Product = () => {

    const [filters, setFilters] = useState({})


    return (

        <div>

            <Navbar />

            <Header />


            <div className="casual_page">


                {/* BREADCRUMB */}

                <div className="casual_breadcrumb">

                    <Link to="/">
                        Home
                    </Link>

                    <b>›</b>

                    <span>
                        Casual
                    </span>

                </div>


                {/* FILTER + PRODUCTS */}

                <div className="casual_content">

                    <Filter
                        onFilter={setFilters}
                    />

                    <Casual
                        filters={filters}
                    />

                </div>


            </div>


            <Footer />

        </div>

    )
}


export default Casual_Product