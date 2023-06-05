import React from "react";
import { navItems } from "../../constans/navItems";
import "./style.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container">
      <div className="navLogoContainer">
        <h1 className="navLogo">Kozmingram</h1>
      </div>
      <ul className="navMenu">
        {navItems.map((navItem) => {
          return (
            <li className="navItem" key={navItem.key}>
              <Link className="navLink" to={navItem.path}>
                <div className="navIcon">{navItem.icon} </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
