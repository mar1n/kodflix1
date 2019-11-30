import React, { useState, useEffect } from 'react';

import Sport from './Sport.js';

export default function Activity() {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch('/rest/activity')
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
            <Sport key={activity.name} id={activity.id} name={activity.name} />
          ))
        }
      </div>
    </div>
  );
}

