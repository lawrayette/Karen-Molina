import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
display: flex;
    justify-content: center;
    align-items: center;
  text-decoration: none;
  color: #282c3d;
  font-weight: bold;
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
    background: #6a4e98;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #6a4e98;
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
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/workshops">Workshops</NavItem>
      <NavItem to="/talks">Talks</NavItem>
    </>
  )
}

export default NavbarLinks
