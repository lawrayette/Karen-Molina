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
    <div id="apaseo">
      <SectionHacklab className="container">
        <Decription>
          <TitleDecription>Apaseo el alto, Guanajuato</TitleDecription>
          <CopyDecription>
            En el transcurso de 20 horas, 20 niñas inscritas al taller se dieron
            cita en la Biblioteca 13 de diciembre en Apaseo el Alto, Guanajuato.
            Todo, con tal de jugar, programar, remixear y crear animaciones y
            videojuegos con Scratch. Además de ello, nos cuestionamos el por qué
            la minoria de mujeres en el mundo de la ciencia y tecnología.
            Conocimos los grandes aportes de las mujeres en IT.
          </CopyDecription>
        </Decription>
        <ProjectWrapper>
          <div>
            <ProjectNumber>20</ProjectNumber>
            <Girls>niñas</Girls>
          </div>
          <div>
            <ProyectLabel>Proyectos</ProyectLabel>
            <CallToAction>
              Visita sus proyectos, comenta, comparte, crea, remixea.
            </CallToAction>
            <Button
              text="Ver más..."
              link="https://scratch.mit.edu/studios/25222639/"
            />
          </div>
        </ProjectWrapper>
      </SectionHacklab>
    </div>
  );
}
