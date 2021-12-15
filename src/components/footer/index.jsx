import React from "react";
import Container from "../container";

export default () => (
  <div style={{ color: "#ff1361" }}>
    <Container>
      <span>
        {new Date().getFullYear()} | Built with harto{" "}
        <span aria-label="love" role="img">
          💖
        </span>{" "}
      </span>
    </Container>
  </div>
);
