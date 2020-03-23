import React, { Component } from 'react'
import '../../Resoures/resources/styles.scss'
import { Element } from 'react-scroll'
import Header from '../Header_footer/Header'
import Featured from "../Featured"
import Footer from '../Header_footer/Footer'
import Workshops from '../Steam'
import Projects from '../Projects'
import Talks from '../Talks'

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
        <Element name='workshops'>
          <Workshops />
        </Element>
        <Element name='talks'>
          <Talks />
        </Element>
        <Element name='projects'>
          <Projects />
        </Element>
        <Footer />
      </div>
    )
  }
}

export default App
