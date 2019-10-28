import React from 'react';
import javascriptLogo from './JavaScript-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <img src={javascriptLogo} alt='Javascript Logo' />
      
      <div className='containter'>
        <div className='item'>Football</div>
        <div className='item'>Baskteball</div>
        <div className='item'>Rugby</div>
      </div>
      <div className='containter'>
        <div className='item'>Tennis</div>
        <div className='item'>Ping pong</div>
        <div className='item'>Dart</div>
      </div>
    </div>
  );
}

export default App;
