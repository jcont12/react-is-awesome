import React, { Component } from 'react';
import './App.css';
import PageBody from './index/PageBody';
import RegistrationBody from './users#new/RegistrationBody';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <RegistrationBody />
    );
  }
}

export default App;
