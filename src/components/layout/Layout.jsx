import React from "react";
import { Global } from "./styles";
import Header from "../header/index";
import Footer from "../footer";
import Container from "../container";

export default ({ children }) => (
  <>
    <Global />
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);
