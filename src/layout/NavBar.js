import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import '../App.css';
import NavBarItem from './NavBarItem';
import SearchBar from './SearchBar';

// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      linkData: [
        { text: 'Log In', url: '/sessions/new' },
        { text: 'Sign Up', url: '/users/new' },
      ],
    };
  }
  render() {
    const links = this.state.linkData.map(link =>
      <NavBarItem text={link.text} url={link.url} key={link.text} />,
    );
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">GoodReads</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {links}
        </Nav>
        <SearchBar />
      </Navbar>
    );
  }
}

export default NavBar;
