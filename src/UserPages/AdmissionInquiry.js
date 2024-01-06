import React from 'react'
import Header from "../UserComponent/Header"
import Wrappercount from "../UserComponent/Wrappercount"
import Banner from "../UserComponent/Banner"
import Testimonials from "../UserComponent/Testimonials"
import Footer from "../UserComponent/Footer"
import Copyright from "../UserComponent/Copyright"
import Scrollup from "../UserComponent/Scrollup"
import PopularCourses from "../UserComponent/PopularCourses"
import AInquiryContent from '../UserComponent/AInquiryContent'
const AdmissionInquiry = () => {
  return (
    <div>
      <Header AdmissionInquiry="active" Pages="active"/>
      <Banner title="Admission Inquiry"/>
      <AInquiryContent/>
      <PopularCourses/>
      <Wrappercount/>
      <Testimonials/>
      <Footer/>
      <Copyright/>
      <Scrollup/>
    </div>
  )
}

export default AdmissionInquiry
