import React from 'react'

const Banner = (props) => {
  return (
    <div className="breadcrumb-banner-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="breadcrumb-text">
          <h1 className="text-center">{props.title}</h1>
          <div className="breadcrumb-bar">
            <ul className="breadcrumb text-center">
              <li><a href="index-2.html">Home</a></li>
              <li>{props.title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Banner
