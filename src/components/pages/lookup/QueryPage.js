import React from 'react'
import TableSelector from './options/TableSelector'
import withRouter from "react-router-dom/es/withRouter";

import TableHolder from "./table/TableHolder";

class QueryPage extends React.Component {

  constructor(props) {
    super(props);
    // const {match} = props;
    console.log("Query Page loaded");
    // console.log(match.params.id);
    // console.log(this.props);

    // this.getTableData()
    this.tableList = ['Arrs', 'Assets', 'Expos', 'Pledges'];
    this.tables = this.toObj(this.tableList);

    this.state = {
      lookup: this.props.match.params.id,
      tables: this.tables
    };
  }

  toObj = (arr) => arr.reduce(function (acc, cur, i) {
    acc[cur] = [i];
    return acc;
  }, {});

  // state = {
  //   lookup: this.props.match.params.id,
  //   tables: this.tables
  // };

  addTableData = (tableName, tableQuery) => {
    console.log(tableName, tableQuery);
    this.setState(prevState => ({
      tables: prevState.tables[tableName] = tableQuery,
    }))
  };


  showState = () => {
    // console.log(this.state);
    return JSON.stringify(this.state)
  };


  render = () => (
    <div>
      <p>{this.state.lookup}</p>
      <TableSelector selectHandle={this.addTableData} tableList={this.tableList}/>
      <p>{this.showState()}</p>
      <TableHolder lookup={this.state.lookup} tables={this.state.tables}/>
    </div>
  )


}

export default withRouter(QueryPage)


