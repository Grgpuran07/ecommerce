import React, { useState } from 'react'
import "./Navbar.scss"
import {Link} from "react-router-dom"
import Search from "../../icons/search.svg"
import Cart from "../../icons/cart.svg"
import Close from "../../icons/close.svg"
import Menu from "../../icons/menu.svg"
import { useSelector } from 'react-redux/es/exports'
import { getCartproducts } from '../../fetchdataslice/dataSlice'
import Cartitems from '../cartitems/Cartitems'
 

const Navbar = () => {
    const [navbar,setNavbar] = useState(false)
    const cartproducts = useSelector(getCartproducts)
    const [showcart,setShowcart] = useState(false)
    
    const changeBackground = () =>{
        if(window.scrollY >= 120){
            setNavbar(true);
        }else{
            setNavbar(false)
        } 
    }
    window.addEventListener('scroll', changeBackground);

    const handleCartclick = () =>{
         setShowcart(!showcart)
    }
  return (
    <div className={navbar ? `navbar active` : `navbar`}>
        <div className='navbar-items'>
            <div className='navbar-logo'>
                <label htmlFor='homes' className='logo-big-text'>EX-</label>
                <label htmlFor='homes' className='logo-small-text'>BAZER SHOP</label>
                <Link to="/" id='homes'></Link>
            </div>
            <div className='navbar-list'>
                <ul>
                     <Link to="/"><li>home</li></Link> 
                     <Link to="/products"><li>shop</li></Link>
                     <Link to="/blog"><li>blog</li></Link>
                     <Link to="/aboutus"><li>about us</li></Link>
                     <Link to="/contactus"><li>contact us</li></Link>
                </ul>
            </div>
            <div className='navbar-icon'>
                <input type="text" placeholder='Search...' className='searchinput'/>
                <img className='icon' src={Search} alt=""/>
                <div className='icon box'> </div>
                <div className='cart-icon'><button onClick={()=>handleCartclick()} className='notification-button'><img className='icon' src={Cart} alt="" /></button><div className='cart-number'>{cartproducts.length}</div></div> 
            </div>
            <div className='menubar'>
                <img src={Menu} />
            </div>
        </div>
        {
           showcart ? (<Cartitems/>) : ("")
        }
    </div>
  )
}

export default Navbar