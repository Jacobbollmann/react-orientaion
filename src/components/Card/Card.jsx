// To use state we need hooks
//import React from 'react';
//const useState = React.useState;

import {useState} from 'react';

function Card({globalName}) {
  const [myName, setMyName] = useState('Default');

  function clickChangeName() {
    // set name to new name
    console.log('Test');
    setMyName('JAKE');
  }

  return (
    <div className="card">
      {/* create state to increment the count */}
    <button >count is 0</button>
    <p>{globalName ? globalName : myName}</p>
    <button onClick={clickChangeName}>Change Name</button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  );
}

export default Card;