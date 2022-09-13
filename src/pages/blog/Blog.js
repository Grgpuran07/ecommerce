import React from 'react'
import "./Blog.scss"
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Blogcard from '../../components/blogcard/Blogcard'

const Blog = () => {
  return (
    <>
      <Navbar/>
      <div className='navbar-width'></div>
      <div className='background-image'>
         <p>Lorem ipsum dolor sit almet</p>
         <h1>Our Blog</h1></div>
      <div className='blog'>
        <div className='blog-top'>
          <a href='#' className='blog-top-title'>Latest Posts</a>
          <a href='#' className='blog-top-title two'>Popular Posts</a>
        </div>
        <hr/>
        <div className='blog-cards'>
          <Blogcard imgUrl="https://images.unsplash.com/photo-1560891958-68bb1fe7fb78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <Blogcard imgUrl="https://images.unsplash.com/photo-1524404794194-16bae22718c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYW5rZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Blogcard imgUrl="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
          <Blogcard imgUrl="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <div className='loadmore'><button className='loadmorebutton'>LOAD MORE</button></div>       
      </div>
      <Footer />
    </>
  )
}

export default Blog