import React from 'react'
import TableSelector from './options/TableSelector'
import withRouter from "react-router-dom/es/withRouter";

const QueryPage = (props) => (
  <div>
    <TableSelector {...props}/>
  </div>
)


export default withRouter(QueryPage)
