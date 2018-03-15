import React from 'react'
import {Switch, Route} from 'react-router-dom'
import QP from './QueryPage'

const Query = () => (
  <Switch>
    <Route path='/query/:id' render={()=>{
      return <QP />
    }}/>
    <Route exact path='/query' component={QP}/>
  </Switch>
);


export default Query
