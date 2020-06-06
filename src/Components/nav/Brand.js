import React from 'react'
import { NavLink} from 'react-router-dom'
import styled from "styled-components";

//import logo from "../../assets/logo-min.png";

const Brand = () => {
  return (
   <Paragraph style={{ textDecoration:"none"}} to="/">/</Paragraph>
  )
}

export default Brand

const Paragraph = styled(NavLink)`
  height: 85%;
  margin: 2% 0;
  text-transform:uppercase;
  font-size: 30px;
  color:#020E40;
  &:hover {
    color: #AA1FD6;
  }
`;
