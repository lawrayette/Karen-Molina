import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import {
  BoxContainer,
  BoxProject,
  Description,
  Label,
  Title,
  ProjectContainer,
} from "../../styles/styles";

class talk extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["DevHr", "Eventloop", "Edusol"],
    desc: [
      'Participé como ponente en el DevHr, el foro internacional del juego, con el tema: "Cuerpo expandido, el videojuego como prótesis."   Realizado en el 2018 en las instaalciones de la UAM-Azcapotzalco.',
      'En agosto del 2018 participé en EventLoop en una charla sobre "E-cuerpo", una reflexión sobre la relación del estudio de interfaces desde las ciencias sociales y el desarrollo de interfaces desde el UX hasta su implementación.',
      "En el Encuentro de Educación, Software y Cultura Libre, hablé sobre mi experiencia en el desarrollo e implementación de talleres  con tecnologías y pedagogías libres en espacios de educación formal y no formal. ",
    ],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.positions.map((box, i) => (
      <Fade bottom  delay={this.state.delay[i]} key={i}>
        <div>
          <BoxProject>
            <div>
              <Label>{this.state.positions[i]}</Label>
            </div>
            <Description>{this.state.desc[i]}</Description>
          </BoxProject>
        </div>
      </Fade>
    ));

  render() {
    return (
      <ProjectContainer className="talks_container">
        <div className=" container">
          <Title>Charlas</Title>

          <BoxContainer className="project_wrapper">
            {this.showBoxes()}
          </BoxContainer>
        </div>
      </ProjectContainer>
    );
  }
}

export default talk;
