import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './Components/Views/Home'
import BioRobots from './Components/Pages/BioRobots'

class Router extends React.Component {
    render () {
      return (
        <Router>
            <Switch className='container'>
              <Route exact path='/' component={Home} />
              <Route exact path='/biorobots' component={BioRobots} />
            </Switch>
        </Router>
      )
    }
  }
  
  export default Router
