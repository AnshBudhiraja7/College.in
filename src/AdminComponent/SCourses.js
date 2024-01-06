import React, { useEffect, useState } from 'react'
import Firebase from '../Firebase'
import EditCourse from './EditCourse'

const SCourses = (props) => {
   const[Obj,SetObj]=useState()
   const[Btn,SetBtn]=useState(true)
   const[Edit,SetEdit]=useState(false)
   const[Key,SetKey]=useState("")
    useEffect(function()
    {   
        Firebase.child(`Mycollege/Courses`).on("value",function(snap)
        {
            if(snap.val()==null)
            {
                SetObj({})
            }
            else
            {
                SetObj(snap.val())
                if(Object.keys(snap.val()).length<3)
                {
                    SetBtn(true)
                }
                else
                {
                    SetBtn(false)
                }
            }
        })

    },[])
    function Delete(key)
    {
        Firebase.child(`Mycollege/Courses/${key}`).remove(err=>{
            if(err)
            {
                alert("Error Occured Try again later")
            }
            else
            {
                alert("Course Deleted")
            }
        })
    }
    function edit(key)
    {
        SetEdit(true)
        SetKey(key)
    }
    function NotShow()
    {
        SetEdit(false)
        SetKey("")
    }
  return (
   <div>
    {
        Edit?(<EditCourse id={Key} fun={NotShow}/>):
    
    <div className="container">
    <div className="course-wrapper">
    <div className="container">
      <div className="row">
        <div className="title">
          <h2>Popular <span>Courses</span></h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
      </div>
      <div className="row offset-top-40">
       {
        Obj?Object.keys(Obj).reverse().map(function(key)
        {
            return(
                    <div className="col-sm-6 col-md-4">
                    <div className="single-item">
                      <div className="single-item-image overlay-effect"> <a href="#"><img src={Obj[key].Image} alt=""/></a> </div>
                      <div className="single-item-text">
                        <h4><a href="#">{Obj[key].Title}</a></h4>
                        <div className="single-item-text-info"> <span>By: <span>{Obj[key].Teacher}</span></span> </div>
                        <p>{Obj[key].Description}</p>
                        <div className="single-item-content">
                          <div className="single-item-comment-view"> <span><i className="fa fa-eye" />259</span> <span><i className="fa fa-comment-o" />19</span> </div>
                          <div className="single-item-rating"> <i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /> </div>
                        </div>
                      </div>
                      <div className="button-bottom"> <a href="#" className="btn btn-danger" onClick={()=>Delete(key)}>Delete</a> <a href="#" className="btn btn-success" onClick={()=>edit(key)}>Edit</a> </div>
                    </div>
                  </div>
                )
            }):""
       }
      </div>
    </div>
  </div>
  {
    Btn?<div className='text-center'>
    <button className='btn btn-primary' onClick={props.Add}>Add Courses</button></div>:""
  }
    </div>
    }
   </div>
  )
}

export default SCourses
