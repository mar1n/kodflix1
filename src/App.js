import React from 'react';
import javascriptLogo from './JavaScript-logo.png';
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
      <img src={javascriptLogo} alt='Javascript Logo' />
      
      <div className='containter'>
       
        <div className='item'>
        <img src={football} alt='Football' />
          </div>
        
        <div className='item'><img src={basketball} alt='Basketball' /></div>
        
        <div className='item'><img src={rugby} alt='Rugby' /></div>
      </div>
      <div className='containter'>
      
        <div className='item'><img src={tennis} alt='Tennis' /></div>
        
        <div className='item'><img src={pingpong} alt='Ping pong' /></div>
        
        <div className='item'><img src={dart} alt='Dart' /></div>
      </div>
    </div>
  );
}

export default App;
