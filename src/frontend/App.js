import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Activity from './Activity.js';
import Details from '../Details/Details.js';
import './App.css';
import NotFound from './NotFound';
import Api from './Api';
function App() {
  return (
      <Router>
        <div className="App">
        
          <Switch>
          <Api />
            <Route exact path='/' component={Activity} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:sportId' component={Details} />
          </Switch>
        </div >
      </Router>
  );
}

export default App;
