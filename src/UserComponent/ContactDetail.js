import React, { useState } from 'react'
import Firebase from '../Firebase'
const ContactDetail = () => {
const[Obj,SetObj]=useState({
  FName:"",
  LName:"",
  Phone:"",
  Message:"",
})
function set(event)
{
  SetObj({...Obj,[event.target.name]:event.target.value})
}
function Submit(e)
{
  e.preventDefault()
  if(Obj.FName!="" && Obj.LName!="" && Obj.Phone!="" && Obj.Message!="")
  {
    Firebase.child("Mycollege/Contacts").push(Obj,err=>{
      if(err)
      {
        alert("Error Occured try again later")
      }
      else
      {
        alert("Your request has been submitted")
      }
    })
  }
  else
  {
    alert("Field is empty")
  }
}
  return (   
<div className="inner-page-wrapper contact-wrapper contact-wrapper2">
  <div className="contact-wrapper2-bg">
    <div className="container">
      <div className="row">
        <div className="contact-details text-center">
          <div className="col-md-3 col-sm-6">
            <div className="box-variant-1"><i className="fa fa-map-marker" aria-hidden="true" />
              <h3>Address</h3>
              <p>1980 Fulton Street San Diego, <span>CA 94117-1080 USA</span></p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box-variant-1"><i className="fa fa-envelope-o" aria-hidden="true" />
              <h3>Email</h3>
              <p><a href="mailto:support@yourdomain.com">support@yourdomain.com</a></p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box-variant-1"> <i className="fa fa-phone" aria-hidden="true" />
              <h3>Contact Number</h3>
              <p>0800 123 46 0000</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box-variant-1"> <i className="fa fa-volume-control-phone" aria-hidden="true" />
              <h3>Customer Care</h3>
              <p>0800 123 46 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact2">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8">
          <div className="contact-text-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <form>
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="form-group">
                    <input onChange={set} name="FName" required className="form-control form-item" placeholder="First Name" type="text" />
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="form-group">
                    <input onChange={set} name="LName" required className="form-control form-item" placeholder="Last Name" type="text" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <input onChange={set} name="Phone" required className="form-control form-item" placeholder="Phone Number" type="number" />
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="form-group">
                    <textarea placeholder="Message" onChange={set} name="Message" rows={3} className="form-control form-item" defaultValue={""} />
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
  </div>
</div>
  )
}

export default ContactDetail
