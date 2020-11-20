import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Freely from "../images/freely.png"
import MS from "../images/ms.png"
import Spec from "../images/specChain.png"

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

class talk extends React.Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Freely",  "MS Connect", "SpecChain"],
    pages:["https://talkfreely.io/", "https://beta.msconnect.io/", "https://specchain.io/"],
    desc: [Freely, MS, Spec],
  }

  showBoxes = () =>
    this.state.positions.map((box, i) => (
      <div>
        <a href={this.state.pages[i]} style={{fontSize:"26px", color:"#58b5e1"}}>{this.state.positions[i]}</a>
        <img src={this.state.desc[i]} style={{margin:"25px auto"}} alt={this.state.positions[i]}/>
      </div>
    ))

  render() {
    return (
      <div style={{ background: "#feedf9" }}>
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
            <p style={{fontSize:"18px"}}>
              My first job as developer was in King Tide. KT is a digital agency
              based in L.A. and Mexico City. When I worked in KT, I was involved
              in approximately 20 projects. Some of those projects I had the
              responsibility of deciding the development stack. Some projects that I has envolved:
            </p>
            {this.showBoxes()}
          </Container>
          <div
            style={{
              margin: "2% auto",
              textAlign: "center",
              padding: "2%",
              color: "#000",
            }}
          >
            <h2> Let's talk!</h2>
            <div
              style={{
                width: "40%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-around",
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
        </Layout>
      </div>
    )
  }
}

export default talk
