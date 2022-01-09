import React from "react";
import Layout from "../components/layout/Layout";
import styled, { keyframes } from "styled-components";
import Programming1 from "../assets/progra.jpg"
import Programming2 from "../assets/progra2.jpg"
import Programming4 from "../assets/progra4.jpg"
import Electro1 from "../assets/electronic1.jpg"
import Electro2 from "../assets/electronic2.jpg"
import Electro3 from "../assets/electronic3.jpg"
import Science1 from "../assets/science1.jpg"
import Science2 from "../assets/science2.jpg"
import Science3 from "../assets/science3.jpg"
import Ciber1 from "../assets/3.jpg"
import Ciber2 from "../assets/8.jpg"
import Ciber3 from "../assets/internetseguro.jpg"
import Edu from "../assets/edu3.jpg"
import Edu2 from "../assets/EDUSOL.png"
import Edu3 from "../assets/Edu1.jpeg"
import Body from "../assets/body1.png"
import Body2 from "../assets/body2.jpeg"
import Body3 from "../assets/doby3.jpeg"
import genre from "../assets/edugenre.jpeg"
import genre2 from "../assets/genre1.png"
import genre3 from "../assets/genre3.jpeg"

const MainContainer = styled.main`
  margin: 50px 60px;
  color: #dddddd;
`;

const multipleImage = keyframes`
0% {
    opacity:1;
  }
  25% {
    opacity:1;
  }
  50% {
    opacity:0;
  }
  100% {
    opacity:0;
  }
`;

const Assets = styled.img`
  border-radius: 5px;
width:500px;
height:450px;
    animation-name: ${multipleImage};
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 15s;
    &:nth-of-type(1) {
      animation-delay: 13s;
    }
    &:nth-of-type(2) {
      animation-delay: 9s;
    }
    &:nth-of-type(3) {
      animation-delay: 3s;
    }
  }`;

const ArticleContainer = styled.article`
  display: grid;
  gap: 2rem;
  grid-auto-rows: 40rem;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
`;

const CardTalks = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
`;

const ImageContainer = styled.div`
width:500px;
`;


export default function about() {
  return (
    <Layout>
      <MainContainer>
        <p>
          Hi!, my name is Karen Molina, also can find me as Void Rizoma.
          Currently I’m living in Mexico State. I have two cats <span role="img" aria-label="cat">🐈 </span>Tito and <span role="img" aria-label="cat">🐈 </span>
          Simon. I love <span role="img" aria-label="chips">🍟</span> chips, <span role="img" aria-label="bat">🦇 </span>Batman and<span role="img" aria-label="spider">🕷️ </span> Spiderman.{" "}
        </p>
        <p>
          When I was a child, I remember being into sciences. I used to want to
          be a biologist, so I studied Biology <span role="img" aria-label="biology">🧬 </span> at UNAM. But when I was study
          biology, I discovered a lot of authors that wrote about humanities,
          philosophy and anthropology. In consequence, I dropped Biology and
          started to study Social Anthropology at UAM. Since I was a child
          always have access to technology, I grow up with Internet, computers
          and videogames next to me. So in the college, one day I woke up with
          curiosity about Free Software, and I using it since there, so I wrote
          my research about it. Then I discovered many FS communities and
          realized many of the contributors where engineering students or
          graduated engineers. It was there when I started to learn about
          coding. My first approach was with Arduino, since there, I’m really
          into cultural digital issues. I’m teacher on many workshops STEAM 🔬
          that I develop. I’m contributor to many foundations, schools and
          organizations. Since 2019 I’m Frontend developer. Currently, <span role="img" aria-label="woman"> 👩‍💻 </span>I’m a
          frontend developer at FluxQR, a fintech mexican startup.{" "}
        </p>
        <h3>Workshops</h3>

        <ArticleContainer>
          <div>
            <h4>Electronic</h4>
            <figure>
              <Assets
                class="bottom"
                style={{ position: "absolute" }}
                src={Electro1}
              />
              <Assets
                class="top"
                style={{ position: "absolute" }}
                src={Electro2}
              />
              <Assets
                class="top"
                src={Electro3}
              />
            </figure>
{     /*       <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
</p>*/}
          </div>
          <div>
            <h4>Programming</h4>
            <figure>
              <Assets
                class="bottom"
                style={{ position: "absolute" }}
                src={Programming1}
              />
              <Assets
                class="top"
                style={{ position: "absolute" }}
                src={Programming2}
              />
              <Assets
                class="top"
                src={Programming4}
              />
            </figure>
            {     /*       <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
</p>*/}
          </div>
          <div>
            <h4>Science and Arts</h4>
            <figure>
              <Assets
                class="bottom"
                style={{ position: "absolute" }}
                src={Science1}
              />
              <Assets
                class="top"
                style={{ position: "absolute" }}
                src={Science2}
              />
              <Assets class="top" src={Science3} />
            </figure>
            {     /*       <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
</p>*/}
          </div>
          <div>
            <h4>Cibersecurity and Digital Rights</h4>
            <figure>
              <Assets
                class="bottom"
                style={{ position: "absolute" }}
                src={Ciber1}
              />
              <Assets
                class="top"
                style={{ position: "absolute" }}
                src={Ciber2}
              />
              <Assets class="top" src={Ciber3} />
            </figure>
            {     /*       <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
</p>*/}
          </div>
        </ArticleContainer>

        <h3>Talks</h3>
        <section>
          <CardTalks>
            <ImageContainer>
              <h4>Education</h4>
              <figure>
                <Assets
                  class="bottom"
                  style={{ position: "absolute" }}
                  src={Edu}
                />
                <Assets
                  class="top"
                  style={{ position: "absolute" }}
                  src={Edu2}
                />
                <Assets class="top" src={Edu3} />
              </figure>
            </ImageContainer>

            {     /*       <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
</p>*/}
          </CardTalks>
          <CardTalks>
            <ImageContainer>
              <h4>Body, Technology and Posthumanism</h4>
              <figure>
                <Assets
                  class="bottom"
                  style={{ position: "absolute" }}
                  src={Body} 
                />
                <Assets
                  class="top"
                  style={{ position: "absolute" }}
                  src={Body2} 
                />
                <Assets class="top" src={Body3}  />
              </figure>
            </ImageContainer>
            {     /*       <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
</p>*/}
          </CardTalks>
          <CardTalks>
            <ImageContainer>
              <h4>Digital Rights and genre</h4>
              <figure>
                <Assets
                  class="bottom"
                  style={{ position: "absolute" }}
                  src={genre}
                />
                <Assets
                  class="top"
                  style={{ position: "absolute" }}
                  src={genre2}
                />
                <Assets class="top" src={genre3} />
              </figure>
            </ImageContainer>
            {     /*       <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
</p>*/}
          </CardTalks>
        </section>
      </MainContainer>
    </Layout>
  );
}
