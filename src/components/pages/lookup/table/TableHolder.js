import React from 'react'
import axios from 'axios'
import Consts from '../../../consts'
import ArrTable from "./type/ArrTable";

const Table = (props) => {
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

const TableList = (props) => {
  return (
    <div>
      {props.tables.map(table => <Table key={table.id} {...table} />)}
    </div>
  );
};

class Form extends React.Component {
  state = {userName: ''}
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`${Consts.api_url}${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({userName: ''});
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               value={this.state.userName}
               onChange={(event) => this.setState({userName: event.target.value})}
               placeholder="Github username" required/>
        <button type="submit">Add table</button>
      </form>
    );
  }
}

class TableHolder extends React.Component {
  state = {
    tables: []
  };

  addNewTable = (tableInfo) => {
    this.setState(prevState => ({
      tables: prevState.tables.concat(tableInfo)
    }));
  };

  sendData = () => {
    // let uri = `${consts.api_url}/${this.props.match.params.id}`;
    let uri = `${Consts.api_url}`;
    console.log(uri);
    axios.get(uri)
      .then(resp => {
        console.log(resp.data);
        // this.props.data = resp.data;
        return resp.data;
      });
  };

  buildTableList() {
    return this.props.types.map((i) =>
      <div key={i}>
        {/* can pass nested tags apparently.. cool! */}
        {i}: {this.tableList[i - 1]} Table goes here...
        <TableList type={this.tableList[i - 1]}/>
        <Form/>
        <ArrTable/>
      </div>
    )
  }

  render() {
    return (
      <div>
        {/*<Form onSubmit={this.addNewTable} />*/}
        {/*<TableList tables={this.state.tables} />*/}
        {/*{this.buildTableList()}*/}
        <ArrTable {...this.props} data={this.sendData()} />
      </div>
    );
  }
}

export default TableHolder

