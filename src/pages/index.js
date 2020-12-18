import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../images/foto.png";
import styled from "styled-components";

const Container = styled.div`
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Paragraph = styled.p`
  font-size: 22px;
  color: #282c3d;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Name = styled.h1`
  font-size: 55px;
  color: #282c3d;
  padding:20px;
  margin:20px;
  font-family: 'Rubik', sans-serif;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const FE = styled.h2`
  font-size: 25px;
  color: #8a6df1;
  padding:20px;
  margin:20px;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  display: inline;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const HeaderContainer = styled.div`
  width: 85%;
  display: flex;
  align-items:center;
  margin: 5% auto;
  padding: 1%;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin: auto;
    margin-bottom:50px;
  }
`;
const Boxes = styled.div`
  width: 85%;
  display: flex;
  margin: 5% auto;
  padding: 1%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const IndexPage = () => (
  <div
    style={{
      backgroundColor: "#efefef",
      backgroundImage:
        "-webkit-linear-gradient(290deg, #efefef 45%, #8a6df1 45%",
      minHeight: "90vh",
    }}
  >
    <Layout>
      <SEO title="aboutMe()" />
      <Container>
        <HeaderContainer>
          <div
            style={{
              textAlign: "left",
              color: "#4de4cf",
            }}
          >
            <Name>Hi, my name is Karen Molina</Name>
            <FE>I'm Frontend Developer</FE>
          </div>
          <ImageContainer>
            <img
              src={Image}
              alt="voidRizoma"
              style={{ borderRadius: "33% 80%"}}

            />
          </ImageContainer>
        </HeaderContainer>
        <Boxes>
          <div>
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
      </Container>
    </Layout>
  </div>
);

export default IndexPage;
