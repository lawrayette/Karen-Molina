import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './Components/Views/Home'
import BioRobots from './Components/Pages/BioRobots'
import Arduino from './Components/Pages/Arduino'
import Hacklab from './Components/Pages/Hacklab'

class Routes extends React.Component {
    render () {
      return (
        <Router>
            <Switch className='container'>
              <Route exact path='/' component={Home} />
              <Route exact path='/biorobots' component={BioRobots} />
              <Route exact path='/arduino' component={Arduino} />
              <Route exactpath='/hacklab' component={Hacklab} />
            </Switch>
        </Router>
      )
    }
  }
  
  export default Routes
