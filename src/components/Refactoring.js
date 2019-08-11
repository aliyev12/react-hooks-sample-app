import React from 'react';
import useInputState from '../hooks/useInputState';
import NeedRefactoring from './NeedRefactoring';
import '../styles/Refactoring.css';

const Refactoring = () => {
  const [myProp, setMyProp, reset] = useInputState('');

  return (
    <div className="Refactoring">
      <div className="inputContainer">
        <input
          value={myProp}
          onChange={setMyProp}
          placeholder="Specify a prop"
        />
        <button onClick={reset}> &times; </button>
      </div>
      <div className="arrow">
        <span>→</span>
      </div>
      <div className="needRefactoring">
        <NeedRefactoring myProp={myProp} />
      </div>
    </div>
  );
};

export default Refactoring;
