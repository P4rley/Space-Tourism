import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/shared/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <li>
      <a href="/" className="space__navbar-container_links-link">
        <span>00</span> Home
      </a>
    </li>
    <li>
      <a href="/destination" className="space__navbar-container_links-link">
        <span>01</span> Destination
      </a>
    </li>
    <li>
      <a href="/crew" className="space__navbar-container_links-link">
        <span>02</span> Crew
      </a>
    </li>
    <li>
      <a href="/technology" className="space__navbar-container_links-link">
        <span>03</span> Technology
      </a>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="space__navbar">
      <a href="/" className="space__navbar-logo">
        <img src={logo} alt="" />
      </a>

      <div className="space__navbar-container">
        <ul className="space__navbar-container_links">
          <Menu />
        </ul>
      </div>

      <div className="space__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#d0d6f9"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#d0d6f9"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="space__navbar-menu_container">
            <ul className="space__navbar-menu_container-links">
              <Menu />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
