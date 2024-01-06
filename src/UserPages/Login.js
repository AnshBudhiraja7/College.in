import React from 'react'
import Header from '../UserComponent/Header'
import Banner from '../UserComponent/Banner'
import Wrappercount from '../UserComponent/Wrappercount'
import Testimonials from '../UserComponent/Testimonials'
import PopularCourses from '../UserComponent/PopularCourses'
import Footer from '../UserComponent/Footer'
import Copyright from '../UserComponent/Copyright'
import LoginContent from '../UserComponent/LoginContent'
import Scrollup from '../UserComponent/Scrollup'
const Login = () => {
  return (
    <div>
      <Header Login="active"/>
      <Banner title="Login" />
      <LoginContent/>
      <Wrappercount/>
      <Testimonials/>
      <PopularCourses/>
      <Footer/>
      <Copyright/>
      <Scrollup/>
    </div>
  )
}

export default Login
