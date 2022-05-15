<template>
  <div>
    <h1>Karen Molina</h1>
    <h3>Frontend Developer <span role="img" aria-label="woman"> 👩‍💻 </span></h3> 

    <RouterLink to="/about">About Me </RouterLink>
  </div>
</template>

<style scoped>
div {
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
}
h1 {
  font-size: 100px;
  background: -webkit-linear-gradient(45deg, #9d45ff, #007797);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  color: #979797;
  font-weight: 500;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

a {
  margin: 15px;
  padding: 12px 50px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #999999;
  background: #transparent;
  border: 3px solid transparent;
  cursor: pointer;
  border-image-slice: 1;
  border-width: 5px;
  transition: ease-out 0.5s;
  -webkit-transition: ease-out 0.5s;
  -moz-transition: ease-out 0.5s;
}

a::after,
a::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  transition: 0.5s;
}

a::after {
  top: -3px;
  left: -3px;
  border-top: 3px solid transparent;
  border-left: 3px solid transparent;
}

a::before {
  bottom: -3px;
  right: -3px;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
}

a:hover {
  background: -webkit-linear-gradient(#9d45ff, #007797);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
}

a:hover::after,
a:hover::before {
  width: calc(50% + 3px);
  height: calc(50% + 3px);
  border-color: #9d45ff;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
