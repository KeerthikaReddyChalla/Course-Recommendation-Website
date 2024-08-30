import React, { useState } from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";

function Header() {
  const navigate=useNavigate();
  const handleSigninClick = () => {
    navigate('/Signin');
  }
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    
    <div
      style={{ minHeight: "4vh", backgroundColor: "black" }}
      className="header-container"
    >
      <h1 className="logo">Envision</h1>
      
      <div className="menu-bars">
      <button className="login-button p-2" onClick={handleSigninClick}>Sign In</button>
        <FaBars onClick={showSidebar} />
      </div>
      
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span1>{item.title}</span1>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Header;
