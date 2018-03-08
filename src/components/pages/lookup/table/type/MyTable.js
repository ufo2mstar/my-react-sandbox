import React from 'react'
// import BootstrapTable from 'react-bootstrap-table-next';

// import React, {PropTypes} from 'react';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import BootstrapTable from 'react-bootstrap-table-next';

import products from './data'

const ProductList = ({
                       // products,
                       activePage,
                       // onNavigatePage
                     }) => {



  // const productList = products.productList;
  const productList = products;
  // console.log(productList);

  const columns = [{
    dataField: 'id',
    text: 'Product ID',
    sort: true
  }, {
    dataField: 'productName',
    text: 'Product Name',
    sort: true
  }, {
    dataField: 'price',
    text: 'Product Price',
    sort: true
  }, {
    dataField: 'manufacturedDate',
    text: 'mfd date',
    sort: false
  }, {
    dataField: 'expiryDate',
    text: 'exp date',
    sort: true
  }
  ];

  const defaultSorted = [{
    // dataField: 'productName',
    // order: 'desc'
    dataField: 'price',
    order: 'desc'
  }];

  // const options = {
  //   hideSizePerPage: true,
  //   // page: activePage,
  //   // onPageChange: onNavigatePage
  // };

  return (
    <BootstrapTable
      keyField="id"
      data={productList}
      columns={columns}
      defaultSorted={defaultSorted}
      // fetchInfo={{dataTotalSize: products.resultsCount}}
      // options={options}
      // remote
      hover
      // pagination
    />
  );
};


// ProductList.propTypes = {
//   products: PropTypes.object.isRequired,
//   // activePage: PropTypes.number.isRequired,
//   // onNavigatePage: PropTypes.func.isRequired
// };

export default ProductList;
