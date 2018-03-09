import React from 'react'
// import Progress from '../../../static/Progress'
// import ProductList from './MyTable'
import ArrDatagrid from "./MyDynamicTable";

export default class ArrTable extends React.Component {
  render() {
    return (
      <div>
        <ArrDatagrid {...this.props}/>
        {/*<ProductList/>*/}
        {/*<Progress animated={false}/>*/}
      </div>
    )
  }
}
