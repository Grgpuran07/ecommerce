import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import "./Contact.scss"
import Call from "../../icons/call.svg"
import Mail from "../../icons/mail.svg"
import Location from "../../icons/location.svg"
import Person from "../../icons/person.svg";
import Button from '../../components/button/Button'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div style={{height:"120px"}}></div>
    <div className='contactus'>
       <div className='contactus-head'>
          <h1>Get in Touch!</h1>
          <h3>Contact us for any problem, Visit our store.</h3>
          <div className='icons'>
              <div className='icons-one'>
                 <img src={Location} />
                 <p>102 Street 2714 Don</p>
              </div>
              <div className='icons-one'>
                 <img src={Call} />
                 <p>+977 061581630</p>
              </div>
              <div className='icons-one'>
                  <img src={Mail} />
                  <p>Contactus@gmail.com</p>
              </div>
          </div>
          <div className='message-form'>
               <div className='message-form-left'>
                 <label htmlFor='name'>Your name</label>
                 <div className='input1'>
                    <img className='person' src={Person} />
                    <input id='name' className='input' type="text" />
                 </div> 
                 <label htmlFor='mail'>Mail</label> 
                 <div className='input1'>
                    <img className='person' src={Mail} />
                    <input id='mail' className='input' type="text" />
                 </div> 
                 <label htmlFor='phone'>Phone</label> 
                 <div className='input1'>
                    <img className='person' src={Call} />
                    <input id="phone" className='input' type="text" />                  
                 </div> 
               </div>
               <div className='message-form-right'>
                 <div><label htmlFor='message'>Message</label></div> 
                 <textarea id='message' placeholder="Type you message here.." rows="20" cols="40" />
               </div>
          </div>
          <Button content="Send Message" />
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact