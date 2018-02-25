import React from 'react'
import {Button, Form, FormGroup, Input, InputGroup, InputGroupAddon} from "reactstrap";
import FontAwesome from 'react-fontawesome'

const OldSearchForm = () => (
    <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
        {/*</input>*/}
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>

)


const SearchForm = () => (
    <Form inline>
        <FormGroup>
            {/*<Label for="exampleEmail" hidden>Email</Label>*/}
            <InputGroup>
                <Input className={'bg-dark text-light'} id="exampleEmail" placeholder="any..."/>
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


export {OldSearchForm}
export {newSearchForm}
export default SearchForm
