<template>
  <div class="about">
    <p>
      Hi!, my name is <span class="name-alias">Karen Molina</span>, also can
      find me as <span class="name-alias">Void Rizoma</span>. Currently I’m
      living in Mexico State. I have two cats
      <span role="img" aria-label="cat">🐈 </span>Tito and
      <span role="img" aria-label="cat">🐈 </span> Simon. I love
      <span role="img" aria-label="chips">🍟</span> chips,
      <span role="img" aria-label="bat">🦇 </span>Batman and<span
        role="img"
        aria-label="spider"
        >🕷️
      </span>
      Spiderman.
    </p>
    <p>
      When I was a child, I remember being into sciences. I used to want to be a
      biologist, so I studied <span class="name-interest">Biology </span>
      <span role="img" aria-label="biology">🧬 </span> at UNAM. But when I was
      study biology, I discovered a lot of authors that wrote about humanities,
      philosophy and anthropology. In consequence, I dropped Biology and started
      to study <span class="name-interest">Social Anthropology</span> at UAM.
      Since I was a child always have access to technology, I grow up with
      <span class="name-interest">Internet </span>,
      <span class="name-interest">computers </span> and
      <span class="name-interest">videogames </span> next to me. So in the
      college, one day I woke up with curiosity about
      <span class="name-interest">Free Software</span> , and I using it since
      there, so I wrote my research about it. Then I discovered many FS
      communities and realized many of the contributors where engineering
      students or graduated engineers. It was there when I started to learn
      about coding. My first approach was with
      <span class="name-interest">Arduino </span>, since there, I’m really into
      <span class="name-interest">digital culture </span>issues. I’m teacher on
      many workshops <span class="name-interest">STEAM </span> 🔬 that I
      develop. I’m contributor to many foundations, schools and organizations.
      Since 2019 I’m <span class="name-interest">Frontend developer </span>.
      Currently, <span role="img" aria-label="woman"> 👩‍💻 </span>I’m a frontend
      developer at FluxQR, a fintech mexican startup. Sometimes I write stuffs
      on <a href="https://dev.to/voidrizoma" class="name-interest">dev.to</a>
    </p>
  </div>
  <div class="about"><h3>Workshops</h3></div>

  <article class="about">
    <div class="card-container">
      <div class="image-container">
        <h4>Electronic</h4>
        <figure>
          <img class="top" src="../assets/electronic3.jpg" />
        </figure>
      </div>

      <div class="description">
        <p>
          I developed and monitored several workshops focused on learning,
          studying, experimenting, and implementing the basics knowledge of
          electronics with different tools and materials. Since the use of free
          hardware, textiles, crafts, or recycled material
        </p>
      </div>
    </div>

    <div class="card-container">
      <div class="image-container">
        <h4>Programming</h4>
        <figure>
          <img class="top" src="../assets/progra2.jpg" />
        </figure>
      </div>
      <div class="description">
        <p>
          As a mentor, I shared with many children around the country to make
          the first approach to technology. I did different workshops to help
          them to appropriate the technology. The programming was a perfect way
          to introduce them to the STEAM world.
        </p>
      </div>
    </div>

    <div class="card-container">
      <div class="image-container">
        <h4>Science and Arts</h4>
        <figure>
          <img class="bottom" src="../assets/science1.jpg" />
        </figure>
      </div>

      <div class="description">
        <p>
          This kind of workshop is a mix of free software, free culture
          principles, art, and science. Inside these workshops, the assistant
          made different projects focused on experimental science with materials
          and tools that we can find at home. Also, those projects are focused
          to learn about biology and chemistry.
        </p>
      </div>
    </div>

    <div class="card-container">
      <div class="image-container">
        <h4>Cibersecurity and Digital Rights</h4>
        <figure>
          <img class="top" src="../assets/internetseguro.jpg" />
        </figure>
      </div>

      <div class="description">
        <p>
          The series of workshops about digital Rights and cybersecurity-focused
          on the final user and was the more complicated to develop. The targets
          of this series were two: women, and children.
        </p>
      </div>
    </div>
  </article>

  <div class="about"><h3>Talks</h3></div>
  <article class="about">
    <div class="card-container">
      <div class="image-container">
        <h4>Education</h4>
        <figure>
          <img class="top" src="../assets/EDUSOL.png" />
        </figure>
      </div>

      <div class="description">
        <p>
          As a mentor and maker of workshops focused on STEAM and methodologies
          outside the formal spaces. I did several talks about how to create an
          environment for horizontal education, how to improve soft skills in
          the assistants, how to make a collaborative group, and how to increase
          the creativity and don't push down the couriosity.
        </p>
      </div>
    </div>

    <div class="card-container">
      <div class="image-container">
        <h4>Body, Technology and Posthumanism</h4>
        <figure>
          <img class="top" src="../assets/body2.jpeg" />
        </figure>
      </div>

      <div class="description">
        <p>
          As a social anthropologist, always i have been interested in studies
          about the body. But when my interest in technology grows up, with my
          interest in how the body and the technology can be shared in the same
          environments and how those can exist as a species of symbiosis. How
          the technology can be used as an extension of the body and how the
          body can be the reference to create technology more comfortable for
          humans.
        </p>
      </div>
    </div>

    <div class="card-container">
      <div class="image-container">
        <h4>Digital Rights and genre</h4>
        <figure>
          <img class="top" src="../assets/genre3.jpeg" />
        </figure>
      </div>
      <div class="description">
        <p>
          As a humanist and activist. I believe we need initiatives to increase
          the knowledge of digital rights to the final users. This series of
          talks were focused on digital rights, feminism, and childhood.
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
p {
  font-size: 24px;
  margin-bottom: 10px;
}

h3 {
  font-size: 5rem;
  font-weight: 600;
  margin: 20px 20px;
  background: -webkit-linear-gradient(46deg, #7b04ff, #59dcff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

h4 {
  font-size: 2rem;
  font-weight: 600;
  margin-top: 10px;
  color: #59dcff;
}

img {
  border-radius: 5px;
  width: 700px;
  height: 700px;
  position: absolute;
  object-fit: cover;
}
img:hover {
  opacity: 0.3;
}

.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.name-alias {
  font-size: 28px;
  color: #59dcff;
  font-weight: 900;
}

.name-interest {
  font-size: 26px;
  background: -webkit-linear-gradient(46deg, #59dcff, #7b04ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

.description {
  height: 700px;
  border-radius: 5px;
  flex-direction: column;
  background: aqua;
  width: 700px;
  color: white;
  background: black;
  display: flex;
  justify-content: center;
}

.description,
p {
  position: initial;
}
</style>
