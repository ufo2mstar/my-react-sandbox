import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../common/Home'
import Query from './lookup/Query'
import Roster from './roster/Roster'
import Schedule from './static/Schedule'
import About from './static/About'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/query' component={Query}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      {/*<Route link='/sched' component={Schedule}/>*/}
      <Route name='/about' component={About}/>
    </Switch>
  </main>
)

export default Main
