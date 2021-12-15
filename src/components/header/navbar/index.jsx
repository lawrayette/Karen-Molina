import React from "react";
import { Link } from "gatsby";
import Container from "../../container";
import NavbarLinks from "../links";
import { Wrapper } from "./styles";


export default () => (
  <Wrapper as={Container}>
    <Link to="/">VoidRizoma</Link>
    <NavbarLinks desktop />
  </Wrapper>
);