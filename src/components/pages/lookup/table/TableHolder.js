import React from 'react'
import ArrTable from "./type/ArrTable";

class TableHolder extends React.Component {
  constructor(props) {
    super(props);
    console.log("table holder props:");
    console.log(props);

    this.state = this.props
  }

  // state = {
  //   tables: this.props.tables,
  //   lookup: this.props.lookup,
  // };

  // addNewTable = (tableInfo) => {
  //   this.setState(prevState => ({
  //     tables: prevState.tables.concat(tableInfo)
  //   }));
  // };

  buildTableList(tableObj) {
    // obj loop
    // Object.keys(tableObj).map(table => console.log(`key: table name = ${table}  data= ${tableObj[table]}`));

    return Object.keys(tableObj).map((tableName) => {
        let tableData = tableObj[tableName];
        return <div key={tableName}>
          {/* can pass nested tags apparently.. cool! */}
          {tableName}:
          {tableData && tableData.length ? <ArrTable data={tableData}/> : "No Data!"}
        </div>
      }
    )
  }

  showState = () => {
    // console.log(this.state);
    return JSON.stringify(this.state)
  };

  render() {
    return (
      <div>
        {/*{this.buildTableList()}*/}
        {/*<p>{this.buildTableList(this.state.tables)}</p>*/}
        {this.buildTableList(this.state.tables)}
        {/*<p>{this.showState()}</p>*/}
      </div>
    );
  }
}

export default TableHolder

