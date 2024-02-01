import React, { useEffect, useState } from 'react'
import Firebase from "../Firebase"
import EditContact from './EditContact'
const Contacts = () => {
   const[Obj,SetObj]=useState()
   const[Edit,SetEdit]=useState(false)
   const[Key,SetKey]=useState("")
    useEffect(function()
    {
        Firebase.child('Mycollege/Contacts').on("value",function(snap)
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
    function Call(p)
    {
        window.open(`tel:${p}`, '_self');
    }
    function Del(key)
    {
        Firebase.child(`Mycollege/Contacts/${key}`).remove(err=>{
            if(err)
            {
                alert("Error occured try again later")
            }
            else
            {
                alert("Contact Deleted")
            }
        })
    }
    function Show(key)
    {
        SetKey(key)
        SetEdit(true)
    }
    function NotShow()
    {
        SetKey("")
        SetEdit(false)
    }
  return (
    <div>
        {
            Edit?<EditContact id={Key} fun={NotShow}/>:<div className='container'>
            <table className='table table-bordered table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Obj?Object.keys(Obj).reverse().map(function(key,index)
                        {
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{`${Obj[key].FName}${Obj[key].LName}`}</td>
                                    <td>{Obj[key].Phone}</td>
                                    <td>{Obj[key].Message}</td>
                                    <td><button className='btn btn-success' onClick={()=>Call(Obj[key].Phone)}>Call</button>
                                        <button className='btn btn-danger' onClick={()=>Show(key)}>Edit</button>
                                    <button className='btn btn-danger' onClick={()=>Del(key)}>Delete</button></td>
                                </tr>
                            )
                        }):""
                    }
                </tbody>
            </table>
            </div>
        }
    </div>
  )
}

export default Contacts
