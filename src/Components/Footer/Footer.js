import React from "react";
import Typical from "react-typical";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const steps = [
  "Maker",
  2000,
  "Frontend",
  2000,
  "STEAM Edu",
  2000,
  "Antropología",
  2000,
  "Cultura Digital",
];

export default function Footer() {
  return (
    <div>
      <FlexContainer className="container footer_container">
        <Fade bottom delay="1500">
          <Typical wrapper="span" steps={steps} loop={1} />
        </Fade>
        <article>
          <Button
            href="https://www.linkedin.com/in/karen-molinac/"
            target="blank"
          >
            linkedin
          </Button>
          <Button href="https://github.com/lawrayette" target="blank">
            github
          </Button>
        </article>
      </FlexContainer>
    </div>
  );
}

const FlexContainer = styled.div`
  max-width: 120rem;
  color:#f7f7f7;
  color: rgb(55, 1, 71);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4%;
  font-size: 18px;
  margin: auto;
  height: 6rem;
`;

const Button = styled.a`
  padding: 3%;
  text-decoration: none;
  text-transform:uppercase;
`;
