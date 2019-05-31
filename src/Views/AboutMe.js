import React from 'react'
import Links from '../Components/Links'
import Projects from '../Views/Projects'
import '../Views/AboutMe.css'

class About extends React.Component {
  render () {
    return (
      <main>
        <article className='about-container'>
          <h1 className='name'>Karen Molina</h1>
          <p className='my-bio-container'>Antropóloga Social por formación y desarrolladora por pasión.
            Un día me levanté con las ganas de dejar de teorizar sobre temas tecnológicos
            y comenzar a crear. La programación me ha enseñado que existe un sin fin de mundos posibles.
          </p>
        </article>
        <article className='skills-container'>
          <h2 className='skills'>Habilidades y Herramientas</h2>
          <figure className='list-skills'>
            <ul>
              <li><i class='devicon-html5-plain-wordmark'></i></li>
              <li><i class='devicon-css3-plain-wordmark'></i></li>
              <li><i class='devicon-javascript-plain'></i></li>
              <li><i class='devicon-nodejs-plain'></i></li>
              <li><i class='devicon-git-plain'></i></li>
              <li><i class='devicon-github-plain'></i></li>
              <li><i class='devicon-bootstrap-plain'></i></li>
              <li><i class='devicon-react-original-wordmark'></i></li>
              <li><i class='devicon-linux-plain'></i></li>
              <li><i class='devicon-gimp-plain'></i></li>
              <li><i class='devicon-inkscape-plain'></i></li>
              <li><span>Firebase</span><span>Arduino</span><span>Materialize</span></li>
            </ul>
          </figure>
        </article>
        <Links />
        <Projects />
      </main>
    )
  }
}

export default About
