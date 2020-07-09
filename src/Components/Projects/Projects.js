import React, { Component } from "react";

import {
  BoxContainer,
  BoxProject,
  Description,
  Label,
  Title,
  ProjectContainer,
} from "../../styles/styles";

class project extends Component {
  state = {
    positions: ["Kactacea Edu", "Cipher x DDHH", "Hacklab (web)"],
    desc: [
      "Colectivo enfocado en la educación, usando como eje transversal la tecnología. Principalmente nos interesa la enseñanza con enfoque STEAM para infancias y juventudes. Entre ambas, juntamos más de 10 años de experiencia en el desarrollo e implemetación de talleres.",
      "Es una web app que aplica la criptografía cesareana y se utiliza para la enseñanza de la seguridad digital, el cifrado y el anonimato como derecho en el contexto de la cultura digital. Se ha utilizado en el desarrollo del taller Seguridad Digital para Morras en el CCD.",
      "Es un taller que forma parte del Laboratorio de Ciudadanía Digital. El objetivo es acercar a las niñas a la programación desde una perspectiva de género. La plataforma compila las reflexiones de las asistentes y padres de familia sobre cuál creen que sea el principal motivo de la falta de mujeres en las TI y las ciencias.  ",
    ],
    linkto: [
      "https://kactacea.cool/",
      "https://lawrayette.github.io/CipherCCD//",
      "https://lcd-hacklab.firebaseapp.com/",
    ],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.positions.map((box, i) => (
        <div>
          <BoxProject>
            <div>
              <Label>{this.state.positions[i]}</Label>
            </div>
            <Description>{this.state.desc[i]}</Description>
          </BoxProject>
        </div>
    ));

  render() {
    return (
      <ProjectContainer className="project_contaier">
        <div className=" container">
          <Title>Proyectos</Title>

          <BoxContainer className="project_wrapper">
            {this.showBoxes()}
          </BoxContainer>
        </div>
      </ProjectContainer>
    );
  }
}

export default project;
