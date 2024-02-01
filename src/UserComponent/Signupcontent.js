import React, { useRef, useState } from 'react'
import Firebase from "../Firebase"
const Signupcontent = () => {
 const[Obj,SetObj]= useState({
    Username:"",
    Email:"",
    Phone:"",
    Password:"",
  })
  const check=useRef()
  const message=useRef()
  const submit=useRef()
  function set(e)
  {
    SetObj({...Obj,[e.target.name]:e.target.value})
  }
  function Register(e)
  {
      e.preventDefault()
      if(check.current.checked==true)
      {
        if(Obj.Username!="" && Obj.Password!="" && Obj.Email!="" && Obj.Phone!="")
        {
          Firebase.child('MyCollege').push(Obj,err=>{
            if(err)
            {
              alert("Error Occured Try again later")
            }
            else
            {
              alert("Your account request is sent Wait for approval")
            }
          })
        }
        else
        {
          alert("Field is empty")
        }
      }
      else
      {
        alert("Plz read terms and conditions")
      }
  }
  function Check(e)
  {
    if(e.target.value!="")
    {
      if(e.target.value=="Admin" || e.target.value=="admin")
      {
      message.current.innerHTML="Username is already taken"
      message.current.className="red"
      submit.current.style.display="none"
      SetObj({...Obj,[e.target.name]:""})
       }
       else
      {
        Firebase.child("MyCollege").on("value",function(snap)
        {
          if(snap.val()==null)
          {
            message.current.innerHTML="Username is perfect"
            message.current.className="green"
            submit.current.style.display="block"
            SetObj({...Obj,[e.target.name]:e.target.value})
          }
          else
          {
            Object.keys(snap.val()).map(function(key)
            {
              if(e.target.value==snap.val()[key].Username)
              {
                message.current.innerHTML="Username is already taken"
                message.current.className="red"
                submit.current.style.display="none"
                SetObj({...Obj,[e.target.name]:""})
              }
              else
              {
                 message.current.innerHTML="Username is perfect"
                 message.current.className="green"
                 submit.current.style.display="block"
                 SetObj({...Obj,[e.target.name]:e.target.value})
              }
            })
          }
        })
       
      }
    }
    else
    {
      message.current.innerHTML="Don't use space between your Username"
      message.current.className="red"
      submit.current.style.display="block"
      SetObj({...Obj,[e.target.name]:""})
    }
  }

  return (
   <div className="inner-page-wrapper login">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-5 col-md-offset-1">
        <form action="#">
          <div className="form-group"> <i className="fa fa-user" aria-hidden="true" />
            <input type="text" onChange={Check} name="Username" placeholder="Username" />
          </div>
          <h5 className='red' ref={message}>Don't use space between your Username</h5>
          <div className="form-group"> <i className="fa fa-envelope" aria-hidden="true" />
            <input type="email" onChange={set} name="Email" placeholder="Email" />
          </div>
          <div className="form-group"> <span>+91</span>
            <input type="number" onChange={set} name="Phone" placeholder="Phone" />
          </div>
          <div className="form-group"> <i className="fa fa-key" aria-hidden="true" />
            <input type="password" onChange={set} name="Password" placeholder="Password" />
          </div>
          <div className="forget-password">
            <div className="pull-left">
              <input type="checkbox" ref={check} id="test2" />
              <label htmlFor="test2">Terms and Conditions apply</label>
            </div>
          </div>
          <button type="submit" ref={submit} className="btn" onClick={Register}>Register</button>
        </form>
      </div>
      <div className="col-sm-6 col-md-5">
        <div className="new-account reg">
          <h3>New <strong>Education</strong> Account</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
          <ul>
            <li><i className="fa fa-caret-right" aria-hidden="true" /> Lorem ipsum dolor sit amet, consetetur</li>
            <li><i className="fa fa-caret-right" aria-hidden="true" /> Sadipscing elitr, sed diam nonumy eirmod</li>
            <li><i className="fa fa-caret-right" aria-hidden="true" /> Nonumy eirmod tempor invidunt ut </li>
            <li><i className="fa fa-caret-right" aria-hidden="true" /> Lorem ipsum dolor sit amet</li>
          </ul>
          <a href="/Login">Login</a> </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Signupcontent
