import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import { Wrapper } from './styles'

const NavItem = styled(Link)`
  text-decoration: none;
  color: #a6034e;
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
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: #a6034e;
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

export default ({ desktop }) => (
	<Wrapper desktop={desktop}>
    <NavItem to="/about">About Me</NavItem>
    <NavItem to="/">Github</NavItem>
    <NavItem to="/">dev.to</NavItem>
	</Wrapper>
)