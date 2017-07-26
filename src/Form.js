import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor () {
    super();
    this.state = {
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
      this.props.submitFormClicked();
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

export default Form;
