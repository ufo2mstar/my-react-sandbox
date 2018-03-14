import React from 'react'

class TableHolder extends React.Component {
  constructor(props){
    super(props);
    console.log("table holder props:");
    console.log(props);

    this.state = props
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

  buildTableList(tableData) {
    Object.keys(tableData).map(table => console.log(`key: table name = ${table}  data= ${tableData[table]}`));
    // return this.state.cSelected.map((i) =>
    //   <div key={i}>
    //     {/* can pass nested tags apparently.. cool! */}
    //     {i}: {this.tableList[i-1]} Table goes here...
    //     <ArrTable/>
    //   </div>
    // )
  }

  showState = () => {
    // console.log(this.state);
    return JSON.stringify(this.state)
  };

  render() {
    return (
      <div>
        {/*{this.buildTableList()}*/}
        <p>{this.showState()}</p>
        {/*<p>{this.buildTableList(this.state.tables)}</p>*/}
      </div>
    );
  }
}

export default TableHolder

