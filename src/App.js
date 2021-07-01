import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state={

      string: 'Hello Pops',
      
      monsters:[],
      searchField:''
    };
    //this.handleChange=this.handleChange.bind(this);//this is replaced by arrow function
  }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(alpa=>this.setState({monsters:alpa}))
    .catch(reject=>console.log('there is error'));
  }

  handleChange= syn => {

    this.setState({searchField:syn.target.value} );

  }
  render() {
    const { monsters,searchField } =this.state;
   
    //const  monsters  =this.state.monsters;
    //const  searchField  =this.state.searchField;
     const filteredMonsters=monsters
     .filter(monster =>monster.name.toLowerCase().includes(searchField.toLowerCase()))
     .filter(monster =>monster.name.toLowerCase().includes(searchField.toLowerCase()));
     return ( 
    <div className="App">
      <h1>Roller Monsters</h1>
      <SearchBox placeholder='search monsters'
      handleChange={this.handleChange}
      >
     
      </SearchBox>
      {/* <input type='search' placeholder='search here' onChange={ syn => { this.setState({searchField:syn.target.value} ) }}/> */}
            <CardList monsters={filteredMonsters}>
     
      </CardList>
      
    </div>
  );
  }
}

export default App;
