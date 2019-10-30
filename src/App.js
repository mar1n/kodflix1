import React from 'react';
import football from './football.png';
import basketball from './basketball.png';
import tennis from './tennis.jpg';
import rugby from './rugby.png';
import pingpong from './ping-pong.jpg';
import dart from './dart.jpg';
import Sport from './Sport.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <div className='containter'>
        <Sport name='Football' picture={football} />
        <Sport name='Basketball' picture={basketball} />
        <Sport name='Rugby' picture={rugby} />
      </div>
      <div className='containter'>
        <Sport name='Tennis' picture={tennis} />
        <Sport name='Ping Pong' picture={pingpong} />
        <Sport name='Dart' picture={dart} />
      </div>
    </div >
  );
}

export default App;
