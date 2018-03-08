import React from 'react'
// import BootstrapTable from 'react-bootstrap-table-next';
import ReactDataGrid from 'react-data-grid';
import ReactDataGridPlugins from 'react-data-grid'

import products from './data'

class ProductList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {rows: products, originalRows: products};
    this._columns = Object.keys(this.state.rows[0]).map((key, index) => (
      {
        key: key,
        name: key,
        sortable: true,
        filterable: true
      }
    ));
  }

  rowGetter = (i) => {
    return this.state.rows[i];
  };

  handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };

    const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

    this.setState({ rows });
  };

  render() {
    return (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}
        //sort
        onGridSort={this.handleGridSort}
        minHeight={400}/>);
  }
}


export default ProductList;
