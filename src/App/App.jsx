import React, { useState } from 'react';
import './App.css';
import WishInput from './WishInput/WishInput';
import WishList from './WishList/WishList';

const initialWishes = [
  { done: false, text: 'Travel to the moon' },
  { done: true, text: 'Make an intro course to React' },
  { done: true, text: 'Pay the gym' },
  { done: false, text: 'Go to the gym' },
];
const App = () => {
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <h1>My wishlist</h1>
      <WishInput onNewWish={wish => setWishes([wish, ...wishes])} />
      <WishList wishes={initialWishes} onWishesChange={setWishes} />
      <button
        type="button"
        className="wish-clear"
        onClick={() => setWishes(wishes.filter(wish => !wish.done))}
      >
        Archive done
      </button>
    </div>
  );
};
export default App;
