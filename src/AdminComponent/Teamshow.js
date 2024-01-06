import React,{useState,useEffect} from 'react'
import Firebase from '../Firebase'
import EditTeam from './EditTeam'
const Teamshow = (props) => {
  const[Obj,SetObj]=useState()
  const[Btn,SetBtn]=useState(true)
  const[Edit,SetEdit]=useState(false)
  const[Key,SetKey]=useState("")
   useEffect(function()
   {   
       Firebase.child(`Mycollege/Team`).on("value",function(snap)
       {
           if(snap.val()==null)
           {
               SetObj({})
           }
           else
           {
               SetObj(snap.val())
               if(Object.keys(snap.val()).length<4)
               {
                   SetBtn(true)
               }
               else
               {
                   SetBtn(false)
               }
           }
       })
   },[])
   function Delete(key)
    {
        Firebase.child(`Mycollege/Team/${key}`).remove(err=>{
            if(err)
            {
                alert("Error Occured Try again later")
            }
            else
            {
                alert("Team Detail Deleted")
            }
        })
    }
    function edit(key)
    {
        SetEdit(true)
        SetKey(key)
    }
    function NotShow()
    {
        SetEdit(false)
        SetKey("")
    }
  return (
    <div>
      {
        Edit?(<EditTeam id={Key} fun={NotShow}/>):
      
      <div className='container'>
       <div className="team-wrapper team">
  <div className="container">
    <div className="row">
      <div className="title">
        <h2>Expert <span>Team</span></h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
      {
          Obj?Object.keys(Obj).reverse().map(function(key)
          {
              return(
                <div className="col-sm-6 col-md-3">
                <div className="team-wrap">
                <div>
                <button className="btn btn-primary" onClick={()=>edit(key)}>Edit</button><button className="btn btn-danger" onClick={()=>Delete(key)}>Delete</button></div>
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
            }):""
      }
    </div>
  </div>
  </div>
  {
    Btn?<div className='text-center'>
    <button className='btn btn-primary' onClick={props.Add}>Add Courses</button></div>:""
  }
</div>
}
    </div>
  )
}

export default Teamshow
