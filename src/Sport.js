import React from 'react';
import football from './football.png';
import basketball from './basketball.png';
import tennis from './tennis.jpg';
import rugby from './rugby.png';
import pingpong from './ping-pong.jpg';
import dart from './dart.jpg';

export default function Sport(props) {
    return (
        
            <div className='item'>
                <img src={props.picture} alt={`${props.name} + logo`} />
                <div className='overlay'>
                    <h1>{props.name}</h1>
                </div>
            </div>
        
    );
}