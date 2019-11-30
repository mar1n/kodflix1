import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css';

export default class Details extends React.Component {

  constructor() {
      super();

      this.state = {
          sport: {}
      };
  }

  componentDidMount() {
    let sportId = this.props.match.params.sportId;
   
    fetch('/rest/activity')
          .then(response => response.json())
          .then(characters =>  characters.find(sport => sport.id === sportId)).then(sport => this.setState({sport}))

  }
  render() {
      if (this.state.sport === undefined) {
          return <Redirect to='/not-found' />;
      } else if (this.state.sport.name) {
          return (
              <div className='Details'>
                  <h1>{this.state.sport.name}</h1>
                  <div className='content'>
                      <div className='text'>
                          {this.state.sport.details}
                      </div>
                      <img
                          className='image'
                          src={require(`../frontend/common/images/${this.state.sport.id}.png`)}
                          alt={this.state.sport.name} />
                  </div>
                  <Link to='/'>
                      Back to home page
                  </Link>
              </div>
          );
      }
      return <div></div>

  }
}
