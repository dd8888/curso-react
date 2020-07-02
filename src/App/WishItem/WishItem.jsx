import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const WishItem = ({
  done, text, id, onDoneChange,
}) => (
  <li
    className={classnames('wish-list__item', {
      'wish-list__item--done': done,
    })}
  >
    <input
      id={id}
      checked={done}
      onChange={e => onDoneChange(e.target.checked)}
      type="checkbox"
    />
    <label htmlFor={id}>{text}</label>
  </li>
);

WishItem.propType = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};
WishItem.defaultProps = {
  done: false,
  text: '',
  id: '',
  onDoneChange: () => {},
};

export default WishItem;
