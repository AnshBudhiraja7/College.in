import React, {useEffect, useRef, useState } from 'react'
import Firebase from '../Firebase'
import Preloader from '../UserComponent/Preloader'
const EditContact = (props) => {
   const[Obj,SetObj]=useState()
   const[Obj1,SetObj1]=useState()
   const[Process,SetProcess]=useState(true)
   const FName=useRef()
   const LName=useRef()
   const Phone=useRef()
   const Message=useRef()
    useEffect(function()
    {
        Firebase.child(`Mycollege/Contacts/${props.id}`).on("value",function(snap)
        {
            if(snap.val()==null)
            {
                SetObj({})
                alert("Error Occured try again later")
                props.fun()
            }
            else
            {
                SetObj(snap.val())
                SetObj1(snap.val())
            }
        })
    },[])
    useEffect(function()
    {
       if(Obj1==undefined)
       {
        console.log("Wait for 2 minutes")
       }
       else
       {
        FName.current.value=Obj1.FName
        LName.current.value=Obj1.LName
        Phone.current.value=Obj1.Phone
        Message.current.value=Obj1.Message
       }
       SetProcess(false)
    },[Obj1])
    function set(e)
    {
        SetObj({...Obj,[e.target.name]:e.target.value})
    }
    function Submit(e)
    {
        e.preventDefault()
        if(Obj.FName!="" && Obj.LName!="" && Obj.Phone!="" && Obj.Message!="")
        {
            Firebase.child(`Mycollege/Contacts/${props.id}`).update(Obj,err=>{
                if(err)
                {
                    alert("Error Occured try again later")
                }
                else
                {
                    alert("Contact Updated")
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
   <>
   {
    Process?<Preloader/>:( <div className="inner-page-wrapper contact-wrapper contact-wrapper2">
    {
      Obj?<div className="contact2">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8">
            <div className="contact-text-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <form>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <div className="form-group">
                      <input name="FName" onChange={set} ref={FName} required className="form-control form-item" placeholder="First Name" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <div className="form-group">
                      <input name="LName" onChange={set} ref={LName} required className="form-control form-item" placeholder="Last Name" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input name="Phone" onChange={set} ref={Phone} required className="form-control form-item" placeholder="Phone Number" type="number" />
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="form-group">
                      <textarea placeholder="Message" name="Message" onChange={set} ref={Message} rows={3} className="form-control form-item" defaultValue={""}/>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <button className="btn btn-1" type="submit" onClick={Submit}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div id="google-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198710.35112897935!2d-98.51489117772236!3d38.904562823631146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1471865832140" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>:""
    }
  </div>)
    }</>
  )
}

export default EditContact
