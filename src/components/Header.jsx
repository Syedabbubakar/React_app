import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        <div className="header-logo">
          <span>LOGO</span>
        </div>
        <div className="header-menus">
<Link></Link>
          <Link to="/home" className="menu">Hone</Link>
          <Link to="/product" className="menu">Product</Link>
          <Link to="/about" className="menu">About us</Link>

        </div>
        <div className="header-auth">
          <Link to="/login">Login/SignUp</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
