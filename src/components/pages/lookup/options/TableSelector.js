import React, {Component} from 'react';
import {Button, ButtonGroup, Row, Col} from 'reactstrap';

class TableSelector extends Component {
  constructor(props) {
    super(props);

    console.log("table selector:");
    console.log(props);


    // this.costomList = ['Select All', 'Clear All', 'Custom'];
    this.state = {cSelected: Array(props.tableList.length).fill().map((e,i)=>i+1), checkBoxes: props.tableList, activeTables: this.getActiveTableList};
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

    // this.state.buttonList = [];
    this.makeNewButton = this.makeNewButton.bind(this);
    this.getActiveTableList = this.getActiveTableList.bind(this);

    // fader try
    // this.state = {fadeIn: true};
    this.toggle = this.toggle.bind(this);

    // this.tableList.map((tableName, index) => this.props.selectHandle(tableName, ['data', index]))
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }

  getActiveTableList() {
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
    this.props.selectHandle(this.state.checkBoxes[selected - 1], this.state.cSelected.includes(selected) ? ['data'] : [])
  }

  makeNewButton() {
    this.state.checkBoxes.append()
  }

  buildButtonList() {
    return this.state.checkBoxes.map((name, i) => {
        // this.props.selectHandle(name, ['data', i]);
        return <Button key={name} color="primary" onClick={() => this.onCheckboxBtnClick(i + 1)}
                       active={this.state.cSelected.includes(i + 1)}>{name}</Button>
      }
    )
  }

  showState = () => {
    // console.log(this.state);
    return JSON.stringify(this.state)
  };

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
        <p>{this.showState()}</p>
      </div>
    );
  }
}

export default TableSelector;
