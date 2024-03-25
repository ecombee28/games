import React, { useState } from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsKeyboard } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMath } from "react-icons/bi";
import { BiText } from "react-icons/bi";

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
          <Link to="/matchgame" onClick={showSideBar}>
            <li className="nav-menu-item-list">
              <AiOutlineSearch /> Match Game
            </li>
          </Link>
          <Link to="/" onClick={showSideBar}>
            <li className="nav-menu-item-list">
              <BiText /> Word Game
            </li>
          </Link>
          <Link to="/" onClick={showSideBar}>
            <li className="nav-menu-item-list">
              <BsKeyboard /> Spelling Game
            </li>
          </Link>
          <Link to="/" onClick={showSideBar}>
            <li className="nav-menu-item-list">
              <BiMath /> Math Game
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
