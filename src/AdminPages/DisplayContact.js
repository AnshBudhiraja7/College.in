import React from 'react'
import AdminHeader from '../AdminComponent/AdminHeader'
import Contacts from '../AdminComponent/Contacts'
import Banner from '../UserComponent/Banner'

const DisplayContact = () => {
  return (
    <div>
      <AdminHeader DisplayContact='active'/>
      <Banner title="Contacts"/>
      <Contacts/>
    </div>
  )
}

export default DisplayContact
