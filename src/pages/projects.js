import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Freely from "../images/freely.png";
import MS from "../images/ms.png";
import Spec from "../images/specChain.png";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color:black;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

class talk extends React.Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Freely", "MS Connect", "SpecChain"],
    pages: [
      "https://talkfreely.io/",
      "https://beta.msconnect.io/",
      "https://specchain.io/",
    ],
    desc: [Freely, MS, Spec],
  };

  showBoxes = () =>
    this.state.positions.map((box, i) => (
      <div>
        <a
          href={this.state.pages[i]}
          style={{ fontSize: "26px", color: "#4de4cf" }}
        >
          {this.state.positions[i]}
        </a>
        <img
          src={this.state.desc[i]}
          style={{ margin: "25px auto" }}
          alt={this.state.positions[i]}
        />
      </div>
    ));

  render() {
    return (
      <div style={{
        backgroundColor: "#efefef",
        backgroundImage:
          "-webkit-linear-gradient(290deg, #efefef 45%, #282c3d  45%",
        minHeight: "90vh",
      }}>
        <Layout>
          <SEO title="projects()" />
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "75vh",
              width: "80%",
              margin: "0 auto",
            }}
          >
            <p style={{ fontSize: "18px" }}>
              My first job as developer was in King Tide. KT is a digital agency
              based in L.A. and Mexico City. When I worked in KT, I was involved
              in approximately 20 projects. Some of those projects I had the
              responsibility of deciding the development stack. Some projects
              that I has envolved:
            </p>
            {this.showBoxes()}
          </Container>
        </Layout>
      </div>
    );
  }
}

export default talk;
