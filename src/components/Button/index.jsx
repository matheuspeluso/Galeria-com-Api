import React from 'react'

import "./styles.css"

const Button = ({text,onClick, disabled}) => {
  return (
    <div className="container-btn">
        <button 
        className='button' 
        onClick={onClick}
        disabled={disabled}>
        {text}
        </button>
    </div>
  )
}

export default Button