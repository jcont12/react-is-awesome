import React, { Component } from 'react';
import '../App.css';


// eslint-disable-next-line react/prefer-stateless-function
function NavBarItem(props) {
  return (
    <a href={props.url}>{props.text}</a>
  );
}

export default NavBarItem;
