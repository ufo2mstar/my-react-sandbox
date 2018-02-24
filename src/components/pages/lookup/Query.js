import React from 'react'
import { Switch, Route } from 'react-router-dom'
import QP from './QueryPage'

const Query = () => (
  <Switch>
    <Route exact path='/query' component={QP}/>
    {/*<Route path='/roster/:number' component={Player}/>*/}
  </Switch>
)


export default Query
