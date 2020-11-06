import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
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

class talk extends React.Component {
  state = {
    prices: [100, 150, 250],
    positions: ["DevHr", "Eventloop", "Edusol"],
    desc: [
      'Participé como ponente en el DevHr, el foro internacional del juego, con el tema: "Cuerpo expandido, el videojuego como prótesis."   Realizado en el 2018 en las instaalciones de la UAM-Azcapotzalco.',
      'En agosto del 2018 participé en EventLoop en una charla sobre "E-cuerpo", una reflexión sobre la relación del estudio de interfaces desde las ciencias sociales y el desarrollo de interfaces desde el UX hasta su implementación.',
      "En el Encuentro de Educación, Software y Cultura Libre, hablé sobre mi experiencia en el desarrollo e implementación de talleres  con tecnologías y pedagogías libres en espacios de educación formal y no formal. ",
    ],
    delay: [500, 0, 500],
  }

  showBoxes = () =>
    this.state.positions.map((box, i) => (
      <div>
        <h2>{this.state.positions[i]}</h2>
        <div>{this.state.desc[i]}</div>
      </div>
    ))

  render() {
    return (
      <div style={{ background: "#feedf9" }}>
        <Layout>
          <SEO title="Void Rizoma" />
          <Container
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
              minHeight: "75vh",
              width: "80%",
              margin: "0 auto",
            }}
          >
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
        <div style={{width:"40%", margin:"0 auto", display:"flex", justifyContent:"space-around"}}>
        <a href="https://github.com/voidrizoma"><img src="https://www.flaticon.es/svg/static/icons/svg/2111/2111432.svg"  width="40px" /></a> 
       <a href="https://www.linkedin.com/in/karen-molinac/"><img src="https://www.flaticon.es/svg/static/icons/svg/1384/1384030.svg" width="40px" /></a> 
        <a href="mailto:karenemece@gmail.com"><img src="https://www.flaticon.es/svg/static/icons/svg/646/646094.svg"  width="40px"/></a>
        </div>

      </div>
        </Layout>
      </div>
    )
  }
}

export default talk
