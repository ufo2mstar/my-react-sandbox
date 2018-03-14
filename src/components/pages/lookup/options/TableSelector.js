import React, {Component} from 'react';
import {Button, ButtonGroup, Row, Col} from 'reactstrap';

import TableHolder from '../table/TableHolder'

class Example extends Component {
  constructor(props) {
    super(props);

    console.log("table selector:");
    console.log(props);

    this.tableList = ['Arrs', 'Assets', 'Expos', 'Pledges'];
    this.costomList = ['Select All', 'Clear All' , 'Custom'];
    this.state = {cSelected: [1,2,3,4], checkBoxes: this.tableList, activeTables: this.getActiveTableList};
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

    // this.state.buttonList = [];
    this.makeNewButton = this.makeNewButton.bind(this);
    this.getActiveTableList = this.getActiveTableList.bind(this);

    // fader try
    // this.state = {fadeIn: true};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }

  getActiveTableList(){
    return this.state.cSelected.map((i) =>
      this.state.checkBoxes[i - 1]
    )
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({cSelected: [...this.state.cSelected]});
  }

  makeNewButton() {
    this.state.checkBoxes.append()
  }

  buildButtonList() {
    return this.state.checkBoxes.map((name, i) =>
      <Button key={name} color="primary" onClick={() => this.onCheckboxBtnClick(i + 1)}
              active={this.state.cSelected.includes(i + 1)}>{name}</Button>
    )
  }

  // buildTableList() {
  //   return this.state.cSelected.map((i) =>
  //     <div key={i}>
  //       {/* can pass nested tags apparently.. cool! */}
  //       {i}: {this.tableList[i-1]} Table goes here...
  //       <ArrTable/>
  //     </div>
  //   )
  // }

  oldRender() {
    return (
      <div>
        <Row>
          <Col>
            <h5>Checkbox Buttons</h5>
            <ButtonGroup>
              <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)}
                      active={this.state.cSelected.includes(1)}>One</Button>
              <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)}
                      active={this.state.cSelected.includes(2)}>Two</Button>
              <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)}
                      active={this.state.cSelected.includes(3)}>Three</Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(this.state.cSelected)}</p>

          </Col>
        </Row>

        {/*<Row>*/}
        {/*<h5>Prog Try</h5>*/}
        {/*<Fader color="success" onClick={() => this.onCheckboxBtnClick(1)}*/}
               {/*active={this.state.cSelected.includes(1)}/>*/}
        {/*</Row>*/}

      </div>
    );
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            {/*<h5>Checkbox Buttons</h5>*/}
            <ButtonGroup>
              {this.buildButtonList()}
            </ButtonGroup>
            <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
          </Col>
        </Row>
        {/*{this.buildTableList()}*/}
        {/*<TableContainer types={this.state.activeTables} />*/}
        <TableHolder {...this.props}/>
        {/*<ArrTable/>*/}
      </div>
    );
  }
}

export default Example;
