import React, { useEffect, useRef, useState } from 'react'
import Firebase from '../Firebase'
import './Style1.css'
import EditDetail from './EditDetail'
const Details = () => {
 const[Obj,SetObj]= useState({
    Email:"",
    Phone:""
  })
  const[Obj1,SetObj1]= useState({})
  const[Condition,SetCondition]= useState(false)
  useEffect(function()
  {
    Firebase.child(`Mycollege/Details`).on("value",function(snap)
    {
      if(snap.val()==null)
      {
        SetObj1({})
      }
      else
      {
        SetObj1(snap.val())
        SetCondition(true)
      }
    })
  },[])
  function set(event)
  {
    SetObj({...Obj,[event.target.name]:event.target.value})
  }
  function Submit(e)
  {
    e.preventDefault()
    if(Obj.Email!="" && Obj.Phone!="")
    {
      Firebase.child(`Mycollege/Details`).set(Obj,err=>{
        if(err)
        {
          alert("Error Occured")
        }
        else
        {
          alert("Detail Uploaded")
        }
      })
    }
    else
    {
      alert("Field is empty")
    }
  }
  return (
    <div>
       {
        Condition?
        <>
        <EditDetail/>
        </>:<>
         <div className="detail-block">
          <form>
            <label className='labelt'>Email:</label>
            <input type="text" className='form-control' onChange={set} name='Email' placeholder='Enter college Email' />
            <label className='labelt'>Phone:</label>
           <input type="text" className='form-control' onChange={set} name='Phone' placeholder='Enter college Phone' />
           <div className='align'>
           <button className='btn btn-success' onClick={Submit}>Submit</button>
           </div>
          </form>    
        </div></>
       }
    </div>
  )
}

export default Details
