import React from 'react'
import Card from '../card/Card'
import "./Featured.scss"
import { useSelector } from 'react-redux'
import { getAllproducts,getStatus } from '../../fetchdataslice/dataSlice'


const Featured = () => {
  const allproducts = useSelector(getAllproducts);
  console.log(allproducts)
  const status = useSelector(getStatus)
  let singleProduct = ""
  if(allproducts.length!=0){
      const singleproduct = allproducts[0]; 
      singleProduct = <Card key={singleproduct.id} 
      imageurl={singleproduct.image}
      price={singleproduct.price}
      id={singleproduct.id}
      name={singleproduct.productname}/>
  }else{
    singleProduct = status
  }
  return (
    <div className='featured'>
        <div className='left'>
            <div className='item'><div className='padding-div'>Featured Product<div className='box'></div></div><hr/></div>
            <div className='item'><div className='padding-div'>New Product<div className='box'></div></div><hr/></div>
            <div className='item'><div className='padding-div'>Best seller<div className='box'></div></div><hr/></div>
            <div className='item'><div className='padding-div'>Discount Product<div className='box'></div></div><hr/></div>
        </div>
        <div className='right'>
             {
              singleProduct
             }
        </div>
    </div>
  )
}

export default Featured