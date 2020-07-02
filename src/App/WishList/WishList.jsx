import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WishItem from '../WishItem';

const WishList = ({ wishes, onWishesChange }) => (
  <ul className="wish-list">
    {wishes.map(({ done, text }, i) => (
      <WishItem
        text={text}
        done={done}
        id={`wish${i}`}
        key={text}
        onDoneChange={(value) => {
          const updatedWishes = [...wishes];
          updatedWishes[i].done = value;
          onWishesChange(updatedWishes);
        }}
      />
    ))}
  </ul>
);

// Necesario?
WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      text: PropTypes.string,
      onWishesChange: PropTypes.func,
    }),
  ),
};

WishList.defaulProps = {
  wishes: [],
  onWishesChange: () => {},
};
export default WishList;
