import React from "react";
import Container from "../container";

export default () => (
  <div style={{ color: "#ff1361" }}>
    <Container  style={{marginBottom: "10px"}}>
      <span>
        {new Date().getFullYear()} | Built with mucho{" "}
        <span aria-label="love" role="img">
          💖
        </span>{" "}
      </span>
    </Container>
  </div>
);
