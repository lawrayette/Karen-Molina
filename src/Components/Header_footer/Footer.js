import React from 'react'
import Fade from 'react-reveal/Fade'

const Footer = () => {
  return (
    <footer className='bck_red'>
      <Fade delay={500}>
        <div id='icons_container'>
          <a href='https://www.linkedin.com/in/karen-molinac/' target='blank'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/lawrayette' target='blank'>
            <i className='fab fa-github'></i>
          </a>
          <a href='mailto:karenemece@gmail.com' target='blank'>
            <i className='fas fa-envelope-square'></i>
          </a>
          <a href='https://novoresume.com/a/milhadasdepapel.1' target='blank'>
            <i className='fas fa-user-astronaut'></i>
          </a>
        </div>
      </Fade>
    </footer>
  )
}

export default Footer
