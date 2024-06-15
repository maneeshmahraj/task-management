
import { FaBars } from "react-icons/fa6";
import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
   <nav>
    <div className='logo'><span style={{color:"red"}}>ma</span>ne<span style={{color:"red"}}>es</span>h</div>
    <ul>
        <li><Link to="home" className='link'>Home</Link></li>
        <li><Link to="insert" className='link'>Insert</Link></li>
        <li><Link to="display" className='link'>Display Data</Link></li>
        <li><Link to="record" className='link'>ShowImployee record</Link></li>
        
    </ul>
    <div className="bar"><input type="checkbox" id="check"/>
    <label for="check"><FaBars  className="bar2"/></label></div>
   </nav>
   <Outlet/>
    </>
  )
}

export default Layout