import React from 'react'
import Navbar from '../Components/NavBar'
import '../Components/Wall.css'

class Layout extends React.Component {
  render () {
    console.log(this.props.children)
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
