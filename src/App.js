import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = { foods: null };
  }
  componentDidMount() {
    $.get('http://localhost:3000/foods', (data) => {
      this.setState({ foods: data });
    });
  }
  render() {
    const foodItems = this.state.foods ? this.state.foods.map((food, index) => <div key={index}>{food.name}</div>) : 'No Food Items';

    return (
      <div>
        <h1>FOODZ</h1>
        <div>{foodItems}</div>
      </div>
    );
  }

}

export default App;
