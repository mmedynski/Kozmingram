import React from "react";
import { FaHome, FaCompass } from "react-icons/fa";
import {
  Container,
  NavMenu,
  NavLink,
  NavIcon,
  NavItem,
  NavLogo,
  NavLogoContainer,
} from "./NavBar.styled";

const Navigation = () => {
  const navItems = [
    { path: "/", icon: <FaHome />, key: "home" },
    { path: "/explore", icon: <FaCompass />, key: "explore" },
  ];

  return (
    <Container>
      <NavLogoContainer>
        <NavLogo>Kozmingram</NavLogo>
      </NavLogoContainer>
      <NavMenu>
        {navItems.map((navItem) => {
          return (
            <NavItem key={navItem.key}>
              <NavLink to={navItem.path}>
                <NavIcon>{navItem.icon} </NavIcon>
              </NavLink>
            </NavItem>
          );
        })}
      </NavMenu>
    </Container>
  );
};

export default Navigation;
