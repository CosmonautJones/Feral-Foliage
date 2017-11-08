import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

import Banner from './Banner';
import PlantsList from './PlantsList';
import PlantDetails from './PlantDetails';


// import NavbarInstance from './Nav.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <NavbarInstance />  */}
          <Route exact path ='/' component={PlantsList} />
          <Route path='/plants/:id' component={PlantDetails} />
          <Banner />
        </div>
      </Router>
    );
  }
}

export default App;
