import React from 'react'
import { Link } from 'react-router-dom'
import '../Views/Home.css'

class Home extends React.Component {
  render () {
    return (
      <main id='home' md='auto'>
        <article className='name-container'>
          <figure className='name-dev-container'>
            <p className='my-name'>Karen Molina</p>
            <p className='my-dev'>Front-End Developer</p>
          </figure>
        </article>
        <article className='route-container'>
          <figure className='container-route'>
            <Link className='nav-link button-about' to='/About'>¿Quién Soy?</Link>
          </figure>
        </article>
      </main>
    )
  }
}

export default Home
