import React, { Component } from 'react';
import Banner from './Banner.js';
import NavbarInstance from './Nav.js';

import AddUser from '../Redux Components/UserForm';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarInstance /> 
        <Banner />
        <AddUser />
      </div>
    );
  }
}

export default App;
