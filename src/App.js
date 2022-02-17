import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const searchMonsters = monsters.filter((monster) => monster.name.includes(search));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={searchMonsters} />
      </div>
    );
  }
}

export default App;
