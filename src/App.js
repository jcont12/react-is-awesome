import React, { Component } from 'react';
import './App.css';
import BookList from './BookList.js'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {

  // logIn() {
  //   let name = 'Anil'
  //   let loginHandler = (username, password) => {
  //     $.ajax = {
  //       method: 'post',
  //       url: 'http://localhost:3000/sessions',
  //       data: this.serialize(),
  //     }
  //   }
  // }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to MyBooks</h2>
          <BookList />
        </div>
      </div>
    );
  }
}

// class Login extends Component {
//   handleClick() {
//     console.log('in login component');
//     console.log('this to follow');
//     console.log(this);
//   }
//
//   render() {
//     return (
//         <form
//           id='login-form'
//           method='post'
//           action='http://localhost:3000/sessions'
//           onSubmit={this.handleClick} >
//           <input type='text' name='user[name]' placeholder='Name' />
//           <input type='password' name='user[password]' placeholder='Password' />
//           <input type='submit' name='login' value='Log In'/>
//         </form>
//       // {"user_id":431,"token":"eyJ0b2tlbiI6NDMxfQ==\n"}
//     );
//   }
// }

export default App;
