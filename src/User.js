import React from 'react';
import PropTypes from 'proptypes';

function User(props) {
  return (
      <div>
        <a onClick={props.clickHandler(props.id)} id={props.id} href={'/users/' + props.id}>{props.name}</a>
      </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}
export default User;
