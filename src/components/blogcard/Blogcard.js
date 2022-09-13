import React from 'react'
import "./Blogcard.scss"
import { Link } from 'react-router-dom'

const Blogcard = ({imgUrl}) => {
  return (
    <div className='blogcard'>
        <img className='image' src={imgUrl} alt="" />
        <h1>Three simple ways to save money</h1>
        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.</p>
        <div className='last-div'><p><Link to="/blog/new">READ MORE</Link></p><div className='line'></div></div>
        <div className='blog-box'></div>
        <div className='share-button'>
            <div className='circle'></div>
            <div className='line1'></div>
            <div className='line2'></div>
        </div>
    </div>
  )
}

export default Blogcard