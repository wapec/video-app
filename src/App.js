import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Landing from './components/landing/landing';

class App extends Component {

  less() {
    console.log('App class, you did it');
  }

  render() {
    return (
      <div className="app">
        <Landing />
      </div>
    );
  }
}

export default App;
