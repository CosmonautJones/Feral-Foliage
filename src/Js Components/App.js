import React, { Component } from 'react';
import Banner from './Banner.js';
import NavbarInstance from './Nav.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarInstance /> 
        <Banner />
      </div>
    );
  }
}

export default App;
