import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
   <div className="testimonials-wrapper">
  <div className="container">
    <div className="row">
      <div className="title">
        <h2>Client <span>Testimonials</span></h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      <div id="myCarousel1" className="carousel slide" data-ride="carousel"> 
        {/* Testimonials slides */}
        <div className="carousel-inner" role="listbox">
          <Carousel responsive={responsive} swipeable={true} draggable={true} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={1000} removeArrowOnDeviceType={["superLargeDesktop", "desktop"]}>
          <div className="item active">
            <div className="col-sm-6">
              <blockquote> <img src="images/testimonials1.png" alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h3>- Michal Marek</h3>
                <h4>Sales Manager</h4>
              </blockquote>
            </div>
            <div className="col-sm-6">
              <blockquote> <img src="images/testimonials2.png" alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h3>- Michal Marek</h3>
                <h4>Sales Manager</h4>
              </blockquote>
            </div>
          </div>
          <div className="item active">
            <div className="col-sm-6">
              <blockquote> <img src="images/testimonials3.png" alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h3>- Michal Marek</h3>
                <h4>Sales Manager</h4>
              </blockquote>
            </div>
            <div className="col-sm-6">
              <blockquote> <img src="images/testimonials1.png" alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h3>- Michal Marek</h3>
                <h4>Sales Manager</h4>
              </blockquote>
            </div>
          </div>
          <div className="item active">
            <div className="col-sm-6">
              <blockquote> <img src="images/testimonials2.png" alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h3>- Michal Marek</h3>
                <h4>Sales Manager</h4>
              </blockquote>
            </div>
            <div className="col-sm-6">
              <blockquote> <img src="images/testimonials3.png" alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h3>- Michal Marek</h3>
                <h4>Sales Manager</h4>
              </blockquote>
            </div>
          </div>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Testimonials
