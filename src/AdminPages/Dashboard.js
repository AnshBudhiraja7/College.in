import React from 'react'
import AdminHeader from '../AdminComponent/AdminHeader'
import Banner from "../UserComponent/Banner"
import "../AdminComponent/Style1.css"
import Row from '../AdminComponent/Row'
const Dashboard = () => {
  return (
    <div>
      <AdminHeader Dashboard="active"/>
      <Banner title="Dashboard"/>
      <Row/>
    </div>
  )
}

export default Dashboard
