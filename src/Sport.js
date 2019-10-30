import React from 'react';
import { Link } from 'react-router-dom';
export default function Sport(props) {
    return (
        
            <Link to='/details' className='item'>
                <img src={props.picture} alt={`${props.name} + logo`} />
                <div className='overlay'>
                    <h1>{props.name}</h1>
                </div>
            </Link>
        
    );
}