import React,{useState} from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import "./Singleproduct.scss"
import Reviewcard from '../../components/reviewcard/Reviewcard'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import { getAllproducts,getStatus } from '../../fetchdataslice/dataSlice'
import { useSelector,useDispatch } from 'react-redux'
import {useParams} from "react-router-dom"
import { addItemtocart } from '../../fetchdataslice/dataSlice'

const Singleproduct = () => {

  const {id} = useParams();
  const allProducts = useSelector(getAllproducts)
  const status = useSelector(getStatus)
  const dispatch = useDispatch()
  const [divone,setDivone] = useState(false)
  const [divtwo,setDivtwo] = useState(false)
  const [divthree,setDivthree] = useState(false)
  const [divfour,setDivfour] = useState(false)
  const [divfive,setDivfive] = useState(false)

  let stars = 0;
  if(divone){
    stars++;
  }
  if(divtwo){
    stars++;
  }
  if(divthree){
    stars++;
  }
  if(divfour){
    stars++;
  }
  if(divfive){
    stars++;
  }
  const singleProduct  = allProducts.find(item=>item.id.toString() === id.toString());
  console.log(singleProduct)

  let mostreviewedProduct = ""
  if(allProducts.length!==0){
    mostreviewedProduct = allProducts.slice(0,3).map((singleproduct)=>{
      return (<Card key={singleproduct.id} 
      imageurl={singleproduct.image}
      price={singleproduct.price}
      id={singleproduct.id}
      name={singleproduct.productname}/>)
  })
  }else{
    mostreviewedProduct = status
  }

  const handleAddtoCart = () =>{
      // alert("Item is added to cart.");
      dispatch(addItemtocart({...singleProduct,number:1}));
  }

  const handleboxClickone = () =>{
     setDivone(!divone)
  }

  const handleboxClicktwo = () =>{
    setDivtwo(!divtwo)
  }
 
  const handleboxClickthree = () =>{
    setDivthree(!divthree)
  }

  const handleboxClickfour = () =>{
    setDivfour(!divfour)
  }

  const handleboxClickfive = () =>{
    setDivfive(!divfive)
  }

   
  return (
    <>
      <Navbar/>
      <div style={{height:"120px"}}></div>
      <div className='singleproduct'>
          <div className='singleproduct-top'>
            <p className='pone'>Home<div className='box'></div></p>
            <p className='ptwo'>Shop<div className='box'></div></p>
            <p className='pthree'>Single Product<div className='box'></div></p>
          </div>
          <div className='photo-content'>
            <div className='photo-content-left'>
                <img className='image' src={singleProduct.image} />
                <div className='left-bottom-images'>
                     <img src={singleProduct.image} />
                     <img src={singleProduct.image} />
                     <img src={singleProduct.image} />
                     <img src={singleProduct.image} />
                </div>
            </div>
            <div className='photo-content-right'>
               <div className='ratings'>
                <div onClick={()=>handleboxClickone()} className={divone ? `boxselect` : `box`}></div>
                <div onClick={()=>handleboxClicktwo()} className={divtwo ? `boxselect marginbox` : `box marginbox`}></div>
                <div onClick={()=>handleboxClickthree()} className={divthree ? `boxselect marginbox` : `box marginbox`}></div>
                <div onClick={()=>handleboxClickfour()} className={divfour ? `boxselect marginbox` : `box marginbox`} ></div>
                <div onClick={()=>handleboxClickfive()} className={divfive ? `boxselect marginbox` : `box marginbox`} ></div>
                <div className='marginbox text'>{stars}</div>
               </div>
               <h1>{singleProduct.productname}</h1>
               <p>BLUE AND WHITE</p>
               <h1>$ 140</h1>
               <button className='button' onClick={()=>handleAddtoCart()}>ADD TO CART</button>
               <div className='below-button'><div className='box'></div><p>Delievery from  <span className='cityname'>London</span>, 3-4 week delivery</p></div>
               <div className='description'>
                <h2>Description</h2>
                <p>{singleProduct.description}</p>
                <ul>
                  <li><div className='circle'></div>A wonderful serenity has taken possession of my entire like these sweet mornings.</li>
                  <li><div className='circle'></div>A wonderful serenity has taken possession of my.</li>
                </ul>
               </div>
            </div>
          </div>
          <div className='review-content'>
            <div className='review-write-review'><span className='review'>Review</span><span className='write-review'>Write Review</span><span className='upper-border'></span></div> 
            <div className='ratings'>
                <div className='box'></div>
                <div className='box marginbox'></div>
                <div className='box marginbox'></div>
                <div className='box marginbox'></div>
                <div className='marginbox text'>5.0</div>
            </div>
            <div className='total-review'>
              All(2k)
            </div>
            <div className='all-reviews'>
              <div className='all-review-left'>
                  <Reviewcard/>
                  <Reviewcard />
              </div>
              <div className='all-review-right'>
                <div className='padding-div'>
                    <Reviewcard/>
                    <Reviewcard/>
                </div>
              </div>
            </div>
            <Button content="LOAD MORE REVIEW" />
          </div>
          <h1>Related most Review</h1>
          <h1>Product</h1>
          <div className='most-reviwed-product'>
               {
                mostreviewedProduct
               }
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Singleproduct