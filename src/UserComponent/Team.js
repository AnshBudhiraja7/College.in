import React, { useEffect, useState } from 'react'
import Firebase from "../Firebase"
const Team = () => {
  const[Obj,SetObj]=useState({})
  useEffect(function()
  {
    Firebase.child("Mycollege/Team").on("value",function(snap)
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
  return (
   <div className="team-wrapper team">
  <div className="container">
    <div className="row">
      <div className="title">
        <h2>Expert <span>Team</span></h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      {
        Obj?(Object.keys(Obj).reverse().map(function(key)
        {
          return(
            <div className="col-sm-6 col-md-3">
            <div className="team-wrap">
              <div className="thumbnail thumbnail-model">
                <figure className="thumbnail-image"><img src={Obj[key].Image} alt=""/> </figure>
                <div className="thumbnail-inner">
                  <div className="link-group"><i className="fa fa-phone" /><a href="#" className="link-white">{Obj[key].Phone}</a></div>
                  <div className="link-group"><i className="fa fa-envelope" /><a href="#" className="link-white">{Obj[key].Email}</a></div>
                </div>
                <div className="thumbnail-caption">
                  <p className="text-header"><a href="#">{Obj[key].Name}</a></p>
                  <div className="divider divider-md bg-teak" />
                  <p className="text-caption">{Obj[key].Designation}</p>
                </div>
              </div>
            </div>
          </div>
          )
        })):""
      }
    </div>
  </div>
</div>

  )
}

export default Team
