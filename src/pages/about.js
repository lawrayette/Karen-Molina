import React from "react";
import Layout from "../components/layout/Layout";
import styled from "styled-components"

const MainContainer = styled.main `
margin: 50px 60px;
color: #dddddd;
`

export default function about() {
  return (
    <Layout>
        <MainContainer>
        <p>
        Hi!, my name is Karen Molina, also can find me as Void Rizoma. Currently
        I’m living in Mexico State. I have two cats 🐈 Tito and 🐈 Simon. I love
        🍟 chips, 🦇 Batman and 🕷️ Spiderman.{" "}
      </p>
      <p>
        When I was a child, I remember being into sciences. I used to want to be
        a biologist, so I studied Biology 🧬 at UNAM. But when I was study biology,
        I discovered a lot of authors that wrote about humanities, philosophy
        and anthropology. In consequence, I dropped Biology and started to study
        Social Anthropology at UAM. Since I was a child always have access to
        technology, I grow up with Internet, computers and videogames next to
        me. So in the college, one day I woke up with curiosity about Free
        Software, and I using it since there, so I wrote my research about it.
        Then I discovered many FS communities and realized many of the
        contributors where engineering students or graduated engineers. It was
        there when I started to learn about coding. My first approach was with
        Arduino, since there, I’m really into cultural digital issues. I’m
        teacher on many workshops STEAM 🔬 that I develop. I’m contributor to many
        foundations, schools and organizations. Since 2019 I’m Frontend
        developer. Currently,  👩‍💻  I’m a frontend developer at FluxQR, a fintech
        mexican startup.{" "}
      </p>
      <h3>Workshops</h3>
      <h3>Talks</h3>
        </MainContainer>

    </Layout>
  );
}
