import React from 'react'
import Logo from './Logo'
import Details from './Details'
import "./Style1.css" 
const Row = () => {
  return (
    <div className='container'>        
     <div className="col-md-4 col-sm-6 col-xs-12">
     <div className="image-box">
      <Logo/>
      </div> 
     </div>
     <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="image-box">
      <Details/>
      </div>
      </div>
      {/* <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="image-box">
      <Details/>
      </div>
      </div> */}
      
    </div>
  )
}

export default Row
