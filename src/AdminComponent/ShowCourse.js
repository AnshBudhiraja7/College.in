import React from 'react'

const ShowCourse = (props) => {
  return (
    <div className="course-wrapper">
    <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-5">
        <div className="single-item">
          <div className="single-item-image overlay-effect"> <a href="#"><img src={`${props.data.Image?props.data.Image:"./images/courses-img1.jpg"}`} alt=""/></a> </div>
          <div className="single-item-text">
            <h4><a href="#">{`${props.data.Title?props.data.Title:"Title of the Course"}`}</a></h4>
            <div className="single-item-text-info"> <span>By: <span>{`${props.data.Teacher?props.data.Teacher:"Name of the Teacher"}`}</span></span> </div>
            <p>{`${props.data.Description?props.data.Description:"Description of the Course"}`}</p>
            <div className="single-item-content">
              <div className="single-item-comment-view"> <span><i className="fa fa-eye" />259</span> <span><i className="fa fa-comment-o" />19</span> </div>
              <div className="single-item-rating"> <i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /><i className="fa fa-star" aria-hidden="true" /> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
  )
}

export default ShowCourse
