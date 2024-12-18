import React from 'react'
import ReactDOM from "react-dom"

export default function Modal(props) {
    const { children } = props

  return ReactDOM.createPortal(
    <div className='modal-container'>
        <button>SMASH</button>
        <div className='modal-content'>
            {children}
        </div>
    </div>, 
    document.getElementById("portal")
  )
}
