import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import Activity from './Activity.js';
import Details from './Details/Details.js';
import './App.css';
import NotFound from './NotFound';

class App extends React.Component {
  constructor({ history, location}) {
    super();
    ReactGA.initialize('UA-154355013-1');
    this.trackPageView(location);
    history.listen((location) => this.trackPageView(location));
  }

  trackPageView(location) {
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={Activity} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:sportId' component={Details} />
          </Switch>
        </div >
    );
  }
  
}

export default withRouter(App);
