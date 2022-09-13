import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'

const Card = ({imageurl,price,name,id}) => {
  return (
    <div className='card'>
        <div className='image-price-container'>
           <img className='image' src={imageurl}
             alt=''/>
           <p className='price'>{`$ ${price}`}</p>
        </div>
           <div className='pnameboxnumber'><h3>{name}</h3><div className='displayflex'><div className='box'></div>(25)</div></div>   
           <p className='gray-text'>BLUE AND WHITE</p> 
           <p className='color-text'><Link to={`/products/${id}`}>ORDER NOW</Link><div className='line'></div></p>
    </div>
  )
}

export default Card