import React from 'react'
import Header from "../UserComponent/Header"
import Banner from "../UserComponent/Banner"
import Departmentcontent from '../UserComponent/Departmentcontent'
import Wrappercount from "../UserComponent/Wrappercount"
import Testimonials from "../UserComponent/Testimonials"
import PopularCourses from "../UserComponent/PopularCourses"
import Footer from "../UserComponent/Footer"
import Copyright from "../UserComponent/Copyright"
import Scrollup from '../UserComponent/Scrollup'
const Departments = () => {
  return (
    <div>
      <Header Department="active"/>
      <Banner title="Departments"/>
      <Departmentcontent/>
      <Wrappercount/>
      <Testimonials/>
      <PopularCourses/>
      <Footer/>
      <Copyright/>
      <Scrollup/>
    </div>
  )
}

export default Departments
