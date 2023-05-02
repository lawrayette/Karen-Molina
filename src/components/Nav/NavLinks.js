import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
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
    background: linear-gradient(
      to left,
      #7900ff 20%,
      #df00ff 40%,
      #df00ff 60%,
      #7b04ff 80%
    );
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #df00ff;
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
      <NavItem to="/">Home</NavItem>
      <NavItem to="/404">Blog</NavItem>
    </>
  )
}

export default NavbarLinks
