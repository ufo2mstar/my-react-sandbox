import React from 'react'
// import BootstrapTable from 'react-bootstrap-table-next';
import ReactDataGrid from 'react-data-grid';

import products from './data'

class ProductList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {productList: products};
    this._columns = Object.keys(this.state.productList[0]).map((key, index) => (
      {
        key: key,
        name: key,
        sort: true
      }
    ));
  }

  rowGetter = (i) => {
    return this.state.productList[i];
  };

  render() {
    return (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.productList.length}
        minHeight={500}/>);
  }
}


export default ProductList;
