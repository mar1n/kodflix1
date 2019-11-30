import React from 'react';
import { Link } from 'react-router-dom';

export default function Sport(props) {
    return (
        <Link to={`/${props.id}`} className='item'>
            <img src={require(`../frontend/common/images/${props.id}.png`)} alt={props.id} />
            <div className='overlay'>
                <h1>{props.name}</h1>
            </div>
        </Link>
    );
}