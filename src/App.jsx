import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Componenets/navbar/Navbar'
import Header from './Componenets/header/Header'
import Hero from './Componenets/hero/Hero'
import Logos from './Componenets/logos/Logos'
import Product from './Componenets/product/Product'
import Selling_product from './Componenets/selling_product/Selling_product'
import Grid from './Componenets/grid/Grid'
import Customer from './Componenets/customer/Customer'
import Footer from './Componenets/footer/Footer'
import Shop from './pages/shop/Shop'
import ProductDetail from './Componenets/productdetail/ProductDetail'
import Casual_Product from './pages/casual_Product/Casual_Product'
import './App.css'


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Hero />
            <Logos />
            <Product />
            <Selling_product />
            <Grid />
            <Customer />
            <Footer />
        </div>
    )
}


const App = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/casual" element={<Casual_Product/>} />


            </Routes>

        </BrowserRouter>
    )
}

export default App