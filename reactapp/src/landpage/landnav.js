import React from "react";
import "./landnav.css";
import logo2 from "./logoland.svg";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";
 import { selectUser } from "../redux/user";
import { useState } from "react";
export default function Landnav(){
    const [isSidebarVisible, setSidebarVisibility] = useState(false);
   
    const user=useSelector(selectUser);

  const handleMouseEnter = () => {
    setSidebarVisibility(true);
  };

  const handleMouseLeave = () => {
    setSidebarVisibility(false);
  };
    return(
        <div className="navback">
          {/* var html =  <div class="sidebar">
<a class="active" href="#home">Home</a>
<a href="#news">News</a>
<a href="#contact">Contact</a>
<a href="#about">About</a>'
</div>' */}
        <nav className="nav2">
            <a href="/" className="sitename2">
            <img className="logo2" src={logo2} alt="logo2"/>
            EliteLove
            </a>
            <ul classname="navul">
                <li>
                    <a href="/home"><Link to="/">HOME</Link></a>
                </li>
                <li>
                    <a href="/suc"><Link to="/success">HAPPY STORIES</Link></a>
                </li>
                <li>
                    <a href="/plans"><Link to="/search">SEARCH</Link></a>
                </li>
                <li>
                    <a href="/plans"><Link to="/match">MATCHES</Link></a>
                </li>
                <li>
                  <a href="/logout"><Link to="/feed">FEEDBACK</Link></a>
                  </li>
                  <li>
                  <a href="/logout"><Link to="/login">LOG OUT</Link></a>
                  </li>
           <div onMouseEnter={handleMouseEnter}>
              <AccountCircleIcon style={{fontSize:"40px"}}/>
              </div>
              <div>{user.name}</div>              
            </ul>
            {/* {isSidebarVisible && (
        <div className="sidebar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ul className="sidebar-nav" style={{display:'block'}}>
            <li className="sidebar-item">
              <a className="sidebar-link">
               <Link to="/profile"> Your Profile</Link>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                Help
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                Logout
                <div  className="logouticon" >
                <LogoutIcon style={{ fontSize: '15px',color: 'whitesmoke' }}/>
                </div>
              </a>
            </li>
          </ul>
        </div>
            )} */}
            {/* </div> */}
        </nav>
        </div>
    );
}