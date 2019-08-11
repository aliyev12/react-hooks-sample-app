import { useState, useEffect } from 'react';

export default sizes => {
  const [result, setResult] = useState({ text: '', size: '' });

  useEffect(() => {
    // Callback function
    const handleWindowWidthChange = ({ target }) => {
      const windowWidth = target.outerWidth;
      // Determine window size
      if (windowWidth < sizes.sm) {
        setResult({ text: 'Extra small', size: windowWidth });
      } else if (windowWidth >= sizes.sm && windowWidth < sizes.md) {
        setResult({ text: 'Small', size: windowWidth });
      } else if (windowWidth >= sizes.md && windowWidth < sizes.lg) {
        setResult({ text: 'Medium', size: windowWidth });
      } else if (windowWidth >= sizes.lg && windowWidth < sizes.xl) {
        setResult({ text: 'Large', size: windowWidth });
      } else {
        setResult({ text: 'Extra Large', size: windowWidth });
      }
    };

    // Add event listener
    window.addEventListener('resize', handleWindowWidthChange);

    // Remove event listener to prevent memory leaks
    return () => window.removeEventListener('resize', handleWindowWidthChange);
  });
  return result;
};