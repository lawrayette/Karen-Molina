import React from 'react'
import Particles from './Particles'
import Typical from 'react-typical'

const steps = [
  'Maker', 2000,
  'Frontend', 2000,
  'STEAM Edu', 2000,
  'Antropología', 2000,
  'Cultura Digital',
]

const About = () => {
  return (
    <section id='about'>
      <Particles />
      <div id='container'>
        <div id='name'>
          <h1>Void Rizoma</h1>
        </div>
        <div id='about_container'>
        <Typical wrapper="span" steps={steps} loop={1} />
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
