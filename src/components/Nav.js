import React, { useState } from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";

function Nav() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSideBar} />
        </Link>
      </div>
      <nav className={`nav-menu ${sideBar ? "active" : "nav-menu-close"}`}>
        <ul className="nav-menu-items">
          <li>
            <GrClose onClick={showSideBar} className="menu-close" />
          </li>
          <Link to="/" onClick={showSideBar}>
            <li className="nav-menu-item-list">
              <BiHomeAlt2 /> Home
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
