import React, { Component } from 'react';
import NavBar from '../layout/NavBar';
import NewUserForm from './NewUserForm';

// eslint-disable-next-line react/prefer-stateless-function
class RegistrationBody extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NewUserForm />
      </div>
    );
  }
}

export default RegistrationBody;
