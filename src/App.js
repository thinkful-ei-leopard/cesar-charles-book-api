import React, { Component } from 'react';
import Header from './components/Header'
import Search from './components/Search'
import Filter from './components/Filter'

class App extends Component{
  state ={
    search:'Book',
    'Book Type': 'No Filter',
    'Print Type': 'All'
  }


  render() {
    return (
      <main className='App'>
        <Header />
        <Search 
        state={this.state}
        />
        <Filter 
        state={this.state}
        />
      </main>
    );
    }

}
export default App;
