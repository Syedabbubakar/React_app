import React from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import logo from "../assets/images/logo1.png"

const Header = () => {
    const location = useLocation()

const currentRoute = location.pathname

const styleLink = ({isActive}) => {
    return {
        color: isActive ? "red" : ""
    }
}

  return (
    <div className="header-wrapper">
      <header>
        <div className="header-logo">
          <img className="img2" src={logo} alt="" />
        </div>
        <div className="header-menus">

          <NavLink style={styleLink} to="/home" className="menu">Home</NavLink>
          <NavLink style={({isActive})=>{
            return isActive ? {backgroundColor:"red",color:"white"} : {}
          }} to="/product" className="menu">Product</NavLink>
          <NavLink style={({isActive})=>{
            return isActive ? {backgroundColor:"red",color:"white"} : {}
          }} to="/about" className="menu">About</NavLink>

        </div>
        <div className="header-auth">
            {
                currentRoute === "/home" || currentRoute === "/about" ? <Link to="/login">Login/SignUp</Link> : <></>
            }
          
        </div>
      </header>
    </div>
  );
};

export default Header;
