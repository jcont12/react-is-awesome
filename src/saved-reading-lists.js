import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SavedReadingLists extends Component {
  render() {
    const linklist = this.props.lists.map(list => <p key={list.id}>{`List ${list.id}`}</p>);
    return (
      <div>{ linklist }</div>
    );
  }
}

SavedReadingLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object),
};

SavedReadingLists.defaultProps = {
  lists: [],
};

export default SavedReadingLists;
