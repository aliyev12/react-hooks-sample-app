import React, { useState, useContext } from 'react';
import { ReducerContext } from '../contexts/ReducerContext';

const Edit = ({ target }) => {
  const { sizes, dispatch } = useContext(ReducerContext);
  const [name, setName] = useState(sizes[target].name);
  const [display, setDisplay] = useState('none');

  return (
    <>
      <button
        type="button"
        className="editBtn"
        onClick={e => setDisplay(display === 'none' ? 'block' : 'none')}
      >
        <span role="img" aria-label="pencil">
          ✏️
        </span>
      </button>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="New size name"
        className="newNameInput"
        style={{ display }}
      />
      <button
        type="button"
        style={{ display }}
        className="saveBtn"
        onClick={e => {
          dispatch({
            type: 'EDIT_NAME',
            payload: { target, name }
          });
          setDisplay('none');
        }}
      >
        <span role="img" aria-label="floppy disk">
          💾
        </span>
      </button>
    </>
  );
};

export default Edit;
