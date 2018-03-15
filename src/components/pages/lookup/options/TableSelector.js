import React, {Component} from 'react';
import {Button, ButtonGroup, Row, Col} from 'reactstrap';
import Consts from "../../../consts";
import axios from "axios/index";

class TableSelector extends Component {
  constructor(props) {
    super(props);

    console.log("table selector:");
    console.log(props);


    // this.costomList = ['Select All', 'Clear All', 'Custom'];
    this.state = {
      cSelected: Array(props.tableList.length).fill().map((e, i) => i + 1),
      checkBoxes: props.tableList,
      activeTables: this.getActiveTableList
    };
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

    // this.state.buttonList = [];
    this.makeNewButton = this.makeNewButton.bind(this);
    this.getActiveTableList = this.getActiveTableList.bind(this);

    // fader try
    // this.state = {fadeIn: true};
    this.toggle = this.toggle.bind(this);


    // this.tableList.map((tableName, index) => this.props.selectHandle(tableName, ['data', index]))
    props.tableList.map((tableName, index) => this.getTableData(tableName, ['data', index]))
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

    this.getTableData(this.state.checkBoxes[selected - 1], this.state.cSelected.includes(selected));
  }


  getTableData(tableName, isSelected) {
    // /posts 	100 items
// /comments 	500 items
// /albums 	100 items
// /photos 	5000 items
// /todos 	200 items
// /users 	10 items

// http://jsonplaceholder.typicode.com/posts/1/comments

    if (isSelected) {
      // let api_url = `${Consts.api_url}.com/${tableName.toLowerCase()}/${this.props.lookup}`;
      let api_url = `${Consts.api_url}.com/${tableName.toLowerCase()}`;
      console.log(`hitting: ${api_url}`);
      axios.get(api_url, {headers: {'Access-Control-Allow-Origin': '*',}})
      // axios.get(api_url)
        .then(resp => {
          console.log(resp);
          this.props.selectHandle(tableName, resp.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      this.props.selectHandle(tableName, [])
    }
  }

  makeNewButton() {
    this.state.checkBoxes.append()
  }

  buildButtonList() {
    return this.state.checkBoxes.map((name, i) => {
        // this.props.selectHandle(name, ['data', i]);
        return <Button key={name+i} color="primary" onClick={() => this.onCheckboxBtnClick(i + 1)}
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
        {/*<p>{this.showState()}</p>*/}
      </div>
    );
  }
}

export default TableSelector;
