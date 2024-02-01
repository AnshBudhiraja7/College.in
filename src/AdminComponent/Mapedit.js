import React, { useEffect, useRef, useState } from 'react'
import Firebase from '../Firebase'

const Mapedit = (props) => {
   const[Obj,SetObj]= useState({})
   var Map=useRef()
    useEffect(function()
    {
        Firebase.child("Mycollege/Map").on("value",function(snap)
        {
            if(snap.val()==null)
            {
                SetObj({})
            }
            else
            {
                SetObj(snap.val())
                Map.current.value=snap.val().Map
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
        if(Obj.Map!="")
        {
            Firebase.child("Mycollege/Map").update(Obj,err=>{
                if(err)
                {
                    alert("Error Occured")
                }
                else
                {
                    alert("Map Updated")
                    props.fun()
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
      <div className="detail-block">
            <form>
              <label className='labelt'>Enter Embeded Map Code :</label>
              <textarea ref={Map} type="text" onChange={set} className='form-control'  cols="30" rows="5" name='Map'  placeholder='Enter College location' ></textarea>
             <div className='align'>
             <button className='btn btn-success' onClick={Submit}>Submit</button>
             </div>
            </form>    
          </div>
    </div>
  )
}

export default Mapedit
