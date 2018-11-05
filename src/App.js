import React, { Component } from 'react';
import './App.css';

import One from './one'
import Two from './two'

class App extends Component {
  render() {
    return (
      <div className="App">
        <One></One>
        <Two></Two>
      </div>
    );
  }
}

export default App;
