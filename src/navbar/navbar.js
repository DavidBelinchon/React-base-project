import React, { Component } from 'react';
//import './App.css';
//import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

class Navigator extends Component {
  render() {
    return (
		<div>
		  <Navbar inverse collapseOnSelect>
		<Navbar.Header>
		  <Navbar.Brand>
			<a href="#">React-Bootstrap</a>
		  </Navbar.Brand>
		  <Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
		  <Nav>
			<LinkContainer to="/repos"><NavItem eventKey={1} href="#">Link</NavItem></LinkContainer>
		<LinkContainer to="/about"><NavItem eventKey={1} href="#">Link</NavItem></LinkContainer>
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
		{this.props.children}
	</div>
    );
  }
}

export default Navigator;