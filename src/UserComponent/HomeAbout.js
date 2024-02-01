import React from 'react'

const HomeAbout = () => {
  return (
 <div className="about-wrapper">
  <div className="about-wrapper-inner">
    <div className="container">
      <div className="aboutus-box">
        <div className="col-sm-4 aboutus-box-image"><img src="images/about-person.jpg" className="img-responsive" alt=""/></div>
        <div className="col-sm-8 aboutus-box-body">
          <div className="aboutus-box-body-content">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et sed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore et sed do eiusmod tempor incididunt ut labore et.</p>
            <div className="special-text"> <cite>- Les Williams,</cite><small>CEO at College Education</small> </div>
          </div>
          <div className="about-btn"> <a href="#" className="btn">Book A Appointment</a> </div>
        </div>
      </div>
    </div>
  </div>
  <div style={{backgroundImage: 'url(images/home-1.jpg)'}} className="about-bg bg-image" />
</div>

  )
}

export default HomeAbout
