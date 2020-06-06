import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { useSpring, animated } from "react-spring";

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <NavLink to="/hacklab">hacklab para niñas</NavLink>
          <NavLink to="/ccd">ccd</NavLink>
          {/* <NavLink to="/yo-digital" >mi yo digital</NavLink>*/}
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #f7f7f7;
  z-index: 2;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: rgb(55, 1, 71);
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #aa1fd6;
      border-bottom: 1px solid #aa1fd6;
      transition: all 300ms linear 0s;
    }
  }
`;
