<template>
<section class="stack">
 <article class="set-width">

   <div class="content">
        <h2>HTML, CSS, Javascript, ReactJS, GatsbyJS, NextJS, NodeJS, Fastify, PostgreSQL.</h2>
        <h2>HTML, CSS, Javascript, ReactJS, GatsbyJS, NextJS, NodeJS, Fastify, PostgreSQL.</h2>
    </div>
    </article>
</section>
</template>

<style scoped>
.content {
    position: relative;
}

.content h2 {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 34px;
}

.content h2:nth-child(1) {
    color: transparent;

    -webkit-text-stroke: 1.2px #00c9ff;

}

.content h2:nth-child(2) {
    color: #00d6625e;
    animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
    0%,
    100% {
        clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }
    50% {
        clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
}

@media(max-width: 768px) {
    .content h2 {
        font-size: 3em;
    }
}

.stack {
  background: #181818;
  display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.set-width {
  max-width: 1280px;
  margin: 0 auto;
  padding: 35px;
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .set-width {
    max-width: 1280px;
    margin: 0 auto;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
