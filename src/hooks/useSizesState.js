import { useState } from 'react';

export default defaultScreenSizes => {
  const [sizes, setSizes] = useState(defaultScreenSizes);
  const [error, setError] = useState(null);

  const changeSize = newSizes => {
    const validNum = Object.keys(newSizes).every(key => typeof newSizes[key] === 'number');
    const maxValue = Object.keys(newSizes).every(key => newSizes[key] <= 2000);

    if (!validNum) {
      setError(`Please, make sure to provide a valid number for a size.`);
    } else if (!maxValue) {
      setError(`Size should be less than 2000.`);
    } else {
      setError(null);
      setSizes(newSizes);
    }
  };
  return [sizes, changeSize, error];
};
