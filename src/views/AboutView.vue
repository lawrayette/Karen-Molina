<script setup>
import Workshops from "@/components/Workshops.vue";
import Talks from "@/components/Talks.vue";
import Stack from "@/components/Stack.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <section class="about">
      <article class="set-width">
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
          When I was a child, I remember being into sciences. I used to want to
          be a biologist, so I studied
          <span class="name-interest">Biology </span>
          <span role="img" aria-label="biology">🧬 </span> at UNAM. But when I
          was study biology, I discovered a lot of authors that wrote about
          humanities, philosophy and anthropology. In consequence, I dropped
          Biology and started to study
          <span class="name-interest">Social Anthropology</span> at UAM. Since I
          was a child always have access to technology, I grow up with
          <span class="name-interest">Internet </span>,
          <span class="name-interest">computers </span> and
          <span class="name-interest">videogames </span> next to me. So in the
          college, one day I woke up with curiosity about
          <span class="name-interest">Free Software</span> , and I using it
          since there, so I wrote my research about it. Then I discovered many
          FS communities and realized many of the contributors where engineering
          students or graduated engineers. It was there when I started to learn
          about coding. My first approach was with
          <span class="name-interest">Arduino </span>, since there, I’m really
          into <span class="name-interest">digital culture </span>issues. I’m
          teacher on many workshops <span class="name-interest">STEAM </span> 🔬
          that I develop. I’m contributor to many foundations, schools and
          organizations. Since 2019 I’m
          <span class="name-interest">Frontend developer </span>. Currently,
          <span role="img" aria-label="woman"> 👩‍💻 </span>I’m a frontend
          developer at FluxQR, a fintech mexican startup. Sometimes I write
          stuffs on
          <a
            href="https://dev.to/voidrizoma"
            target="_blank"
            class="name-interest"
            >dev.to</a
          >
        </p>
      </article>
    </section>
    <div class="about about-titles"><h3 class="animated hinge">Stack</h3></div>
    <Stack />
    <div class="about about-titles"><h3>Workshops and Talks</h3></div>
    <Workshops />
    <Talks />
    <Footer />
  </main>
</template>

<style scoped>
.animated {
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}

@keyframes hinge {
  0% {
    transform: rotate(0);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  20%,
  60% {
    transform: rotate(80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  40% {
    transform: rotate(60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  80% {
    transform: rotate(60deg) translateY(0);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateY(700px);
  }
}
.hinge {
  margin: 20px;
  animation-name: hinge;
}

p {
  font-size: 24px;
  margin-bottom: 10px;
}

h3 {
  font-size: 40px;
  font-weight: 600;
  margin: 20px 20px;
  background: linear-gradient(
    to right,
    #7900ff 20%,
    #df00ff 40%,
    #df00ff 60%,
    #7b04ff 80%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  background-size: 200% auto;
  animation: shine 5s linear infinite;
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}

h4 {
  font-size: 2rem;
  font-weight: 600;
  margin-top: 10px;
  color: #59dcff;
}

img {
  border-radius: 5px;
  width: 350px;
  height: 350px;
  position: absolute;
  object-fit: cover;
}
img:hover {
  opacity: 0.3;
}
a {
  transition: ease-out 0.5s;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
}

a:hover {
  background: -webkit-linear-gradient(#9d45ff, #007797);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 35px;
}
.set-width {
  max-width: 1280px;
  margin: 0 auto;
  padding: 35px;
}
.about:first-child {
  background: #181818;
}

.about-titles {
  background: #e7eaed;
}
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.name-alias {
  font-size: 28px;
  color: #ff00ef;
  font-weight: 900;
}

.name-interest {
  font-size: 26px;
  color: #7b04ff;
  font-weight: 900;
}

p {
  position: initial;
}
</style>
