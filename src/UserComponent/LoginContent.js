import React,{useState} from 'react'
import Firebase from "../Firebase"
import { useNavigate } from 'react-router-dom'
const LoginContent = () => {
  const[Obj,SetObj]= useState({
    User:"",
    Pass:"",
  })
  var navigate=useNavigate()
  function set(e)
  {
    SetObj({...Obj,[e.target.name]:e.target.value})
  }
  function Login(e)
  {
    e.preventDefault()
    if(Obj.User!="" && Obj.Pass!="")
    {
      if(Obj.User=="Admin" && Obj.Pass=="Admin123")
      {
        navigate("/AdminAccount") 
      }
      else
      {
        Firebase.child("MyCollege").orderByChild("Status").equalTo("Approved").on("value",function(snap)
        {
          console.log(snap.val());
          if(snap.val()==null)
          {
            alert("No data Found")
          }
          else
          {
            var data=[];
            data= Object.keys(snap.val()).filter(function(key)
            {
              if(Obj.User==snap.val()[key].Username && Obj.Pass==snap.val()[key].Password)
              {
                return key
              }
            })
            if(data!="")
            {
              navigate("/Dashboard")
            }
            else
            {
              alert("Wrong Username and Password")
            }
          }
        })
      }
    }
    else
    {
      alert("Field is empty")
    }
    
  }
  return (
   <div className="inner-page-wrapper login">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-5 col-md-offset-1">
        <form action="#">
          <div className="form-group"> <i className="fa fa-user" aria-hidden="true" />
            <input type="text" onChange={set} name="User" placeholder="Username" />
          </div>
          <div className="form-group"> <i className="fa fa-envelope" aria-hidden="true" />
            <input type="password" onChange={set} name="Pass" placeholder="Password" />
          </div>
          <div className="forget-password">
            <div className="pull-left">
              <input type="checkbox" id="test1" />
              <label htmlFor="test1">Remember Me</label>
            </div>
            <a href="javascript:void(0)" className="pull-right">Forgot Password ?</a> </div>
          <button type="submit" onClick={Login} className="btn">Submit</button>
        </form>
      </div>
      <div className="col-sm-6 col-md-5">
        <div className="new-account">
          <h3>NEW HERE ?<br />
            <span>Registration is free and easy!</span></h3>
          <ul>
            <li><i className="fa fa-caret-right" aria-hidden="true" /> Lorem ipsum dolor sit amet</li>
            <li><i className="fa fa-caret-right" aria-hidden="true" /> Consetetur sadipscing</li>
            <li><i className="fa fa-caret-right" aria-hidden="true" /> Sed diam nonumy eirmod tempor </li>
          </ul>
          <a href="/Signup">Create an Account</a></div>
      </div>
    </div>
  </div>
</div>

  )
}

export default LoginContent
