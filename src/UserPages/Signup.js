import React from 'react'
import Header from '../UserComponent/Header'
import Banner from '../UserComponent/Banner'
import Wrappercount from '../UserComponent/Wrappercount'
import Testimonials from '../UserComponent/Testimonials'
import PopularCourses from '../UserComponent/PopularCourses'
import Footer from '../UserComponent/Footer'
import Copyright from '../UserComponent/Copyright'
import Signupcontent from '../UserComponent/Signupcontent'
import Scrollup from '../UserComponent/Scrollup'

const Signup = () => {
  return (
    <div>
      <Header Signup="active"/>
      <Banner title="Sign Up"/>
      <Signupcontent/>
      <Wrappercount/>
      <Testimonials/>
      <PopularCourses/>
      <Footer/>
      <Copyright/>
      <Scrollup/>
    </div>
  )
}

export default Signup
