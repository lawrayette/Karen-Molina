<template>
<div class="talks">
 <article class="set-width">
      <div class="card-container">
        <div class="image-container">
          <h4>Education</h4>
          <figure>
            <img class="top" src="../assets/EDUSOL.png" />
          </figure>
        </div>

        <div class="description">
          <p>
            As a mentor and maker of workshops focused on STEAM and
            methodologies outside the formal spaces. I did several talks about
            how to create an environment for horizontal education, how to
            improve soft skills in the assistants, how to make a collaborative
            group, and how to increase the creativity and don't push down the
            couriosity.
          </p>
        </div>
      </div>

      <div class="card-container">
        <div class="image-container">
          <h4>Body and Technology</h4>
          <figure>
            <img class="top" src="../assets/body2.jpeg" />
          </figure>
        </div>

        <div class="description">
          <p>
            As a social anthropologist, always I have been interested in studies
            about the body. But when my interest in technology grows up, with my
            interest in how the body and the technology can be shared in the
            same environments and how those can exist as a species of symbiosis.
            How the technology can be used as an extension of the body and how
            the body can be the reference to create technology more comfortable
            for humans.
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
            As a humanist and activist. I believe we need initiatives to
            increase the knowledge of digital rights to the final users. This
            series of talks were focused on digital rights, feminism, and
            childhood.
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
.talks {
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

.card-container:hover{
   border: #ff00ef 2px solid;
   box-shadow: #da00ff 0px 20px 30px -10px;
}
.image-container {
  width: 100%;
  max-height: 450px;
}
p {
  background: #f6f6f6ad;
  height: 200px;
  margin: 0px auto;
  padding: 16px;
  position: relative;
  top: -86px;
}
img {
  height: 500px;
  width: 505px;
  object-fit: cover;
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
