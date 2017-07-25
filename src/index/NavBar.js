import React, { Component } from 'react';
import '../App.css';
import NavBarItem from './NavBarItem';


// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      linkData: [
        { text: 'Home', url: '/' },
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
      <ul>{links}</ul>
    );
  }
}

export default NavBar;
