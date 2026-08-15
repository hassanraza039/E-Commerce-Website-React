import React from 'react'
import Product from '../product/Product'
import Heading from '../heading/Heading'
import './Selling_product.css'
const Selling_product = () => {
  return (
    <div>
        <div className='h1'>
     <Heading heading ='Top Selling'/>
     </div>
      <Product/>
    </div>
  )
}

export default Selling_product
