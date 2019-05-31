import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import './App.css'
import Home from './Views/Home'
import About from './Views/AboutMe'
import Projects from './Views/Projects'
import Contact from './Views/Contact'
import Wall from './Components/Wall'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Wall>
          <Switch className='container'>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Projects' component={Projects} />
            <Route exact path='/Contact' component={Contact} />
          </Switch>
        </Wall>
      </Router>
    )
  }
}

export default App
