import React from 'react';
import { Link } from 'react-router-dom';

export default class Details extends React.Component {

    constructor () {
        super();
        this.state = {
            welcomeMessage: 'Welcome to the details page, WP!!'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                welcomeMessage: 'The best is yet to come!'
            })
            //good stuff heere
        }, 3000)
    }
    render() {
        return(
            <Link to='/'>
                <h1>{this.state.welcomeMessage}</h1>
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