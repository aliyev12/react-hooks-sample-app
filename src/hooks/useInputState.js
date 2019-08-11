import { useState } from 'react';

export default initialVal => {
  const [value, setValue] = useState(initialVal);
  const handleChange = e => setValue(e.target.type === 'number' ? parseInt(e.target.value) : e.target.value);
  return [value, handleChange];
};
