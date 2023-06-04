import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: #1d1d1d;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid white;
`;
export const NavLogoContainer = styled.div`
  justify-self: flex-start;
  width: 80%;
  padding-left: 20px;
`;
export const NavLogo = styled.h1`
  font-family: "Pacifico", cursive;
  cursor: default;
  font-size: 40px;
  color: white;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style: none;
  width: 20%;
`;

export const NavItem = styled.li`
  cursor: pointer;
`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
export const NavIcon = styled.div`
  width: 60px;
  height: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;

  &:hover {
    font-size: 40px;
    color: gray;
  }
`;