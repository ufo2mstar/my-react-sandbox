import React from 'react'
import withRouter from "react-router-dom/es/withRouter";

import TableSelector from './options/TableSelector'
import TableHolder from "./table/TableHolder";

class QueryPage extends React.Component {

  constructor(props) {
    super(props);
    // const {match} = props;
    console.log("Query Page loaded");
    // console.log(match.params.id);
    // console.log(this.props);

    // this.getTableData()
    // this.tableList = ['Arrs', 'Assets', 'Expos', 'Pledges','Steps'];
    this.tableList = [
      'posts',
      'comments',
      'albums',
      // 'photos',
      'todos',
      // 'users',
    ];
    this.tables = this.toObj(this.tableList);

    this.state = {
      lookup: this.props.match.params.id ,
      tables: this.tables
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      lookup: nextProps.match.params.id
    });
  };

  toObj = (arr) => arr.reduce(function (acc, cur, i) {
    acc[cur] = [];
    return acc;
  }, {});

  // state = {
  //   lookup: this.props.match.params.id,
  //   tables: this.tables
  // };

  addTableData = (tableName, tableQuery) => {
    console.log(this.state);
    console.log(tableName, tableQuery);
    this.tables[tableName] = tableQuery;
    this.setState(prevState => ({
      // tables: prevState.tables[tableName] = tableQuery,
      // tables: this.tables[tableName] = tableQuery,
      // tables: prevState.tables[tableName], // table disappears
      tables: prevState.tables, // table reassigns to old prototype
      // prevState.tables[tableName]= tableQuery,
    }));
  };


  showState = (state) => {
    // console.log(this.state);
    return JSON.stringify(state)
  };


  render = () => (
    <div>
      <p>{this.state.lookup}</p>
      <TableSelector selectHandle={this.addTableData} tableList={this.tableList} lookup={this.state.lookup}/>
      <TableHolder lookup={this.state.lookup} tables={this.state.tables}/>
      {/*<p>{this.showState(this.state)}</p>*/}
      {/*<p>{this.showState(this.tables)}</p>*/}
    </div>
  )


}

export default withRouter(QueryPage)


