import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/NavBar.css'

const Nav = () => {
  return (
    <header className='toolbar'>
      <nav className='toolbar-navigator'>
        <div className='nav-container'>
          <ul className='toolbar_navigation-items'>
            <Link className='nav-link home' to='/'>Inicio</Link>
            <Link className='nav-link contact' to='/Contact'>Contacto</Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
