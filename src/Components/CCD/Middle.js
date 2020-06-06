import React from "react";
import styled from "styled-components";

export default function Middle() {
  return (
    <div id="middle_ccd">
      <Section className="container">
          <H1>Seguridad Digital para morras, CCD</H1>
          <P>
              Realizado en el Centro de Cultura Digital, el taller tiene como objetivo difundir la importancia de la seguridad digital, la privacidad.
              Además de las actividades dentro del taller, las asistentes realizaron un manifiesto colectivo sobre la seguridad digital, desde el feminismo.
              También nos dejan algunas experiencias y feedback del taller.
          </P>
      </Section>
    </div>
  );
}

const Section = styled.div`
padding: 6% 10%;
text-align:center;
`;

const H1 = styled.h1`
font-size:35px;
color:#161616;
text-transform:uppercase;
margin-bottom:3%;
&:hover{
    transition:all 3s;
    color:#4b1e6d;
}
@media (max-width: 768px) {
    font-size:25px;
  }
`;

const P = styled.p`
font-size:20px;
color:#161616;
margin-bottom:3%;
@media (max-width: 768px) {
    font-size:18px;
  }
`;