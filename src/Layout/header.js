import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header className="bck_red">
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        Home
      </Link>
    </header>
  );
}
