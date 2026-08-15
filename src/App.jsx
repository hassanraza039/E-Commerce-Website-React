import React from 'react'
import Navbar from './Componenets/navbar/Navbar'
import Header from './Componenets/header/Header'
import Hero from './Componenets/hero/Hero'
import Button from './Componenets/button/Button'
import Stat from './Componenets/stat/Stat'
import Logos from './Componenets/logos/Logos'
import Product from './Componenets/product/Product'
import Selling_product from './Componenets/selling_product/Selling_product'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Hero/>
      <Logos/>
      <Product/>
      <Selling_product/>
    </div>
  )
}

export default App
