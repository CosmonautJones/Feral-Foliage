import React, {Component} from 'react';
import '../Css Components/Nav.css';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';


// class NavComponent extends Component{
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <nav>
//         <div className='navWide'>
//           <div className='wideDiv'>
//             <ButtonToolbar>
//               <Button bsStyle ="success" a href='http://google.com' target="_blank">Google </Button>
//               <Button bsStyle ="success" a href='#'>Link 1 </Button>
//               <Button bsStyle ="success" a href='#'>Link 2 </Button>
//             </ButtonToolbar>
//           </div>
//         </div>
//         <div className='navNarrow'>
//           <i className='fa-paper-plane'></i>
//             <div className='narrowLinks'>
//             <a href='#' onClick={this.linkToggle}>Link 1</a>
//             <a href='#' onClick={this.linkToggle}>Link 2</a>
//             <a href='#' onClick={this.linkToggle}>Link 3</a>
//             </div>
//           </div>
//         </nav>
//     );
//   }
// }


//   linkToggle() {
//     let linksE1 = document.querySelector('.narrowLinks');
//     if(linksE1.style.display === 'block') {
//       linksE1.style.display = 'none';
//     } else {
//       linksE1.style.display = 'block';
//     }
//   }
// };

// export default NavComponent

 class NavComponent extends Component{
    constructor(props) {
      super(props);
    }
  render() {
    return (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
  }
}

export default NavComponent