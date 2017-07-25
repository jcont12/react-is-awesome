import React, { Component } from 'react';
import '../App.css';


// eslint-disable-next-line react/prefer-stateless-function
function Header(props) {
  return (
    <h1>{props.title}</h1>
  );
}

export default Header;
