import React from 'react'
import axios from 'axios'
import Consts from '../../Consts'
import ArrTable from "../lookup/table/type/ArrTable";

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} alt={props.avatar_url}/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const Table = (props) => {
  return (
    <div>
      <ArrTable {...props} />
    </div>
  )
}

const CardList = (props) => {
  return (
    <div>
      {/*{props.cards.map(card => <Card key={card.id} {...card} />)}*/}
      {props.cards.map(card => <Table key={card.id} data={[card]}/>)}
    </div>
  );
};

class Form extends React.Component {
  state = {userName: ''};

  handleSubmit = (event) => {
    event.preventDefault();
    let api_url = `${Consts.api_url}`
    // console.log(api_url);
    axios.get(api_url, {headers: {'Access-Control-Allow-Origin': '*',}})
      .then(resp => {
        console.log(resp);
        // this.props.onSubmit(resp.data[this.state.userName]);
        this.props.onSubmit(resp.data);
        this.setState({userName: 'kod'});
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               value={this.state.userName}
               onChange={(event) => this.setState({userName: event.target.value})}
               placeholder="Github username" required/>
        <button type="submit">Add card</button>
      </form>
    );
  }
}

class Schedule extends React.Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfos) => {
    cardInfos.map((cardInfo) => this.setState(prevState => ({
        cards: prevState.cards.concat(cardInfo),
      }))
    )
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default Schedule
