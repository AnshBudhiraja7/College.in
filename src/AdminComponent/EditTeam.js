import React, { useEffect, useRef, useState } from 'react'
import "./Style1.css"
import Firebase from "../Firebase"
import ShowTeam from './ShowTeam'
const EditTeam = (props) => {
    const[Obj,SetObj] =useState({
        Image:"",
        Title:"",
        Teacher:"",
        Description:""
    })
    var Image=useRef()
    var Name=useRef()
    var Phone=useRef()
    var Email=useRef()
    var Designation=useRef()
    useEffect(function()
    {
        Firebase.child(`Mycollege/Team/${props.id}`).on("value",function(snap)
        {
            if(snap.val()==null)
            {
                props.fun()
            }
            else
            {
                SetObj(snap.val())
            }
        })
    },[])
    useEffect(function()
    {
        Name.current.value=Obj.Name
        Phone.current.value=Obj.Phone
        Email.current.value=Obj.Email
        Designation.current.value=Obj.Designation
    },[Obj])
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
        if(Obj.Image!="" && Obj.Name!="" && Obj.Email!="" && Obj.Phone!="" && Obj.Designation!="")
        {
            Firebase.child(`Mycollege/Team/${props.id}`).update(Obj,err=>{
                if(err)
                {
                    alert("Field is Empty")
                }
                else
                {
                    props.fun()
                    alert("Team Detail Updated")
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
     <h2 className='heading'>Add Team</h2>
     <br />
     <div className="container">
      <div className="col-md-7">
      <span> 
      <label className='labelt'>Image:</label>
      <label>(250x300px)</label>  
      <br />
      <button className='btn btn-primary' onClick={Upload}>Upload</button>
      <input ref={Image} name='Image' type="file" id='dnone'/>
      </span><br /><br />
      <span>
          <label className='labelt'>Name:</label>
          <input type="text" ref={Name} onChange={set} name='Name' className='form-control' placeholder='Enter Name'/>
          <label className='labelt'>Designation:</label>
          <input type="text" ref={Designation} onChange={set} name='Designation' className='form-control' placeholder='Enter Designation'/>
          <label className='labelt'>Email:</label>
          <input type="email" ref={Email} className="form-control" onChange={set} name='Email' placeholder='Enter Email'/>
          <label className='labelt'>Phone Number:</label>
          <input type="number" ref={Phone} className="form-control" onChange={set} name='Phone' placeholder='Enter Phone Number'/>
          <button className="btn btn-success" onClick={Submit}>Submit</button>
      </span>
      </div>
      <div className="col-md-5">
     <ShowTeam data={Obj}/>
      </div>
     </div>
    </div>
  </div>
  )
}

export default EditTeam
