import React from 'react';
import PropTypes from 'prop-types';

function SavedReadingLists(props) {
  const linklist = props.lists.map(list =>
    <p key={list.id}>
      <a href="#" onClick={() => props.loadList(list.id - 1)}>
        {`List ${list.id}`}
      </a>
    </p>);
  return (
    <div>{ linklist }</div>
  );
}

SavedReadingLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object),
  loadList: PropTypes.func.isRequired,
};

SavedReadingLists.defaultProps = {
  lists: [],
};

export default SavedReadingLists;
