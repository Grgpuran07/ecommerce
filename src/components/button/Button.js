import React from 'react'
import "./Button.scss"

const Button = ({content}) => {
  return (
    <div className='button-div'>
        <button className='button'>{content}</button>
    </div>
  )
}

export default Button