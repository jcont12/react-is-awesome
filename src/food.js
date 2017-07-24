import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Food(props) {
  return (
    <div>Name: {props.name} - {props.unit}</div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

export default Food;
