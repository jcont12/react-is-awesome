import React, { Component } from 'react';
import './App.css';
import BookList from './BookList.js'
import $ from 'jquery';
import Nav from './Nav.js'

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
  constructor() {
    super();
    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    $.ajax(
      {
        method: 'GET',
        url: 'http://localhost:3000/books'
      }
    ).done( data => {
        console.log('just returned from GET, data to follow')
        console.log(data)
        this.setState({books: data});
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to MyBooks</h2>
          <Nav />
        </div>
        <BookList books={this.state.books} />
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
