import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getactivity from './activity-get';

export default class Details extends React.Component {

    constructor () {
        super();
        
        this.state = {
            sport: {}
        };
    }

    componentDidMount() {
            let sportId = this.props.match.params.sportId;
            let sport = getactivity()
                .find((activity) =>  activity.id === sportId);
            this.setState({ sport });
    }
    render() {
        if(this.state.sport === undefined) {
                return <Redirect to='/not-found' />;
        } else {
        return(
                <div>
                    <h1>{this.state.sport.name}</h1>
                    <div>{this.state.sport.details}</div>
                    <img 
                        src={this.state.sport.logo}
                        alt={this.state.sport.name} />
                    <Link to='/'>
                        Back to home page
                    </Link>
                </div>
            );
        }
        
    }
}

// export default function Details() {
//     return(
//         <Link to='/'>
//             <h1>Welcome to the details page, WIP :)</h1>
//         </Link>
//     );
// }