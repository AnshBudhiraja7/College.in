import React ,{useState,useEffect, useRef} from 'react'
import Firebase from '../Firebase'
const Detailedit = (props) => {
    const[Obj,SetObj]= useState({
        Email:"",
        Phone:""
      })
      var Email=useRef()
      var Phone=useRef()
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
            Email.current.value= snap.val().Email
            Phone.current.value= snap.val().Phone
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
          Firebase.child(`Mycollege/Details`).update(Obj,err=>{
            if(err)
            {
              alert("Error Occured")
            }
            else
            {
              alert("Detail Updated")
              props.fun()
              
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
        <div className="detail-block">
          <form>
            <label className='labelt'>Email:</label>
            <input type="text" className='form-control' onChange={set}  ref={Email} name='Email' placeholder='Enter college Email' />
            <label className='labelt'>Phone:</label>
           <input type="text" className='form-control' onChange={set}  ref={Phone} name='Phone' placeholder='Enter college Phone' />
           <div className='align'>
           <button className='btn btn-success' onClick={Submit}>Submit</button>
           </div>
          </form>    
        </div>
    </div>
  )
}

export default Detailedit
