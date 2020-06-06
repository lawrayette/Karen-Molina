import React from "react";
import styled from "styled-components";

export default function index() {
  return (
    <Container>
      <Section className="container">
        <TitleManifest>
          Invocamos a todas las ancestras tecnológicas, madres del código,
          guerreras de pañuelo verde, pintas violetas y glitter rosa. Es hora de
          regresar, la tecnología nos pertenece.
        </TitleManifest>
        <P>
          Al navegar en la red, vivimos en la nada, aun compartiendo y
          sintiéndolo todo, los dolores del desprotegido y la lujuria de los
          depredadores.
        </P>
        <P>
          Por años hemos sido consumidoras pasivas. Por gestar falsos profetas,
          influencers, productos de la ingeniera social que tanto repudiamos y
          que tanto necesitamos, ¡Hoy nos declaramos responsables!.
        </P>
        <P>
          Por invadir, rastrear y bloquear a aquel sin conocer su rostro más que
          el nuestro, ¡Hoy nos declaramos libres!.
        </P>
        <P>
          Nos encontramos en un momento historico plagado de violencia por lo
          que permanecer inactivas en el desconocimiento no es una opción,nos
          decidimos por desaprender malas practicas y adoptar tecnicas de
          autodefensa en esta trinchera digital. Repensar la ciberseguridad como
          un acto de autocuidado, un acto político de rebelión ante los
          contenidos que queremos compartir y consumir, seremos combativas en el
          manejo de nuestra información y en el acompañamiento del cuidado de
          los datos de nuestras compañeras.
        </P>
        <P>
          Buscamos reivindicación en la sociedad digital. Tenemos y ejercemos
          nuestro derecho a participar y transformar nuestro entorno.
          Aprovechamos las herramientas que tenemos a nuestro alcance para
          aprender y deconstruirnos . Construimos juntas un mejor futuro
          digital, inclusivo, resiliente, responsable y donde las oportunidades
          superen nuestros riesgos.
        </P>
      </Section>
    </Container>
  );
}

const Section = styled.div`
padding: 6% 10%;
`;

const Container = styled.div`
background: #5f2c82;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #49a09d, #5f2c82);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #49a09d, #5f2c82); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
font-family: 'Roboto', sans-serif;
`;

const TitleManifest = styled.h1`
color:white;
font-size:30px;
margin:4% 0;
@media (max-width: 768px) {
    font-size:25px;
  }
`;

const P = styled.p`
color:#161616;
font-size:25px;
margin:4% 0;
@media (max-width: 768px) {
    font-size:18px;
  }

`;