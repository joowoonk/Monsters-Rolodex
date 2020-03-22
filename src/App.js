import React, { Component } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component"


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:""
    };

    // this.handlechange = this.handlechange.bind(this) 
    // This line above can be omited because arrow function on handlechange will let it go through this.state right away without binding it to handlechange to this. Because it goes through window scope through arrow function.
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handlechange = (e) =>{
    this.setState({searchField: e.target.value})
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
      <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder='search monsters'
        handlechange={this.handlechange}

      />

      <CardList monsters = {filteredMonsters} /> 
     
    </div>
  );
  }
 
}

export default App;
