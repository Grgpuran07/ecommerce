import React from 'react'
import "./Commentcard.scss"

const Commentcard = () => {
  return (
    <div className='commentcard'>
        <div className='commentcard-left'>
            <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='' />
        </div>
        <div className='commentcard-right'>
            <div className='commentcard-right-top'>
                <p>Pauli Jarvis</p>
                 <div className='right-right'>
                     <div className='box'></div>
                     <p className='time-div'>13 mins ago</p>
                 </div>
            </div>
            <div className='commentcard-right-bottom'>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. v</p>
            </div>
        </div>
    </div>
  )
}

export default Commentcard