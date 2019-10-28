import React from 'react';
import javascriptLogo from './JavaScript-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <img src={javascriptLogo} alt='Javascript Logo' />
      <br /><br /><br />
      <div>
        <div>ReactJs</div>
        <div>HTML5</div>
        <div>CSS</div>
      </div>
    </div>
  );
}

export default App;
