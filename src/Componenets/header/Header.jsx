import React, { useState } from 'react'
import logo from './images/SHOP.CO.png';
import './Header.css'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='Header_container'>

      <div
        className="bar"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      <div className="shop_logo">
        <img src={logo} alt="shop_logo" className="shop_logo" />
      </div>

      <ul className={`header_list ${menuOpen ? 'show' : ''}`}>
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>

      <div className="search_bar">
        <div className='search_logo'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div>
          <input
            className="seacrh_text"
            type="text"
            placeholder='Search for Products..'
          />
        </div>
      </div>

      <div className='search_logo2'>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="icons">
        <div className="cart_icon">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>

        <div className="user_icon">
          <i className="fa-regular fa-circle-user"></i>
        </div>
      </div>

    </div>
  )
}

export default Header