import React, { useState, useEffect } from 'react';

import Sport from './Sport.js';
import football from './football.png';

export default function Activity() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch('/rest/shows')
        .then(response => response.json())
        .then(characters => {
            console.log('the list of characters is' + characters)
            setActivity(characters);
        })
}, []);

  return (
    <div>
      <div className='containter'>
        {
          activity.map(activity => (
            <Sport key={activity.name} id={activity.id} name={activity.name} picture={football} />
          ))
        }
      </div>
    </div>
  );
}

