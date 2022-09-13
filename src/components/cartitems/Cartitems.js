import React from 'react'
import "./Cartitem.scss"
import { getCartproducts } from '../../fetchdataslice/dataSlice'
import { increaseNumberincart,decreaseNumberincart,removeItemincart } from '../../fetchdataslice/dataSlice'
import { useSelector,useDispatch } from 'react-redux'

const Cartitems = () => {
    const allcartproducts = useSelector(getCartproducts)
    const dispatch = useDispatch()
    let totalPrice = 0;

    if(allcartproducts.length!== 0){
        allcartproducts.forEach(element => {
            totalPrice = totalPrice + Number(Number(element.price) * Number(element.number));
        });
    }else{
        totalPrice = 0;
    }

    const handleIncreasecart =(id) =>{
        dispatch(increaseNumberincart({id}))
    }

    const handleDecreasecart = (id) =>{
        dispatch(decreaseNumberincart({id}))
    }

    const handleRemovecart = (id) =>{
        dispatch(removeItemincart({id}))
    }
    
    let Cardproducts = ""
    if(allcartproducts.length !== 0){
         Cardproducts = allcartproducts.map((item)=>{
            return (<div className='single-cart-item'>
                     <img className='image' src={item.image} alt="" />
                     <div className='productname-price'><p>{item.productname}</p><p>Price $ {item.price}</p></div>
                     <div className='increase-decrease'><button onClick={()=>handleIncreasecart(item.id)}>INC</button><p>{item.number}</p><button onClick={()=>handleDecreasecart(item.id)}>DEC</button></div>  
                     <button className='removebutton' onClick={()=>handleRemovecart(item.id)}>REMOVE</button>
            </div>)
         })
    }else{
        Cardproducts = "Your cart is empty"
    }
  return (
    <div className='cartitems'>
          {
            Cardproducts
          }
          <p className='totalprice'>Total Price : $ {totalPrice}</p>
    </div>
  )
}

export default Cartitems