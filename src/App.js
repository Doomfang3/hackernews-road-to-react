import React, { Component } from 'react';
import Search from './Search';
import Table from './Table';
import './App.css';


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list,
      searchTerm: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm:event.target.value });
  }

  onDismiss = id => {
    const updatedList = this.state.list.filter(item =>  item.objectID !== id);
    this.setState({ list: updatedList });
  };

  render() {
    const { list, searchTerm } = this.state;
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        />
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
