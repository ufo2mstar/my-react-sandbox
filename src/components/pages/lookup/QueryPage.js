import React from 'react'
import TableSelector from './options/TableSelector'
import withRouter from "react-router-dom/es/withRouter";

const QueryPage = ({match}) => (
  <div>
    {/*<p>{match}</p>*/}
    <TableSelector item={match.params.id}/>
  </div>
);


export default withRouter(QueryPage)
