import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const OldAbout = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%"
                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                 alt="Card image cap"/>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%"
                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                 alt="Card image cap"/>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%"
                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                 alt="Card image cap"/>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional
            content. This card has even longer content than the first to show that equal height
            action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

// checkbox buttons code

function addCheckbox() {
  const {checkboxes} = this.state,
    label = this.refs.label.value;

  checkboxes.push({
    checked: true,
    label
  });

  this.setState({
    checkboxes
  });
}

function toggleCheckbox(index) {
  const {checkboxes} = this.state;

  checkboxes[index].checked = !checkboxes[index].checked;

  this.setState({
    checkboxes
  });
}

function renderCheckboxes() {
  const {checkboxes, filter} = this.state;

  return checkboxes
    .filter(checkbox =>
      (filter === 'ALL') ||
      (filter === 'CHECKED' && checkbox.checked) ||
      (filter === 'UNCHECKED' && !checkbox.checked)
    )
    .map((checkbox, index) =>
      <div>
        <label>
          <input
            type="checkbox"
            checked={checkbox.checked}
            onChange={toggleCheckbox.bind(this, index)}
          />
          {checkbox.label}
        </label>
      </div>
    );
}

function updateFilter(filter) {
  this.setState({
    filter
  });
}

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxes: [],
      filter: 'ALL'
    };
  }

  render() {
    return (
      <div>
        {renderCheckboxes.call(this)}
        <input ref="label" type="text"/>
        <button onClick={addCheckbox.bind(this)}>Add Checkbox</button>
        <div>
          <h4>Filters ({this.state.filter})</h4>
          <button onClick={updateFilter.bind(this, 'ALL')}>ALL</button>
          {' | '}
          <button onClick={updateFilter.bind(this, 'CHECKED')}>CHECKED</button>
          &nbsp;|&nbsp;
          <button onClick={updateFilter.bind(this, 'UNCHECKED')}>UNCHECKED</button>
        </div>
      </div>
    );
  }
}


export {OldAbout};
export default About;
