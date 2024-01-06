import React,{useState,useEffect} from 'react'
import Teamshow from '../AdminComponent/Teamshow'
import AdminHeader from '../AdminComponent/AdminHeader'
import AddTeam from '../AdminComponent/AddTeam'
import Banner from '../UserComponent/Banner'
import Firebase from '../Firebase'
const Team = () => {
    const[Team,SetTeam]=useState(false)
    useEffect(function()
    {
        Firebase.child(`Mycollege/Team`).on("value",function(snap)
        {
            if(snap.val()==null)
            {
                SetTeam(false)
            }
            else
            {
                SetTeam(true)
            }
        })
    },[])
    function Add()
    {
        SetTeam(false)
    }
  return (
    <div>
      <AdminHeader Team="active"/>
      <Banner title="Team"/>
      <>
        {
            Team?(<Teamshow Add={Add}/>):(<AddTeam/>)
        }
      </>
      
    </div>
  )
}

export default Team
