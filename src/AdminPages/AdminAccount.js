import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminComponent/AdminHeader'
import Firebase from "../Firebase"
const AdminAccount = () => {
   const[Obj,SetObj] =useState()
    useEffect(function()
    {
        Firebase.child("MyCollege").on("value",function(snap)
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
    function Approve(key)
    {
        Firebase.child(`MyCollege/${key}`).update({Status:"Approved"},err=>{
            if(err)
            {
                alert("Error Occured try again later")
            }
            else
            {
                alert("Approved")
            }
        })
    }
    function Delete(key)
    {
        Firebase.child(`MyCollege/${key}/Status`).remove(err=>{
            if(err)
            {
                alert("Error Occured try again later")
            }
            else
            {
                alert("Approved")
            }
        })
    }
  return (
    <div className='container'>
        <div className='bg-dark'>
      <table className='table table-bordered table-striped table-hover table condensed'>
        <thead>
            <tr>
            <th>Sr No.</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>Operation</th>
            </tr>
        </thead>
        <tbody>
            {
                Obj?(Object.keys(Obj).reverse().map(function(key,index)
                {
                    if(Obj[key].Status=="Approved")
                    {
                        return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{Obj[key].Email}</td>
                            <td>{Obj[key].Phone}</td>
                            <td>{Obj[key].Username}</td>
                            <td>{Obj[key].Password}</td>
                            <td><button className='btn btn-success'>Approved</button>
                            <button className='btn btn-danger' onClick={()=>Delete(key)}>Delete Approval</button></td>
                        </tr>
                        )
                    }
                    else
                    {
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{Obj[key].Email}</td>
                            <td>{Obj[key].Phone}</td>
                            <td>{Obj[key].Username}</td>
                            <td>{Obj[key].Password}</td>
                            <td><button className='btn btn-success' onClick={()=>Approve(key)}>Approve</button></td>
                        </tr>
                    )
                    }
                })):""
            }
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default AdminAccount
