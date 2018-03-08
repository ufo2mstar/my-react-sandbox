import React from 'react'
// import BootstrapTable from 'react-bootstrap-table-next';
import ReactDataGrid from 'react-data-grid';
// import ReactDataGridPlugins from 'react-data-grid-addons'
import {Toolbar, Data} from 'react-data-grid-addons'
// import {Selectors} from 'react-data-grid-addons'
import products from './data'

const {Selectors} = Data;

class ProductList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {rows: products, originalRows: products, filters: {}};
    this._columns = Object.keys(this.state.rows[0]).map((key, index) => (
      {
        key: key,
        name: key,
        sortable: true,
        filterable: true
      }
    ));
  }

  // rowGetter = (i) => {
  //   return this.state.rows[i];
  // };

  handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };

    const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

    this.setState({rows});
  };

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }
    this.setState({filters: newFilters});
  };

  onClearFilters = () => {
    // all filters removed
    this.setState({filters: {}});
  };

  getRows = () => {
    return Selectors.getRows(this.state);
  };

  getSize = () => {
    return this.getRows().length;
  };

  rowGetter = (rowIdx) => {
    let rows = this.getRows();
    return rows[rowIdx];
  };

  render() {
    return (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.getSize()}
        minHeight={400}
        //sort
        onGridSort={this.handleGridSort}
        //filter
        toolbar={<Toolbar enableFilter={true}/>}
        onAddFilter={this.handleFilterChange}
        onClearFilters={this.onClearFilters}
        enableCellSelect={true}
      />);
  }
}


export default ProductList;
