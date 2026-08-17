import React from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from '../../Componenets/navbar/Navbar'
import Header from '../../Componenets/header/Header'
import ProductDetail from '../../Componenets/productdetail/ProductDetail'
import Footer from '../../Componenets/footer/Footer'
import Reviews from '../../Componenets/reviews/Reviews'

const Shop = () => {

    const location = useLocation()

    const selectedProduct = location.state?.product

    return (
        <div>
            <Navbar />
            <Header />
            <ProductDetail product={selectedProduct} />
            <Reviews/>
           <Footer />
        </div>
    )
}

export default Shop