import React, { useEffect, useRef, useState } from 'react'
import "./Style1.css"
import Firebase from "../Firebase"
import ShowCourse from './ShowCourse'
const AddCourses = () => {
   const[Obj,SetObj] =useState({
        Image:"",
        Title:"",
        Teacher:"",
        Description:""
    })
    var Image=useRef()
    function set(e)
    {
        SetObj({...Obj,[e.target.name]:e.target.value})
    }
    function Upload(e)
    {
        e.preventDefault()
        Image.current.click()
        Image.current.addEventListener("change",function(event)
        {
            if(event.target.files[0])
            {
                var ext=event.target.files[0].name.split(".")
                if(ext[1]=="jpg" || ext[1]=="jpeg" || ext[1]=="png")
                {
                    var reader=new FileReader()
                    reader.readAsDataURL(event.target.files[0])
                    reader.onload=function()
                    {
                        SetObj({...Obj,"Image":reader.result})
                    }
                }
                else
                {
                    alert("Only jpg,jpeg and png images are allowed")
                }
            }
            else
            {
                alert("Please Select your file")
            }
        }) 
    }
    function Submit(e)
    {
        e.preventDefault()
        if(Obj.Image!="" && Obj.Teacher!="" && Obj.Title!="" && Obj.Description!="")
        {
            Firebase.child(`Mycollege/Courses`).push(Obj,err=>{
                if(err)
                {
                    alert("Field is Empty")
                }
                else
                {
                    alert("Course Uploaded")
                }
            })
        }
        else
        {
            alert("Field is Empty")
        }

    }
  return (
    <div>
      <div className="container">
       <h2 className='heading'>Add Courses</h2>
       <br />
       <div className="container">
        <div className="col-md-7">
        <span> 
        <label className='labelt'>Image:</label>
        <label>(600x400px)</label>  
        <br />
        <button className='btn btn-primary' onClick={Upload}>Upload</button>
        <input ref={Image} name='Image' type="file" id='dnone'/>
        </span><br /><br />
        <span>
            <label className='labelt'>Title:</label>
            <input type="text" onChange={set} name='Title' className='form-control' placeholder='Enter Title for this Course'/>
            <label className='labelt'>Teacher:</label>
            <input type="text" onChange={set} name='Teacher' className='form-control' placeholder='Enter Teacher name'/>
            <label className='labelt'>Description:</label>
            <textarea onChange={set} name="Description" className='form-control'  cols="30" rows="4" placeholder='Enter the Course Description in 20-25 words only'></textarea>
            <button className="btn btn-success" onClick={Submit}>Submit</button>
        </span>
        </div>
        <div className="col-md-5">
       <ShowCourse data={Obj}/>
        </div>
       </div>
      </div>
    </div>
  )
}

export default AddCourses
