import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import {
  BoxContainer,
  BoxProject,
  Description,
  Label,
  Title,
  SteamContainer,
} from "../../styles/styles";

class Pricing extends Component {
  state = {
    positions: ["Hacklab para Niñas", "Bio-Robots", "Electrónica"],
    desc: [
      "Adéntrate al mundo de la programación, desde una perspectiva de género, y desarrolla tus capacidades creativas y críticas para crear videojuegos o animaciones a través del remix de código.",
      "Sensibilizar a los niños y niñas sobre su papel en la conservación de la naturaleza, particularmente la importancia de cuidar las especies polinizadoras, utilizando la tecnología como herramienta de aprendizaje.",
      "Durante 2016 y 2017 estuve como docente invitada en Hacedores Makerspace, realizando actividades de enseñanza de electrónica, programación y fabricación digital a niños y jóvenes en espacios de deducación formal",
    ],
    delay: [500, 0, 500],
  };
  showBoxes = () =>
    this.state.positions.map((box, i) => (
      <Fade bottom delay={this.state.delay[i]} key={i}>
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
      <SteamContainer className="workshop_container">
        <div className=" container">
          <Title>STEAM Edu</Title>

          <BoxContainer className="project_wrapper">
            {this.showBoxes()}
          </BoxContainer>
        </div>
      </SteamContainer>
    );
  }
}

export default Pricing;
