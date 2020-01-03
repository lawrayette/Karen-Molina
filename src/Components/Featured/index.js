import React from 'react'
import Particles from './Particles'

const About = () => {
  return (
    <section id='about'>
      <Particles />
      <div id='container'>
        <div id='name'>
          <h1>Void Rizoma</h1>
        </div>
        <div id='about_container'>
          <p>Maker, Frontend, STEAM Edu, <br /> Antropología y Cultura Digital</p>
        </div>
        <div id='icons_container'>
          <a href='https://www.linkedin.com/in/karen-molinac/' target='blank'><i className='fab fa-linkedin' /></a>
          <a href='https://github.com/lawrayette' target='blank'><i className='fab fa-github' /></a>
          <a href='mailto:karenemece@gmail.com' target='blank'><i className='fas fa-envelope-square' /></a>
          <a href='https://novoresume.com/a/milhadasdepapel.1' target='blank'><i className='fas fa-user-astronaut' /></a>
        </div>
      </div>
    </section>
  )
}

export default About
