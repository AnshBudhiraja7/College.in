import React, { useEffect, useRef, useState } from 'react'
import "./Style1.css"
import Firebase from "../Firebase"
import Logoedit from './Logoedit'
const Logo = () => {
 const[Data,SetData]= useState()
 const[Condition,SetCondition]=useState(false)
 useEffect(function()
 {
  Firebase.child(`Mycollege/Logo`).on("value",function(snap)
  {
    if(snap.val()==null)
    {
      SetData({})
    }
    else
    {
      SetData(snap.val())
      SetCondition(true)
    }
  })
 },[])

 function Change(e)
 {
  e.preventDefault()
  SetCondition(false)

 }
 
  return (
    <div>
      {
        Condition?
       <>
          <h2 className='align'>Logo</h2><h5 className='align'>(Size:360x140)</h5>
          <div className="Image-block">
              <img src={Data.Image} alt="" />
          </div>
          <form className='align'>
          <button className='btn btn-primary' id="Change" onClick={Change}>Change</button>
          </form>
          </>
        :<Logoedit data={Data}/>
          
          
      }
    </div>
  )
}

export default Logo