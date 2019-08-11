import React, { useContext } from 'react';
import { AppContext } from '../contexts/SizesContext';
import useInputState from '../hooks/useInputState';
import '../styles/ContextExample.css';

const ContextExample = () => {
  const { sizes, changeSize, error } = useContext(AppContext);
  const [sm, setSm] = useInputState(768);
  const [md, setMd] = useInputState(992);
  const [lg, setLg] = useInputState(1200);
  const [xl, setXl] = useInputState(1600);

  return (
    <div className="ContextExample">
      <fieldset>
        <form
          method="post"
          className="sizesForm"
          onSubmit={e => {
            e.preventDefault();
            changeSize({ sm, md, lg, xl });
          }}
        >
          <label>
            <span>sm:</span>
            <input value={sm} onChange={setSm} type="number" />
          </label>
          <label>
            <span>md:</span>
            <input value={md} onChange={setMd} type="number" />
          </label>
          <label>
            <span>lg:</span>
            <input value={lg} onChange={setLg} type="number" />
          </label>
          <label>
            <span>xl:</span>
            <input value={xl} onChange={setXl} type="number" />
          </label>
          <button type="submit" className="submitBtn">Submit</button>
        </form>
      </fieldset>
      <div className={error ? 'error' : ''}>{error && error}</div>
      <div className="fromContext">
        <strong>Sizes from context:</strong>
        <ul>
          {Object.keys(sizes).map(key => (
            <li key={key}>
              {key} → {sizes[key]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContextExample;
