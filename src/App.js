import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Food from './food';

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

  addFood() {
    return this;
  }

  render() {
    const foodItems = this.state.foods ?
        this.state.foods.map(food => <Food
          key={food.id}
          name={food.name}
          unit={food.unit}
        />) :
        'No Food Items';

    return (
      <div>
        <h1>FOODZ</h1>
        <div>{foodItems}</div>
        <button onClick={this.addFood}>Add Food</button>
      </div>
    );
  }
}

export default App;
