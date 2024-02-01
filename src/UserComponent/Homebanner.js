import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Homebanner = () => {
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
<div className="banner-wrapper">
<div className="carousel fade-carousel slide" data-ride="carousel" data-interval={4000} id="bs-carousel"> 
<div className="overlay" />
<div className="carousel-inner">
<Carousel responsive={responsive} swipeable={true} draggable={true} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={2000} removeArrowOnDeviceType={["tablet", "mobile"]}>
<div className="item slides active">
<div className="slide-1"><img src="images/banner.jpg" alt=""/></div>
<div className="hero">
<h1 className="animated1">College Education</h1>
<h3 className="animated2">Multipurpose Responsive Template</h3>
</div>
</div>
<div className="item slides active">
<div className="slide-2"><img src="images/banner1.jpg" alt=""/></div>
<div className="hero">
<h1 className="animated1">College Education</h1>
<h3 className="animated2">Multipurpose Responsive Template</h3>
</div>
</div>
<div className="item slides active">
<div className="slide-3"><img src="images/banner2.jpg" alt=""/></div>
<div className="hero">
<h1 className="animated1">College Education</h1>
<h3 className="animated2">Multipurpose Responsive Template</h3>
</div>
</div>
</Carousel>
</div>
</div>
</div>
//    <div className="banner-wrapper">
//   <div className="carousel fade-carousel slide" data-ride="carousel" data-interval={4000} id="bs-carousel"> 
//     {/* Overlay */}
//     <div className="overlay" />
//     {/* Indicators */}
//     <ol className="carousel-indicators">
//       <li data-target="#bs-carousel" data-slide-to={0} className="active" />
//       <li data-target="#bs-carousel" data-slide-to={1} />
//       <li data-target="#bs-carousel" data-slide-to={2} />
//     </ol>
//     {/* Wrapper for slides */}
//     <div className="carousel-inner">
//       <div className="item slides active">
//         <div className="slide-1"><img src="images/banner.jpg" alt=""/></div>
//         <div className="hero">
//           <h1 className="animated1">College Education</h1>
//           <h3 className="animated2">Multipurpose Responsive Template</h3>
//         </div>
//       </div>
//       <div className="item slides">
//         <div className="slide-2"><img src="images/banner1.jpg" alt=""/></div>
//         <div className="hero">
//           <h1 className="animated1">College Education</h1>
//           <h3 className="animated2">Multipurpose Responsive Template</h3>
//         </div>
//       </div>
//       <div className="item slides">
//         <div className="slide-3"><img src="images/banner2.jpg" alt=""/></div>
//         <div className="hero">
//           <h1 className="animated1">College Education</h1>
//           <h3 className="animated2">Multipurpose Responsive Template</h3>
//         </div>
//       </div>
//     </div>
//     <a className="left carousel-control" href="#bs-carousel" data-slide="prev"><span className="transition3s glyphicon glyphicon-chevron-left fa fa-angle-left" /></a> <a className="right carousel-control" href="#bs-carousel" data-slide="next"><span className="transition3s glyphicon glyphicon-chevron-right fa fa-angle-right" /></a> </div>
// </div>

  )
}

export default Homebanner
