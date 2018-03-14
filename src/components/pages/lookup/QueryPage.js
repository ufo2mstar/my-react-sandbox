import React from 'react'
import TableSelector from './options/TableSelector'
import withRouter from "react-router-dom/es/withRouter";

const QueryPage = (props) => (
  <div>
    <TableSelector {...props}/>
    {/*<p>{props.location}</p>*/}
  </div>
);


export default withRouter(QueryPage)
