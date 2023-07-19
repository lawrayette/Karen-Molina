import React from 'react'
import { Link } from 'gatsby'
import '../styles/index.css'

export default function index() {
  return (
    <div className='index'>
    <h1>Karen Molina</h1>
    <h3>Frontend Developer <span role="img" aria-label="woman"> 👩‍💻 </span></h3> 
    <div class="container">
    <div class="center">
      <button class="btn">
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <Link to='/about'>About me</Link>
      </button>
    </div>
  </div>
  </div>
  )
}
