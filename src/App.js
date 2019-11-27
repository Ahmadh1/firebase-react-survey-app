import React, { Component } from 'react';
import './App.css'
import logo from './logo.svg'
import Survey from './Components/Survey';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="React" className="App-logo" />
          Firebase React Survey App
        </div>
        <Survey />
      </div>
    );
  }
}
