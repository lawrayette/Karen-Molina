import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Paragraph = styled.p`
  font-size: 22px;
  color:white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

class talk extends React.Component {
  state = {
    prices: [100, 150, 250],
    positions: ["DevHr", "Eventloop", "Edusol"],
    desc: [
      "DevHr is the International forum of videogames and games studies. In 2018 I was participated as speaker. I talked about my research about video games as a prosthesis,  how the video games has become in extensions of body and brain. How we change the mode that we play and feel the game. ",
      "In 2019 I was participated as speaker in EventLoop, the meetup of Javascripters and developers. I talked about e cuerpo. how the technology and scientific advances has been influenced by sci fi. And how many of gadgets are now an extension of our bodys. Thats why the technology and the prosthesis has many relationship between the developed and the User experience.",
      "EDUSOL is an meeting between experts, teachers, reseachers and people interesting in FS and education. In 2019 i talked about my experience as teacher and mentor in workshops at formal and informal education spaces.  ",
    ],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.positions.map((box, i) => (
      <div>
        <h2 style={{color:"#4de4cf", marginBottom:"15px"}}>{this.state.positions[i]}</h2>
        <Paragraph>{this.state.desc[i]}</Paragraph>
      </div>
    ));

  render() {
    return (
      <div style={{
        backgroundColor: "#efefef",
        backgroundImage:
          "-webkit-linear-gradient(290deg, #282c3d 45%, #000 45%",
        minHeight: "90vh"}}>
        <Layout>
          <SEO title="talks()" />
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "85vh",
              width: "80%",
              margin: "0 auto",
            }}
          >
            {this.showBoxes()}
          </Container>
        </Layout>
      </div>
    );
  }
}

export default talk;
