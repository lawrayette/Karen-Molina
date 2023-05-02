import React from "react";
import Navbar from "../Nav/NavBar";

export default function ({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
