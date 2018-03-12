import React from 'react'
import {Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label} from "reactstrap";
import FontAwesome from 'react-fontawesome'

const OldSearchForm = () => (
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
    {/*</input>*/}
    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
  </form>

)


const betterSearchForm = () => (
  <Form inline>
    <FormGroup>
      {/*<Label for="exampleEmail" hidden>Email</Label>*/}
      <InputGroup>
        <Input className={'bg-dark text-light'} id="exampleEmail" placeholder="any..."/>
        {/*<Input className={''} id="exampleEmail" placeholder="any..."/>*/}
        <InputGroupAddon addonType="append">
          <Button color="primary">
            <FontAwesome name='search'/>
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>
    {' '}
  </Form>
)

const newSearchForm = () => (
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <Button color="danger">To the Left!</Button>
    </InputGroupAddon>
    <Input placeholder="and..."/>
    <InputGroupAddon addonType="append">
      <Button color="success">To the Right!</Button>
    </InputGroupAddon>
  </InputGroup>
)


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.value);
  }

  render() {
    let inpClass = 'bg-dark text-light';
    let btnClass = 'primary';
    // let btnClass = 'warning';
    // inpClass = '' // for default search look

    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="gcmSearch" hidden>ECI/ARR</Label>
          <InputGroup>
            <Input className={inpClass} id="gcmSearch" placeholder="ECI or ARR ID..."
                   type="text" value={this.state.value} onChange={this.handleChange}/>
            {/*<Input className={''} id="exampleEmail" placeholder="any..."/>*/}
            <InputGroupAddon addonType="append">
              <Button color={btnClass}>
                <FontAwesome name='search'/>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
        {' '}
      </Form>
    );
  }
}


export {OldSearchForm}
export {betterSearchForm}
export {newSearchForm}
export default SearchForm
