import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/NavBar.css'

class Project extends React.Component {
  render () {
    return (
      <>
        <Link className='nav-link pro-button' to='/Projects'>Proyectos</Link>
      </>
    )
  }
}

export default Project
