import React, { useEffect, useState } from 'react'
import logo from './images/SHOP.CO.png'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const navigate = useNavigate()


  // Cart ka total quantity
  const updateCartCount = () => {

    const cart =
      JSON.parse(localStorage.getItem('cart')) || []

    const totalQuantity = cart.reduce(
      (total, item) =>
        total + (item.quantity || 1),
      0
    )

    setCartCount(totalQuantity)
  }


  // Header load hone par cart count
  useEffect(() => {

    updateCartCount()

    // Add to Cart ke baad count update
    window.addEventListener(
      'cartUpdated',
      updateCartCount
    )

    return () => {

      window.removeEventListener(
        'cartUpdated',
        updateCartCount
      )

    }

  }, [])


  return (

    <div className='Header_container'>


      {/* MENU */}

      <div
        className="bar"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </div>


      {/* LOGO */}

      <div className="shop_logo">
        <img
          src={logo}
          alt="shop_logo"
          className="shop_logo"
        />
      </div>


      {/* NAVIGATION */}

      <ul
        className={`header_list ${
          menuOpen ? 'show' : ''
        }`}
      >

        <li>
          <Link to="/shop">
            Shop
          </Link>
        </li>

        <li>
          <Link to="/">
            On Sale
          </Link>
        </li>

        <li>
          New Arrivals
        </li>

        <li>
          <Link to="/casual">
            Casual
          </Link>
        </li>

      </ul>


      {/* SEARCH */}

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


      {/* MOBILE SEARCH */}

      <div className='search_logo2'>

        <i className="fa-solid fa-magnifying-glass"></i>

      </div>


      {/* ICONS */}

      <div className="icons">


        {/* CART */}

        <div
          className="cart_icon"
          onClick={() => navigate('/cart')}
        >

          <i className="fa-solid fa-cart-shopping"></i>


          {/* COUNT */}

          {cartCount > 0 && (

            <span className="cart_count">
              {cartCount}
            </span>

          )}

        </div>


        {/* USER */}

        <div className="user_icon">

          <i className="fa-regular fa-circle-user"></i>

        </div>


      </div>

    </div>
  )
}

export default Header