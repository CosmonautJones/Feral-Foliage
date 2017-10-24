import React, { Component } from 'react';
import '../Css Components/Banner.css';

class App extends Component {
  render() {
    return (
      <div className="Banner">
        <div className="Banner__image">
          <header className="Banner__header">
            <h1>Feral Foliage</h1>
          </header>
            <p className="Banner__description"> Experience the Untamed Landscape </p>
        </div>
      </div>
    );
  }
}

export default App;
