import React, { useEffect, useRef, useState } from 'react'
import "./Style1.css"
import Firebase from "../Firebase"
const Logoedit = (props) => {
    const[Obj,SetObj]= useState({})
    useEffect(function()
    {
      if(props.data==undefined)
      {
        SetObj({})
      }
      else
      {
        SetObj(props.data)
      }
    },[])
    console.log(props);
    var image=useRef()
    function Upload(e)
    {
      e.preventDefault()
      image.current.click()
      image.current.addEventListener("change",function(event)
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
    function Save(e)
    {
      e.preventDefault()
      Firebase.child(`Mycollege/Logo`).set(Obj,err=>{
        if(err)
        {
          alert("Error Occured")
        }
        else
        {
          alert("Logo Uploaded")
        }
      })
    }
  return (
    <div>
          <h2 className='align'>Logo</h2><h5 className='align'>(Size:360x140)</h5>
        
            <div className="Image-block">
              <img src={`${Obj.Image?Obj.Image:"images/download.png"}`} alt="" />
          </div>
          <br />
          <form className='align'>
          <button className='btn btn-primary' onClick={Upload}>Upload</button>
          <input ref={image} type="file" id='dnone'/>
          <button className='btn btn-success' onClick={Save}>Save</button>
          </form>
      </div>
  )
}

export default Logoedit
