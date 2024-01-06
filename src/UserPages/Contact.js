import React from 'react'
import Header from '../UserComponent/Header'
import Banner from '../UserComponent/Banner'
import ContactDetail from '../UserComponent/ContactDetail'
import Wrappercount from '../UserComponent/Wrappercount'
import Testimonials from '../UserComponent/Testimonials'
import PopularCourses from '../UserComponent/PopularCourses'
import Footer from '../UserComponent/Footer'
import Copyright from '../UserComponent/Copyright'
import Scrollup from '../UserComponent/Scrollup'
const Contact = () => {
  return (
    <div>
<Header contact="active"/>
<Banner title="Contact Us"/>
<ContactDetail/>
<Wrappercount/>
<Testimonials/>
<PopularCourses/>
<Footer/>
<Copyright/>
<Scrollup/>
    </div>
  )
}

export default Contact
