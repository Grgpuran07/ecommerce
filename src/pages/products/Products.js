import React from 'react'
import Card from '../../components/card/Card'
import Featured from '../../components/featuredproduct/Featured'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Products.scss"
import { useSelector } from 'react-redux'
import { getAllproducts } from '../../fetchdataslice/dataSlice'
import { getStatus } from '../../fetchdataslice/dataSlice'

const Products = () => {
  const allProducts = useSelector(getAllproducts)
  const status = useSelector(getStatus)

  let Products = ""
  if(allProducts.length!=0){
     Products = allProducts.map((singleproduct)=>{
      return (<Card key={singleproduct.id} 
      imageurl={singleproduct.image}
      price={singleproduct.price}
      id={singleproduct.id}
      name={singleproduct.productname}/>)})
  }else{
    Products = status
  }

  return (
    <div className='products-page'> 
         <Navbar/>
         <div className='navheight'></div>
         <div className='heading-text'>
            <h1>Our all Products</h1>
            <p>Find your best product</p>
        </div>
         <div className='product-cards'>
             {
              Products
             }          
         </div>
          <div className='buttondiv'><button className='loadmore'>LOAD MORE</button></div> 
         <div className='featured-div'><Featured/></div>
         <Footer/>
    </div>
  )
}

export default Products