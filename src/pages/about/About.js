import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import "./About.scss"

const About = () => {
  return (
    <>
     <Navbar />
     <div style={{height:"120px"}}></div>
     <div className='aboutus'>
      <div className='text-div'>
        <h1>About Us</h1>
        <h3>Lorem ipsum dolor sit amet</h3>
      </div>
      <div className='grid-view'>
        <div className='grid-item first'>
             <h1>Our vision</h1>
             <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
              </p><p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and </p>
              <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
        </div>
        <div className='grid-item second'>
            <img className='image' src='https://images.unsplash.com/photo-1660507543480-7cf99bd0ef22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
        </div>
        <div className='grid-item third'>
        <img className="image" src='https://images.unsplash.com/photo-1660507543480-7cf99bd0ef22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
        </div>
        <div className='grid-item fourth'>
        <h1>Our Approach</h1>
          <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
          <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and</p>
          <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
        </div>
        <div className='grid-item fifth'>
          <h1>Our Process</h1>
          <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.</p>
          <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and</p>
          <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
        </div>
        <div className='grid-item sixth'>
          <img className='image' src='https://images.unsplash.com/photo-1660507543480-7cf99bd0ef22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
        </div>
      </div>
     </div>
     <Footer />
    </>
  )
}

export default About