import React from 'react'
// import Progress from '../../../static/Progress'
// import ProductList from './MyTable'
import ArrDatagrid from "./MyGcmTable";

// export default class ArrTable extends React.Component {
//   render() {
//     return (
//       <div>
//         <ArrDatagrid data={this.props.data}/>
//         {/*<ProductList/>*/}
//         {/*<Progress animated={false}/>*/}
//       </div>
//     )
//   }
// }

const ArrTable = ({data}) => (
  <div>
    <ArrDatagrid data={data}/>
    {/*<ProductList/>*/}
    {/*<Progress animated={false}/>*/}
  </div>
);

export default ArrTable
