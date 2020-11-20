import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../images/foto.png"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const Paragraph = styled.p`
  font-size: 22px;
  color:white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Boxes = styled.div`
width: 50%;
justify-content: center;
align-items: center;
margin: 2%;
padding:1%;

@media (max-width: 768px) {
  width: 80%;
}
`

const IndexPage = () => (
  <div style={{ background: "#7a055b" }}>
    <Layout>
      <SEO title="aboutMe()" />
      <Container>
        <Boxes>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "1%",
              color:"white",
            }}
          >
            <h1>Hi, my name is Karen Molina</h1>
          </div>

          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "1%",
            }}
          >
            <Paragraph>
              I was born and rised in Mexico since I was a child, I remember
              being into science. I used to want to be a biologist, so I studied
              biology at UNAM.
            </Paragraph>
            <Paragraph>
              But when I was study biology, I discovered a lot of authors that
              wrote about humanities, pholosophy, and anthopology. In
              consequence, I dropped Biology and started to study social
              anthopology at UAM. One day I woke up with curiosity about FS, and
              I using it since there, so I wrote my research about it. Then I
              discovered many FS communities and realized that many of the
              contributors where engineering students or graduated engineers. It
              was there when I started to leadn about coding. My first approach
              wa wirh Arduino, since there, I'm really into digital cultural
              issues. I'm teacher on many workshops STEAM that I develop. I'm a
              contributor to many foundations, schools, and organizations. Since
              2018 I'm a web developer. Currently, I'm a frontend developer at
              Fintech Startup.
            </Paragraph>
          </div>
        </Boxes>
        <Boxes>
          <img
            src={Image}
            style={{
              borderRadius: "25% 10%",
              border: "8px solid transparent",

            }}
            alt="voidRizoma"
          />
        </Boxes>
      </Container>
      <div
        style={{
          margin: "2% auto",
          textAlign: "center",
          color: "#58b5e1",
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
              style={{filter: "invert(1)",}}
              alt="contact"
            />
          </a>
          <a href="https://www.linkedin.com/in/karen-molinac/">
            <img
              src="https://www.flaticon.es/svg/static/icons/svg/1384/1384030.svg"
              width="40px"
              style={{filter: "invert(1)",}}
              alt="contact"
            />
          </a>
          <a href="mailto:karenemece@gmail.com">
            <img
              src="https://www.flaticon.es/svg/static/icons/svg/646/646094.svg"
              width="40px"
              style={{filter: "invert(1)",}}
              alt="contact"
            />
          </a>
        </div>
      </div>
    </Layout>
  </div>
)

export default IndexPage
