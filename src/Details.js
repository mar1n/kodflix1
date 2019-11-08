import React from 'react';
import { Link } from 'react-router-dom';
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
        
        return(
            <Link to='/'>
                <h1>{this.state.sport.name}</h1>
            </Link>
        );
    }
}

// export default function Details() {
//     return(
//         <Link to='/'>
//             <h1>Welcome to the details page, WIP :)</h1>
//         </Link>
//     );
// }