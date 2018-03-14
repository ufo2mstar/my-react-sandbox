// source: bit.ly/psreact4
// ie: https://gist.github.com/samerbuna/7791e68fd93ccc47b8bf48f8a7f35b0f

const Card = ({avatar_url,name,company}) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {name}
        </div>
        <div>{company}</div>
      </div>
    </div>
  );
};

const CardList = ({cards}) => {
  return (
    <div>
      {cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
};

class Form extends React.Component {
  state = { userName: '' }
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               value={this.state.userName}
               onChange={(event) => this.setState({ userName: event.target.value })}
               placeholder="Github username" required />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);

