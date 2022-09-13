import React, { useEffect } from 'react'
import Card from '../../components/card/Card'
import Featured from '../../components/featuredproduct/Featured'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import "./Home.scss"
import { fetchProducts } from '../../fetchdataslice/dataSlice'
import { useSelector,useDispatch } from 'react-redux'
import { getStatus,getAllproducts } from '../../fetchdataslice/dataSlice'
 


const Home = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus)
  console.log(status)
  const allproducts = useSelector(getAllproducts)
  
  useEffect(()=>{
      if(status === "idle"){
         dispatch(fetchProducts())
      }
  },[])

  let Products = ""
  if(allproducts.length!=0){
    Products = allproducts.slice(0,3).map((singleproduct)=>{
        return (<Card key={singleproduct.id} 
        imageurl={singleproduct.image}
        price={singleproduct.price}
        id={singleproduct.id}
        name={singleproduct.productname}/>)
    })
  }else{
    Products = status;
  }
   
  return (
    <> 
    <Navbar/>
    <div className='home'>
      <div className='home-left'>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
      </div>
      <div className='home-right'>
           <div className='text-collection'>
             <p>The</p>
             <p>Classic-Collection</p>
             <p className='shop-text'>Shop House</p>
             <button>SHOP NOW</button>
           </div>
      </div>
    </div>
    <div className='sleep-text'>
          <div className='sleep-text-left'>
            <p>A Blanket that allows us to</p>
            <h1>Sleep in luxary</h1>
            <h1>Style</h1>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, 
              which was created for the bliss of souls like mine. I am so happy.A wonderful serenity
               has taken possession of my entire soul, like these sweet mornings of spring.</p>
          </div>
          <div className='sleep-text-right'>
            <img className='sleep-image' src='https://media.istockphoto.com/photos/african-american-woman-taking-a-nap-in-a-bed-picture-id1205680589?b=1&k=20&m=1205680589&s=170667a&w=0&h=mPtXqrzOx8NXpBQ88CDtGXg7NrGhGzfmYRBlPX9ul8Y=' />
          </div>
    </div>
    <div className='four-box-div'>
         <div className='four-box-top'>
          <div className='top-left'>
            <img src='https://media.istockphoto.com/photos/woman-sleep-in-eye-patch-in-grey-bed-copy-space-picture-id935229610?b=1&k=20&m=935229610&s=170667a&w=0&h=yOzjaw5YJ_7-jNhVGNRh-zsK22XbC8IiRmndLyJMs64='
            alt=''/>
          </div>
          <div className='top-right'>
            <div className='contents'>
               <h1>Relax in</h1>
               <h1>Comfortable</h1>
               <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.</p>
               <a href='#'><p>Buy this product</p></a>
            </div>
             
          </div>
         </div>
         <div className='four-box-bottom'>
          <div className='bottom-left'>
          <div className='contents'>
               <h1>Explore in</h1>
               <h1>Style</h1>
               <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.</p>
               <a href='#'><p>Buy this product</p></a>
            </div>
          </div>
          <div className='bottom-right'>
          </div>
         </div>
    </div>
    <div className='products'>
       <h1>Our Products</h1>
       <div className='products-text'><p>Find you best products</p><p className='borderblack'><Link to="products">SEE ALL PRODUCTS</Link></p></div> 
       <div className='cards'>
          {
            Products
          }
       </div>
    </div>
    <div className='featured-product'>
      <div className='border'>
          <Featured />
      </div>
    </div>
    <div className='client-review'>
       <div className='left'>
        <img className='image' src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt='' />
       </div>
       <div className='right'>
          <h1 className='h1first'>What our client say</h1>
          <h1 className='h1second'>About us</h1>
          <p className='pfirst'>Don't try to be original just try to be good.
          A wonderful serenity has taken possessionof the my entire soul, like 
         these sweet mornings of spring which I enjoy with my whole heart. 
         I am alone, and feel the.</p>
         <p className='psecond'>-Pauli Jarvis</p>
         <div className='box'></div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home