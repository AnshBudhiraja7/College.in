import React from 'react'
import Header from '../UserComponent/Header'
import Banner from '../UserComponent/Banner'
import Aboutcontent from '../UserComponent/Aboutcontent'
import Wrappercount from '../UserComponent/Wrappercount'
import Testimonials from '../UserComponent/Testimonials'
import PopularCourses from '../UserComponent/PopularCourses'
import Footer from '../UserComponent/Footer'
import Copyright from '../UserComponent/Copyright'
import Scrollup from '../UserComponent/Scrollup'
const About = () => {
  return (
    <div>
      <Header About="active"/>
      <Banner title="About Us"/>
      <Aboutcontent/>
      <Wrappercount/>
      <Testimonials/>
      <PopularCourses/>
      <Footer/>
      <Copyright/>
      <Scrollup/>
    </div>
  )
}

export default About
