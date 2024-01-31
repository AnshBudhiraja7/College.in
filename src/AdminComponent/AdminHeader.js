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
              <li> <Link to="mailto:support@yourdomain.com"><i className="fa fa-envelope-o" aria-hidden="true" />support@yourdomain.com</Link></li>
              <li><i className="fa fa-phone" aria-hidden="true" />+1-0123-456-789</li>
            </ul>
          </div>
          <div className="col-md-7 col-sm-6 hidden-xs">
            <ul className="pull-right">
              <li>
                <ul className="header-social-icons">
                  <li className="facebook"><Link to="#" target="_blank"><i className="fa fa-facebook" /></Link></li>
                  <li className="twitter"><Link to="#" target="_blank"><i className="fa fa-twitter" /></Link></li>
                  <li className="linkedin"><Link to="#" target="_blank"><i className="fa fa-linkedin" /></Link></li>
                  <li className="pinterest"><Link to="#" target="_blank"><i className="fa fa-pinterest" /></Link></li>
                  <li className="google-plus"><Link to="#" target="_blank"><i className="fa fa-google-plus" /></Link></li>
                  <li className="youtube"><Link to="#" target="_blank"><i className="fa fa-youtube" /></Link></li>
                  <li className="dribbble"><Link to="#" target="_blank"><i className="fa fa-dribbble" /></Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav className="main-nav nav navbar fixed-top">
          <div className="logo">
          <Link className="navbar-brand" to="#"><img height={80} width={200} src={Obj.Image?Obj.Image:"images/download.png"} className="logo-change" alt="College Education" /></Link> 
          </div>
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
            <ul className="nav navbar-nav">
              <li>
              <Link to="/Dashboard" id={props.Dashboard}>Dashboard</Link>
              </li>
              <li>
                <Link to="/Team" id={props.Team}>Team</Link>
              </li>
              <li>
                <Link to="/DisplayContact" id={props.DisplayContact}>Contacts</Link>
              </li>
              <li className="dropdown">
                  <Link to="#" className="dropbtn" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <i className="fa hover-inn fa-angle-down" /></Link>
                  <div className="dropdown-content">
                  <Link to="/Login" >Login</Link>
                  <Link to="/Signup" >Sign Up</Link>
                  {/* <Link to="#">Link 3</Link> */}
                  </div>
              </li>
              <li>
                <Link id={props.Courses} to="/Courses">Courses</Link>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <div className="hamburger-menu">
              <Link to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              &#9776;
              </Link>
            </div>
          </div>
        </nav>
  </header>
      </div>
    )
  }
export default AdminHeader
