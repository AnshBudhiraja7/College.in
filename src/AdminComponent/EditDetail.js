import React, { useEffect, useState } from 'react'
import Detailedit from './Detailedit'
import Firebase from '../Firebase'

const EditDetail = () => {
   const[Condition,SetCondition]= useState(false)
   const[Obj,SetObj]=useState({})
   useEffect(function()
   {
    Firebase.child(`Mycollege/Details`).on("value",function(snap)
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
   function Change()
   {
    SetCondition(true)
   }
   function Reset()
   {
    SetCondition(false)
   }
  return (
    <div>
      {
        Condition?
        <Detailedit fun={Reset}/>:
        <div className="detail-block">
        <form>
            <label className='labelt'>Email:</label>
          <label className='form-control'>{Obj.Email?Obj.Email:""}</label>
          <label className='labelt'>Phone Number:</label>
          <label className='form-control'>{Obj.Phone?Obj.Phone:""}</label>
         <div className='align'>
         <button className='btn btn-primary' onClick={Change}>Change</button>
         </div>
        </form>
       
      </div>
      }
    </div>
  )
}

export default EditDetail
