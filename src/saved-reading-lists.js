import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SavedReadingLists extends Component {
  render() {
    const linklist = this.props.lists.map(list => <p key={list.id}><a href="#" onClick={() => this.props.loadList}>{`List ${list.id}`}</a></p>);
    return (
      <div>{ linklist }</div>
    );
  }
}

SavedReadingLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object),
  loadList: PropTypes.func.isRequired,
};

SavedReadingLists.defaultProps = {
  lists: [],
};

export default SavedReadingLists;
