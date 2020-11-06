import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/foto.jpg"
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

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const IndexPage = () => (
  <div style={{ background: "#7a055b" }}>
    <Layout>
      <SEO title="Void Rizoma" />
      <Container>
        <article
          style={{
            width: "50%",
            color: "white",
            borderRadius: "10px 20px 30px 60px",
            padding:"1%",
            margin:"4% auto"
          }}
        >
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding:"1%"
            }}
          >
            <h1>Hi, my name is Karen Molina</h1>
          </div>

          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding:"1%"
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
        </article>
        <article
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "4%",
            padding:"4%"
          }}
        >
          <img
            src={Image}
            style={{
              borderRadius: "25% 5%",
              filter: "opacity(0.5)",
              border: "8px solid #bca092",
            }}
          />
        </article>
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
        <div style={{width:"40%", margin:"0 auto", display:"flex", justifyContent:"space-around"}}>
        <a href="https://github.com/voidrizoma"><img src="https://www.flaticon.es/svg/static/icons/svg/2111/2111432.svg"  width="40px" /></a> 
       <a href="https://www.linkedin.com/in/karen-molinac/"><img src="https://www.flaticon.es/svg/static/icons/svg/1384/1384030.svg" width="40px" /></a> 
        <a href="mailto:karenemece@gmail.com"><img src="https://www.flaticon.es/svg/static/icons/svg/646/646094.svg"  width="40px"/></a>
        </div>

      </div>
    </Layout>
  </div>
)

export default IndexPage
