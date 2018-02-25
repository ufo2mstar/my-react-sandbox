import React, {Component} from 'react';
import {Button, ButtonGroup, Row, Col} from 'reactstrap';
import Fader from './Fader'

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {cSelected: []};
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

    this.state.buttonList = [];
    this.makeNewButton = this.makeNewButton.bind(this);
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
    this.state.buttonList.append()
  }

  buildButton(text, index) {
    return (
      `<Button color="primary" onClick={() => this.onCheckboxBtnClick(1)}
              active={this.state.cSelected.includes(${index})}>${text}</Button>`
    )
  }

  render() {
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
        <Fader color="success" onClick={() => this.onCheckboxBtnClick(1)}
               active={this.state.cSelected.includes(1)}/>
        {/*</Row>*/}

      </div>
    );
  }
}

export default Example;
