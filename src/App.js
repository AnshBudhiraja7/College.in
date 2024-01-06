import React,{useState,useEffect} from 'react'
import Home from './UserPages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Preloader from './UserComponent/Preloader'
import About from './UserPages/About'
import Contact from './UserPages/Contact'
import Signup from './UserPages/Signup'
import Login from './UserPages/Login'
import Departments from './UserPages/Departments'
import AdmissionInquiry from './UserPages/AdmissionInquiry'
import AdminAccount from './AdminPages/AdminAccount'
import Dashboard from './AdminPages/Dashboard'
import DisplayContact from './AdminPages/DisplayContact'
import Courses from './AdminPages/Courses'
import Team from './AdminPages/Team'
const App = () => {
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {screenLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Departments' element={<Departments/>}></Route>
        <Route path='/AdmissionInquiry' element={<AdmissionInquiry/>}></Route>
        <Route path='/AdminAccount' element={<AdminAccount/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/DisplayContact' element={<DisplayContact/>}></Route>
        <Route path='/Courses' element={<Courses/>}></Route>
        <Route path='/Team' element={<Team/>}></Route>
        </Routes></BrowserRouter>
      )}
      



    </div>
  )
}

export default App
