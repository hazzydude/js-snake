import SnakeCanvas from "./games/snake/snakeCanvas"
import React, { Component } from 'react'
import './App.scss';
import { render } from 'react-dom';
import Routes from "./Routes";
import MyNavbar from './myNavbar';

class App extends Component {

  render() {


    return (
      <div className="App-container">
        <div className="App">
          <div className="navbar-container">
            <MyNavbar />
          </div>
          <div className="content-container">
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
