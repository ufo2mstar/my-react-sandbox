import React from 'react'
// import BootstrapTable from 'react-bootstrap-table-next';

// import React, {PropTypes} from 'react';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import BootstrapTable from 'react-bootstrap-table-next';

const ProductList = ({
                       // products,
                       activePage,
                       // onNavigatePage
                     }) => {
const products = [
  {"id": 1, "productName": "pain reliever", "price": 14, "manufacturedDate": "2016-08-01", "expiryDate": "2016-07-11"},
  {
    "id": 2,
    "productName": "Dorzolamide Hydrochloride and Timolol Maleate",
    "price": 100,
    "manufacturedDate": "2015-12-30",
    "expiryDate": "2016-05-29"
  },
  {
    "id": 3,
    "productName": "Fentanyl Citrate",
    "price": 52,
    "manufacturedDate": "2016-10-12",
    "expiryDate": "2016-10-29"
  },
  {
    "id": 4,
    "productName": "Luminous Pure Aura CC",
    "price": 22,
    "manufacturedDate": "2016-09-07",
    "expiryDate": "2015-12-12"
  },
  {
    "id": 5,
    "productName": "LBEL NATURAL FINISH MOISTURIZING FOUNDATION SPF 25",
    "price": 14,
    "manufacturedDate": "2016-10-12",
    "expiryDate": "2016-04-03"
  },
  {"id": 6, "productName": "VP-GGR-B6", "price": 68, "manufacturedDate": "2016-05-30", "expiryDate": "2016-10-19"},
  {"id": 7, "productName": "Sweet Potato", "price": 40, "manufacturedDate": "2016-04-27", "expiryDate": "2016-06-11"},
  {
    "id": 8,
    "productName": "MEIJER ALOE GEL",
    "price": 38,
    "manufacturedDate": "2016-11-04",
    "expiryDate": "2016-05-02"
  },
  {
    "id": 9,
    "productName": "Neomycin and Polymyxin B Sulfates and Dexamethasone",
    "price": 28,
    "manufacturedDate": "2016-04-06",
    "expiryDate": "2016-08-05"
  },
  {"id": 10, "productName": "CRESTOR", "price": 63, "manufacturedDate": "2016-02-02", "expiryDate": "2016-06-26"},
  {
    "id": 11,
    "productName": "ASPERGILLUS FUMIGATUS",
    "price": 90,
    "manufacturedDate": "2016-07-25",
    "expiryDate": "2016-09-03"
  },
  {"id": 12, "productName": "DOXYCYCLINE", "price": 4, "manufacturedDate": "2016-05-22", "expiryDate": "2016-01-06"},
];



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
    dataField: 'productName',
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
      // hover
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
