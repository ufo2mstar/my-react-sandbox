import React from 'react'
import Progress from '../../../static/Progress'
import ProductList from './MyTable'

export default class ArrTable extends React.Component {
  render() {
    return (
      <div>
        <Progress animated={true}/>
        <ProductList/>
      </div>
    )
  }
}
