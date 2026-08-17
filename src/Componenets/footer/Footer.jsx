import React from 'react'
import './Footer.css'

import card_1 from './images/card_1.png'
import card_2 from './images/card_2.png'
import card_3 from './images/card_3.png'
import card_4 from './images/card_4.png'
import card_5 from './images/card_5.png'

import {
    FaEnvelope,
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaGithub
} from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className="footer">

            {/* Newsletter */}
            <div className="newsletter">

                <div className="newsletter_text">
                    <h1>
                        STAY UP TO DATE ABOUT
                        <br />
                        OUR LATEST OFFERS
                    </h1>
                </div>

                <div className="newsletter_form">

                    <div className="email_box">

                        <FaEnvelope />

                        <input
                            type="email"
                            placeholder="Enter your email address"
                        />

                    </div>

                    <button>
                        Subscribe to Newsletter
                    </button>

                </div>

            </div>


            {/* Footer Content */}
            <div className="footer_content">

                {/* Shop */}
                <div className="footer_shop">

                    <h2>SHOP.CO</h2>

                    <p>
                        We have clothes that suits your style and
                        <br />
                        which you're proud to wear. From
                        <br />
                        women to men.
                    </p>

                    <div className="social_icons">

                        <span>
                            <FaTwitter />
                        </span>

                        <span>
                            <FaFacebookF />
                        </span>

                        <span>
                            <FaInstagram />
                        </span>

                        <span>
                            <FaGithub />
                        </span>

                    </div>

                </div>


                {/* Company */}
                <div className="footer_column">

                    <h3>COMPANY</h3>

                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>

                </div>


                {/* Help */}
                <div className="footer_column">

                    <h3>HELP</h3>

                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>

                </div>


                {/* FAQ */}
                <div className="footer_column">

                    <h3>FAQ</h3>

                    <p>Account</p>
                    <p>Manage Deliveries</p>
                    <p>Orders</p>
                    <p>Payments</p>

                </div>


                {/* Resources */}
                <div className="footer_column">

                    <h3>RESOURCES</h3>

                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>

                </div>

            </div>


            {/* Bottom */}
            <div className="footer_bottom">

                <p>
                    Shop.co © 2000-2023, All Rights Reserved
                </p>

                <div className="payment_methods">

                    <img src={card_1} alt="Visa" />
                    <img src={card_2} alt="Mastercard" />
                    <img src={card_3} alt="PayPal" />
                    <img src={card_4} alt="Apple Pay" />
                    <img src={card_5} alt="Google Pay" />

                </div>

            </div>

        </footer>
    )
}

export default Footer