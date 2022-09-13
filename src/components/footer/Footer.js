import React from 'react'
import "./Footer.scss"
import paymentcards from "../../icons/paymentcards.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='left'>
                <p>Sign Up Now for our Discount</p>
                <p>Product</p>
            </div>
            <div className='right'>
                <input type="text" placeholder="Enter your mail" className="footerinput"/>
                <button className='footer-button'>SUBSCRIBE</button>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='company-list'>
                <p>COMPANY</p>
                <ul>
                     <Link to="/"><li>Home</li></Link> 
                     <Link to="/products"><li>Shop</li></Link> 
                     <Link to="/aboutus"><li>About us</li></Link> 
                     <Link to="/blog"><li>Blog</li></Link> 
                     <Link to="/contactus"><li>Contact Us</li></Link>    
                </ul>
            </div>
            <div className='service-list'>
             <p>SERVICES</p>
                <ul>
                    <a href='#'><li>Support</li></a>
                    <a href='#'><li>FAQ</li></a>
                    <a href='#'><li>Warrenty</li></a>
                    <a href='#'><li>Live Chat</li></a>
                    <a href='#'><li>Privacy Policy</li></a>
                </ul>
            </div>
            <div className='orders-return-list'>
                <p>ORDERS & RETURNS</p>
                <ul>
                    <a href='#'><li>Order</li></a>
                    <a href='#'><li>Status</li></a>
                    <a href='#'><li>Shipping</li></a>
                    <a href='#'><li>Policy & Service</li></a>
                    <a href='#'><li>Cart</li></a>
                </ul>
            </div>
            <div className='payment-list'>
                 <p>PAYMENT ACCEPT</p>
                 <img className='paymentcards-image' src={paymentcards} alt=""/>
            </div>
       </div>
       <p className='copyrighttext'>Copyright &copy; 2022 | All Rights Reserved.</p>
    </div>
  )
}

export default Footer