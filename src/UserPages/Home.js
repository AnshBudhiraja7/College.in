import React from 'react'
import Header from '../UserComponent/Header'
import Homebanner from '../UserComponent/Homebanner'
import Welcome from '../UserComponent/Welcome'
import HomeAbout from '../UserComponent/HomeAbout'
import Team from '../UserComponent/Team'
import Wrappercount from '../UserComponent/Wrappercount'
import Testimonials from '../UserComponent/Testimonials'
import PopularCourses from '../UserComponent/PopularCourses'
import Footer from '../UserComponent/Footer'
import Copyright from '../UserComponent/Copyright'
import Scrollup from '../UserComponent/Scrollup'
const Home = () => {
  return (
    <div>
      <Header home="active"/>
      <Homebanner/>
      <Welcome/>
      <HomeAbout/>
      <Team/>
      <Wrappercount/>
      <Testimonials/>
      <PopularCourses/>
      <Footer/>
      <Copyright/>
      <Scrollup/>
    </div>
  )
}

export default Home
