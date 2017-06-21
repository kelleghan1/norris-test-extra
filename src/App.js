import React, { Component } from 'react';
import logo from './home-logo.png';
import './App.css';
import JokeList from './components/joke_list';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Great Chuck Norris Websites</h2>
        </div>
        <div id="joke-list">
        <JokeList />
        </div>
      </div>
    );
  }
}

export default App;
