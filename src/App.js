import React, {useState} from 'react';
import header from './components/header';
import figure from './components/figure';
import Word from './components/Word';
import wrongLetters from './components/wrongLetters';

import './App.css';

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setcorrectLetters] = useState([])
  const [wrongLetters, setwrongLetters] = useState([])

  return (
    <>
      <header />
      <div className='game-container'>
        <figure />
        <wrongLetters />
        <word />
      </div>
    </>
  );
}

export default App;
