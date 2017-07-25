import React, { Component } from 'react';
import '../App.css';
import NavBar from '../layout/NavBar';
import Row from './Row';


// eslint-disable-next-line react/prefer-stateless-function
class PageBody extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Row />
      </div>
    );
  }
}

export default PageBody;
