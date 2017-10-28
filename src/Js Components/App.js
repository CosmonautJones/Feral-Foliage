import React, { Component } from 'react';
import Banner from './Banner.js';
import NavComponent from './Nav.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavComponent /> 
        <Banner />
      </div>
    );
  }
}

export default App;
