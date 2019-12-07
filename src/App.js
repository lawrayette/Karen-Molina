import React, { Component } from 'react'
import './Resoures/resources/styles.scss'
import { Element } from 'react-scroll'
import Header from './Components/Header_footer/Header'
import Featured from './Components/Featured'
import Footer from './Components/Header_footer/Footer'

class App extends Component {
  render () {
    return (
      <div
        className='App'
        style={{ height: 'auto', background: '#141414' }}
      >
        <Header />
        <Element name='featured'>
          <Featured />
        </Element>
        <Footer />
      </div>
    )
  }
}

export default App
