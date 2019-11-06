import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Activity from './Activity.js';
import Details from './Details.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Activity} />
        <Route path='/:sportId' component={Details} />
      </div >
    </Router>
  );
}

export default App;
