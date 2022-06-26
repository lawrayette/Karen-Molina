<template>
  <div class="workshops">
    <article class="set-width">
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
            electronics with different tools and materials. Since the use of
            free hardware, textiles, crafts, or recycled material
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
            them to appropriate the technology. The programming was a perfect
            way to introduce them to the STEAM world.
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
            made different projects focused on experimental science with
            materials and tools that we can find at home. Also, those projects
            are focused to learn about biology and chemistry.
          </p>
        </div>
      </div>

      <div class="card-container">
        <div class="image-container">
          <h4>Digital Rights</h4>
          <figure>
            <img class="top" src="../assets/internetseguro.jpg" />
          </figure>
        </div>

        <div class="description">
          <p>
            The series of workshops about digital Rights and
            cybersecurity-focused on the final user and was the more complicated
            to develop. The targets of this series were two: women, and
            children.
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
h4 {
  font-size: 2rem;
  font-weight: 600;
  margin-top: 10px;
  color: #da00ff;
}
.workshops {
  background: #181818;
}
.set-width {
  max-width: 1280px;
  margin: 0 auto;
  padding: 35px;
  display: flex;
  flex-wrap: wrap;
}
.card-container {
  display: flex;
  flex-direction: column;
  width: 550px;
  margin: 20px;
  padding: 20px;
  border: #e7eaed 2px solid;
  border-radius: 16px;
  color: #181818;
}

.card-container:hover {
  border: #ff00ef 2px solid;
  box-shadow: #da00ff 0px 20px 30px -10px;
}
.image-container {
  width: 100%;
  max-height: 450px;
}
p {
  background: #f6f6f6ad;
  height: 147px;
  margin: 0px auto;
  padding: 16px;
  position: relative;
  top: -36px;
}
img {
  height: 500px;
  width: 505px;
  object-fit: cover;
}

@media only screen and (max-width: 601px) {
.card-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;
  padding: 20px;
  border: #e7eaed 2px solid;
  border-radius: 16px;
  color: #181818;
}

.image-container {
  width: 100%;
  max-height: 450px;
}
img {
  height: 500px;
  width: 100%;
  object-fit: cover;
}
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
