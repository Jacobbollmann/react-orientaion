// To use state we need hooks
import {useState} from 'react';
import Button from '@mui/material/Button';

function Card({globalName}) {
  const [myName, setMyName] = useState('Default');

  function clickChangeName() {
    // set name to new name
    console.log('Test');
    setMyName('JAKE');
  }

  const [count, setCount] = useState(0);

  function clickChangeNumber() {
    console.log('Test Number Change');
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className="card">
      {/* create state to increment the count */}
    <Button 
      variant="contained" 
      size="small"
      color="secondary"
      onClick={clickChangeNumber}
      >
        Count is {count}
      </Button>
    <p>{globalName ? globalName : myName}</p>

    <Button 
      variant="outlined"
      size="medium"
      onClick={clickChangeName}
      >
        Change Name
      </Button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
  );
}

export default Card;