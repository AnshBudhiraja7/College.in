import React, { useEffect, useState } from 'react'
import AdminHeader from "../AdminComponent/AdminHeader"
import Banner from '../UserComponent/Banner'
import AddCourses from '../AdminComponent/AddCourses'
import Firebase from '../Firebase'
import SCourses from '../AdminComponent/SCourses'
const Courses = () => {
    const[Course,SetCourse]=useState(false)
    useEffect(function()
    {
        Firebase.child(`Mycollege/Courses`).on("value",function(snap)
        {
            if(snap.val()==null)
            {
                SetCourse(false)
            }
            else
            {
                SetCourse(true)
            }
        })
    },[])
    function Add()
    {
        SetCourse(false)
    }
  return (
    <div>
      <AdminHeader Courses="active"/>
      <Banner title="Courses"/>
      <>
        {
            Course?(<SCourses Add={Add}/>):(<AddCourses/>)
        }
      </>
    </div>
  )
}

export default Courses
