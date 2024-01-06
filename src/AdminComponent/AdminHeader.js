import React,{useEffect, useState}  from 'react'
import { Link } from 'react-router-dom'
import "../UserComponent/style.css"
import Firebase from '../Firebase';
const AdminHeader = (props) => {
  const[Obj,SetObj]=useState({})
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  useEffect(function()
  {
    Firebase.child(`Mycollege/Logo`).on("value",function(snap)
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
      <div>
       <header className="wow fadeInDown" data-offset-top={197} data-spy="affix">
    <div className="top-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-6 hidden-xs top-wraper-left">
            <ul>
              <li> <a href="mailto:support@yourdomain.com"><i className="fa fa-envelope-o" aria-hidden="true" />support@yourdomain.com</a></li>
              <li><i className="fa fa-phone" aria-hidden="true" />+1-0123-456-789</li>
            </ul>
          </div>
          <div className="col-md-7 col-sm-6 hidden-xs">
            <ul className="pull-right">
              <li>
                <ul className="header-social-icons">
                  <li className="facebook"><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
                  <li className="twitter"><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
                  <li className="linkedin"><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
                  <li className="pinterest"><a href="#" target="_blank"><i className="fa fa-pinterest" /></a></li>
                  <li className="google-plus"><a href="#" target="_blank"><i className="fa fa-google-plus" /></a></li>
                  <li className="youtube"><a href="#" target="_blank"><i className="fa fa-youtube" /></a></li>
                  <li className="dribbble"><a href="#" target="_blank"><i className="fa fa-dribbble" /></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav className="main-nav nav navbar fixed-top">
          <div className="logo">
          <a className="navbar-brand" href="#"><img height={80} width={200} src={Obj.Image?Obj.Image:"images/download.png"} className="logo-change" alt="College Education" /></a> 
          </div>
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
            <ul className="nav navbar-nav">
              <li>
              <a href="/Dashboard" id={props.Dashboard}>Dashboard</a>
              </li>
              <li>
                <a href="/Team" id={props.Team}>Team</a>
              </li>
              <li>
                <a href="/DisplayContact" id={props.DisplayContact}>Contacts</a>
              </li>
              <li className="dropdown">
                  <a href="#" className="dropbtn" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <i className="fa hover-inn fa-angle-down" /></a>
                  <div className="dropdown-content">
                  <a href="/Login" >Login</a>
                  <a href="/Signup" >Sign Up</a>
                  {/* <a href="#">Link 3</a> */}
                  </div>
              </li>
              <li>
                <a id={props.Courses} href="/Courses">Courses</a>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              &#9776;
              </a>
            </div>
          </div>
        </nav>
  </header>
      </div>
    )
  }
export default AdminHeader
