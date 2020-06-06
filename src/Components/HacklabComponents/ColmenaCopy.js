import React from "react";
import Button from "../Utils/Button";
import {
  SectionHacklab,
  Decription,
  TitleDecription,
  CopyDecription,
  ProjectWrapper,
  ProyectLabel,
  ProjectNumber,
  Girls,
  CallToAction,
} from "../../styles/styles";

export default function ApaseoCopy() {
  return (
    <div id="colmena">
      <SectionHacklab className="container">
        <Decription>
          <TitleDecription>LA COLMENA, TLAXCALA</TitleDecription>
          <CopyDecription>
            Una semana, 11 niñas y 20 horas de colaboración, lluvia de ideas,
            creatividad y programación. Nos dan como resultado un total de 8
            proyectos en Scratch. Además de conocer y reconocer a mujeres
            importantes en el campo de la ciencia y tecnolgía a lo largo de la
            historia.
          </CopyDecription>
        </Decription>
        <ProjectWrapper>
          <div>
            <ProjectNumber>11</ProjectNumber>
            <Girls>niñas</Girls>
          </div>
          <div>
            <ProyectLabel>Proyectos</ProyectLabel>
            <CallToAction>
              Visita sus proyectos, comenta, comparte, crea, remixea.
            </CallToAction>
            <Button
              text="Ver más..."
              link="https://scratch.mit.edu/studios/25394202/"
            />
          </div>
        </ProjectWrapper>
      </SectionHacklab>
    </div>
  );
}
