import React from 'react'
import Commentcard from '../../components/commentcard/Commentcard'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Singleblog.scss"

const Singleblog = () => {
  return (
    <>
      <Navbar />
       <div style={{height:"120px"}}></div>
       <div className='singleblog'>
        <div className='image-title'>
            <h3>Lorem ipsum dolor sit amet</h3>
            <h1>Blog details</h1>
        </div>
        <div className='content'>
            <div className='content-left'>
                <div className='round-image'>
                    <img src='https://images.unsplash.com/photo-1603696196733-7883d315991b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhc3Nwb3J0JTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
                    alt='' />
                </div>
                <h3>Jerrin Khan</h3>
                <h4>21 Feb, 2017</h4>
            </div>
            <div className='content-right'>
                <h1>Three simple ways to save money lorem ipsum</h1>
                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. </p>
                <p>I am alone, and feel the.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.  I am alone, and feel the.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.v</p>
                <div className='content-right-bottom'>
                    <div className='box'></div>
                    <p className='paragraph one'>Don't try to be original just try to be good.</p>
                    <p className='paragraph two'>A wonderful serenity has taken possessionof the my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.</p>
                    <h3>Paula Jarvis</h3>
                </div>
            </div>
        </div>
        <div className='fullimage'>
            <img className="image" src='https://images.unsplash.com/photo-1583912489026-898cdc54cbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt=''/>
        </div>
        <div className='text-div'>
            <div className='text-div-left'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart</div>
            <div className='text-div-right'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart</div>
        </div>
        <div className='comment-number'>
            <p>Comment</p>
            <span className='number'>46</span>
            <div className='number-with-box first'><div className='box'></div>Likes 2K</div>
            <div className='number-with-box second'><div className='box'></div>874</div>
            <div className='number-with-box third'><div className='box'></div>654</div>
        </div>
       
        <hr/>
        Comments
        <div style={{height:"20px"}}></div>
        <Commentcard/>
   
        <Commentcard />
      
        <Commentcard />
        <div className='comment-box'>
            <div className='comment-box-left'>
                <div className='for-image'></div>
            </div>
            <div className='comment-box-right'>
                <div className='right-top'>
                    <input type="text" placeholder="AL Rahayan" />
                    <input type="text" placeholder="malto@alrahayan.com" />
                </div>
                <div className='right-bottom'>
                    <textarea placeholder='Comment here' rows="10" cols="100" />
                </div>
                <div className='buttonclass'><button>PUBLISH</button></div>
            </div>
        </div>
       </div>
      <Footer />
    </>
  )
}

export default Singleblog