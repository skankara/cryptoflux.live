import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

function App() {
  return (
    <Fragment>
      <div className = "container">
        <Navbar color="faded" light expand="md">

          <NavbarBrand href="/">
            React Bootstrap Example
          </NavbarBrand>
          <Nav className="ml-auto" navbar>

            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">Home</NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                Tutorial
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </Fragment>
  );
}

export default App;
