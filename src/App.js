import React from 'react';
import './App.css';
import header from './components/header';
import figure from './components/figure';

function App() {
  return (
    <>
      <header />
      <div className='game-container'>
        <figure></figure>
      </div>
    </>
  );
}

export default App;
