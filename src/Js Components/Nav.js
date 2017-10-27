import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../Css Components/Nav.css';
import { Button } from 'react-bootstrap'

class NavComponent extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <div className='navWide'>
          <div className='wideDiv'>
          <a href='#'>Link 1</a>
          <a href='#'>Link 2</a>
          <a href='#'>Link 3</a>
          </div>
        </div>
        <div className='navNarrow'>
          <i className='fa-paper-plane'></i>
            <div className='narrowLinks'>
            <a href='#' onClick={this.linkToggle}>Link 1</a>
            <a href='#' onClick={this.linkToggle}>Link 2</a>
            <a href='#' onClick={this.linkToggle}>Link 3</a>
            </div>
          </div>
        </nav>
    );
  }
linkToggle() {
    let linksE1 = document.querySelector('.narrowLinks');
    if(linksE1.style.display === 'block') {
      linksE1.style.display = 'none';
    } else {
      linksE1.style.display = 'block';
    }
  }
};

export default NavComponent