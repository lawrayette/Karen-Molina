import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #5642c1;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #5642c1;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #5642c1;
    font-weight:800;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="#name">About</NavItem>
      <NavItem to="/404">Services</NavItem>
      <NavItem to="/">Gallery</NavItem>
      <NavItem to="/404">Contact</NavItem>
    </>
  )
}

export default NavbarLinks