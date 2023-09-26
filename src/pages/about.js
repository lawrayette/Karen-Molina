import React from "react";
import Layout from "../components/Layout";
import './../styles/about.css'

export default function about() {
  return (
    <Layout>
      <div className="about">
        <article class="set-width">
          <p>
            Hi!, my name is 
            <span class="name-alias">  Karen Molina</span>. 
Currently I’m living in
            Mexico State. I have two cats 
            <span role="img" aria-label="cat">
              🐈
            </span>
             Tito and 
            <span role="img" aria-label="cat">
              🐈
            </span>
             Simon. I love
            <span role="img" aria-label="chips">
              🍟
            </span>
            chips,
            <span role="img" aria-label="bat">
              🦇
            </span>
            Batman and
            <span role="img" aria-label="spider">
              🕷️
            </span>
            Spiderman.
          </p>
          <br></br>
          <p>
            When I was a child, I remember being into sciences. I used to want
            to be a biologist, so I studied
            <span class="name-interest"> Biology </span>
            <span role="img" aria-label="biology"> 
              🧬  
            </span>
              at UNAM. But when I was study biology, I discovered a lot of authors
            that wrote about humanities, philosophy and anthropology. In
            consequence, I dropped Biology and started to study
            <span class="name-interest"> Social Anthropology </span>
            at UAM. Since I was a child always have access to technology, I grow
            up with
            <span class="name-interest"> Internet </span>,
            <span class="name-interest"> computers </span>
            and
            <span class="name-interest"> videogames </span>
            next to me. So in the college, one day I woke up with curiosity
            about
            <span class="name-interest"> Free Software </span>, and I using it
            since there, so I wrote my research about it. Then I discovered many
            FS communities and realized many of the contributors where
            engineering students or graduated engineers. It was there when I
            started to learn about coding. My first approach was with
            <span class="name-interest"> Arduino</span>, since there, I’m really
            into
            <span class="name-interest"> digital culture</span> issues. I’m
            teacher on many workshops
            <span class="name-interest"> STEAM </span>
            🔬 that I develop. I’m contributor to many foundations, schools and
            organizations. Since 2019 I’m
            <span class="name-interest"> Frontend developer</span>. I was working on fintech startups, and currently 
            <span role="img" aria-label="woman">
              👩‍💻 
            </span>
              I’m Software Engineer in automotive industry.
          </p>
          <br></br>
          <p>
            By the way, I'm in a master degree on Comunications and digital humanities in Universidad del Claustro de Sor Juana. 
          </p>
        </article>
      </div>
    </Layout>
  );
}
