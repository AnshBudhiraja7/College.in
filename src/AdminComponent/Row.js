import React from 'react'
import Logo from './Logo'
import Details from './Details'
import "./Style1.css" 
const Row = () => {
  return (
    <div className='container'>
      <div className="block">        
      <div className="image-box">
      <Logo/>
      </div>
      <div className="image-box">
      <Details/>
      </div>
      <div className="image-box">
      <Details/>
      </div>
      
      </div>
    </div>
  )
}

export default Row
