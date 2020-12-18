import React from "react";
import styled from "styled-components"

const Footer= styled.nav`
  height: auto;
  display: flex;
  background-color: #282c3d;
  position: relative;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  width:100%;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: auto;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

export default function footer() {
  return (
    <Footer>
      <div
        style={{
          margin: "2% auto",
          textAlign: "center",
          color: "#4de4cf",
          width:"500px",

        }}
      >
        <h2> Let's talk!</h2>
        <div
          style={{
            display:"flex",
            justifyContent:"space-around",
            marginTop:"20px"
          }}
        >
          <a href="https://github.com/voidrizoma">
            <img
              src="https://www.flaticon.es/svg/static/icons/svg/2111/2111432.svg"
              width="40px"
              alt="contact"
            />
          </a>
          <a href="https://www.linkedin.com/in/karen-molinac/">
            <img
              src="https://www.flaticon.es/svg/static/icons/svg/1384/1384030.svg"
              width="40px"
              alt="contact"
            />
          </a>
          <a href="mailto:karenemece@gmail.com">
            <img
              src="https://www.flaticon.es/svg/static/icons/svg/646/646094.svg"
              width="40px"
              alt="contact"
            />
          </a>
        </div>
      </div>
    </Footer>
  );
}
