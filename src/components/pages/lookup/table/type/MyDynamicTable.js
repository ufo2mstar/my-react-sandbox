import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
// import ReactDataGrid from 'react-data-grid';

import products from './data'

const ProductList = () => {

  const productList = products;

  const columns = Object.keys(productList[0]).map((key, index) => (
    {
      dataField: key,
      text: key,
      sort: true
    }
  ));

  const defaultSorted = [{
    dataField: 'price',
    order: 'desc'
  }];

  return (
    <BootstrapTable
      keyField="id"
      data={productList}
      columns={columns}
      defaultSorted={defaultSorted}

    />
  );
};

export default ProductList;
