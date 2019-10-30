import React from 'react';
import football from './football.png';
import basketball from './basketball.png';
import tennis from './tennis.jpg';
import rugby from './rugby.png';
import pingpong from './ping-pong.jpg';
import dart from './dart.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>

      <div className='containter'>

        <div className='item'>
          <img src={football} alt='Football' />
          <div className='overlay'>
            <h1>Football</h1>
          </div>
        </div>

        <div className='item'>
          <img src={basketball} alt='Basketball' />
          <div className='overlay'>
            <h1>Basketball</h1>
            </div>
        </div>

        <div className='item'>
          <img src={rugby} alt='Rugby' />
          <div className='overlay'>
            <h1>Rugby</h1>
          </div>
        </div>
      </div>
      <div className='containter'>

        <div className='item'>
          <img src={tennis} alt='Tennis' />
          <div className='overlay'>
            <h1>Tennis</h1>
          </div>
        </div>

        <div className='item'>
          <img src={pingpong} alt='Ping pong' />
          <div className='overlay'>
            <h1>Ping pong</h1>
          </div>
        </div>

        <div className='item'>
          <img src={dart} alt='Dart' />
          <div className='overlay'>
            <h1>Dart</h1>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
