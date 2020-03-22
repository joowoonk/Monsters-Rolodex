import React, { Component } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component"

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
 

  render(){
    const { monsters, searchField} = this.state; 
    //line 24,25 are equlvalent to 22. 
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField; 
    // console.log(monsters)
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
     return (
    <div className="App">
      <input 
        type='serach' 
        placeholder="serch monsters" 
        onChange={e => {
          this.setState({ searchField: e.target.value});

        }} />

      <CardList monsters = {filteredMonsters} /> 
     
    </div>
  );
  }
 
}

export default App;
