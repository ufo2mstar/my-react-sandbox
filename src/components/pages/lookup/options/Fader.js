import React from 'react';
import {Button, Fade} from 'reactstrap';
import ArrTable from '../table/type/ArrTable'

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fadeIn: true};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
  }

  render() {
    return (
      <div>
        <Button color={this.props.color} active={this.props.active} onClick={this.toggle}>Toggle Fade</Button>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3"> {/* can pass nested tags apparently.. cool! */}
          {/*This content will fade in and out as the button is pressed*/}
          <ArrTable/>
        </Fade>
      </div>
    );
  }


};
