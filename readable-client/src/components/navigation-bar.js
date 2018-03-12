import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'

import {LinkContainer} from 'react-router-bootstrap'

class NavigationBar extends Component {

  render(){
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to='/'><a>Udacity Readable Project S2!</a></LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/"><NavItem>Posts</NavItem></LinkContainer>
                <NavItem href="https://github.com/dkrefta/reactnd-project-readable-starter">Github Diego Krefta</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
    );
  };
}

export default NavigationBar;
