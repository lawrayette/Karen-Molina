<template>
  <footer>
    <div class="social_media">
      <a href="https://github.com/voidrizoma" target="blank"
        ><i class="fab fa-github"></i
      ></a>
      <a href="mailto:karenemece@gmail.com"><i class="fa fa-envelope"></i></a>
      <a href="https://www.linkedin.com/in/karen-molinac/" target="blank"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a href="https://firebasestorage.googleapis.com/v0/b/prueba-e8b0a.appspot.com/o/KarenMolina_CV.pdf?alt=media&token=18a8c5e7-404f-42ee-95eb-d43eb669b227" download>Resume</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #e7eaed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.set-width {
  max-width: 1280px;
  margin: 0 auto;
  padding: 35px;
  display: flex;
  flex-wrap: wrap;
}

.logo {
  width: 180px;
  font-size: 16px;
  font-weight: bold;
}

.social_media {
  margin: 20px 150px;
}

.social_media a {
  color: #000;
  font-size: 24px;
  margin: 5px;
  text-decoration: none;
  transition: 0.6s;
}

.social_media a:hover {
  color: #da00ff;
}
h1 {
  font-size: 40px;
  color: #fff;
  font-weight: bold;
}
</style>
