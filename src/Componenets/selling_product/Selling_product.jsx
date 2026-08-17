import React from 'react'
import Product from '../product/Product'
import './Selling_product.css'

import S_1 from '../Selling_product/images/S_1.png'
import S_2 from '../Selling_product/images/S_2.png'
import S_3 from '../Selling_product/images/S_3.png'
import S_4 from '../Selling_product/images/S_4.png'

const Selling_product = () => {

    const Selling_product_list = [

        {
            image: S_1,
            name: "VERTICAL STRIPED SHIRT",
            rating: "4.5/5",
            price: "$212",
            cut_price: "",
            discount: ""
        },

        {
            image: S_2,
            name: "COURAGE GRAPHIC T-SHIRT",
            rating: "4.0/5",
            price: "$145",
            cut_price: "",
            discount: ""
        },

        {
            image: S_3,
            name: "LOOSE FIT BERMUDA SHORTS",
            rating: "3.5/5",
            price: "$80",
            cut_price: "$100",
            discount: "-20%"
        },

        {
            image: S_4,
            name: "FADED SKINNY JEANS",
            rating: "4.5/5",
            price: "$210",
            cut_price: "",
            discount: ""
        },
        {
            image: S_1,
            name: "VERTICAL STRIPED SHIRT",
            rating: "4.5/5",
            price: "$212",
            cut_price: "",
            discount: ""
        },

        {
            image: S_2,
            name: "COURAGE GRAPHIC T-SHIRT",
            rating: "4.0/5",
            price: "$145",
            cut_price: "",
            discount: ""
        },

        {
            image: S_3,
            name: "LOOSE FIT BERMUDA SHORTS",
            rating: "3.5/5",
            price: "$80",
            cut_price: "$100",
            discount: "-20%"
        },

        {
            image: S_4,
            name: "FADED SKINNY JEANS",
            rating: "4.5/5",
            price: "$210",
            cut_price: "",
            discount: ""
        }


    ]

    return (
        <div>

            <Product
                products={Selling_product_list}
                heading="TOP SELLING"
            />

        </div>
    )
}

export default Selling_product