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
  color:black;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

class talk extends React.Component {
  state = {
    prices: [100, 150, 250],
    positions: ["LCD", "Hacklab para niños", "CCD"],
    desc: [
      "LCD is the Laboratorio de Ciudadanía Digital an iniciative from Telefónica Foundation, CCEMx, La Caixa and El Ateneo Español en  México. I has 6 years as a colaborator and teacher in several workshops, since electronic, ambiental education, genre, feminism, coding, digital security. ",
      "Hacklab para niños was a workshop about multimedia and experimental art using free software. The workshop was realized at instances from UNAM. The target was kids from elementary schools. We experimented with scratch, arduino, GIMP, Audacity, Inkscape and papercircuits.",
      "In 2019, I developed a digital security workshop for women with a gender perspective. The workshop was realized in Centro de Cultura Digital. ",
    ],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.positions.map((box, i) => (
      <div>
        <h2 style={{color:"#8a6df1", marginBottom:"15px"}}>{this.state.positions[i]}</h2>
        <Paragraph>{this.state.desc[i]}</Paragraph>
      </div>
    ));

  render() {
    return (
      <div style={{
        backgroundColor: "#efefef",
        backgroundImage:
          "-webkit-linear-gradient(290deg, #fff 45%, #efefef  45%",
        minHeight: "90vh"}}>
        <Layout>
          <SEO title="workshops()" />
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
            {this.showBoxes()}
          </Container>
        </Layout>
      </div>
    );
  }
}

export default talk;
