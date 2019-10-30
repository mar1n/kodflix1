import React from 'react';

import football from './football.png';
import basketball from './basketball.png';
import tennis from './tennis.jpg';
import rugby from './rugby.png';
import pingpong from './ping-pong.jpg';
import dart from './dart.jpg';
import Sport from './Sport.js';

export default function Activity() {
    return (
      <div>
        <div className='containter'>
          <Sport id='football' name='Football' picture={football} />
          <Sport id='basketball' name='Basketball' picture={basketball} />
          <Sport id='rugby' name='Rugby' picture={rugby} />
        </div>
        <div className='containter'>
          <Sport id='tennis' name='Tennis' picture={tennis} />
          <Sport id='pingpong' name='Ping Pong' picture={pingpong} />
          <Sport id='dart' name='Dart' picture={dart} />
        </div>
      </div>
    );
  }