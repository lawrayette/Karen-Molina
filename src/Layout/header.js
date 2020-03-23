import React from "react";
import { Link } from "react-router-dom";
import Typical from 'react-typical'

const steps = [
  'voidRizoma()', 2000,
]
export default function header() {
  return (
    <header className="bck_red">
      <Link
        to="/"
        style={{
          color: "white",
          fontSize:'35px',
          textDecoration: "none"
        }}
      >
       <Typical wrapper="span" steps={steps} loop={1} />
      </Link>
    </header>
  );
}
