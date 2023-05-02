import React from 'react'
import {Link } from 'gatsby'
import '../styles/index.css'

export default function index() {
  return (
    <div className='index'>
    <h1>Karen Molina</h1>
    <h3>Frontend Developer <span role="img" aria-label="woman"> 👩‍💻 </span></h3> 
    <Link to='/about' className='link'>About me</Link>
  </div>
  )
}
