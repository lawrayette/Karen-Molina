import React from "react";
import Navbar from "../Nav/NavBar";

export default function Layout ({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
