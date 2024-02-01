import React, { useEffect, useState } from 'react'
import Firebase from '../Firebase'
import MapShow from './MapShow'
const MapDetails = () => {
   const[Obj,SetObj]= useState({
    Map:""
   })
   const[Obj1,SetObj1]= useState({})
   const[Condition,SetCondition]=useState(false)
   useEffect(function()
   {
    Firebase.child("Mycollege/Map").on("value",function(snap)
    {
        if(snap.val()==null)
        {
            SetObj1({})
            SetCondition(false)
        }
        else
        {
            SetObj1(snap.val())
            SetCondition(true)
        }
    })
   },[])
   function set(e)
   {
    SetObj({...Obj,[e.target.name]:e.target.value})
   }
   function Submit(e)
   {
    e.preventDefault()
    if(Obj.Map!="")
    {
        Firebase.child("Mycollege/Map").set(Obj,err=>{
            if(err)
            {
                alert("Error Occured")
            }
            else
            {
                alert("Map uploaded")
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
        {
            Condition?<MapShow data={Obj1}/>:<div className="detail-block">
            <form>
              <label className='labelt'>Enter Embeded Map Code :</label>
              <textarea type="text" className='form-control'  cols="30" rows="5" name='Map' onChange={set} placeholder='Enter College location' ></textarea>
             <div className='align'>
             <button className='btn btn-success' onClick={Submit}>Submit</button>
             </div>
            </form>    
          </div>
        }  
    </div>
  )
}

export default MapDetails
