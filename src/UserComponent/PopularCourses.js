import React, { useEffect, useState } from 'react'
import Firebase from '../Firebase'
const PopularCourses = () => {
const[Obj,SetObj]=useState()
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
      }
    })
  },[])
  return (
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
                      <div className="button-bottom"> <a href="#" className="btn button-default">Learn More</a></div>
                    </div>
                  </div>
                )
            }):""
       }
      </div>
  </div>
</div>

  )
}

export default PopularCourses
