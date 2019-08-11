import React, { createContext } from 'react';
import useSizesState from '../hooks/useSizesState';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const defaultScreenSizes = {
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1600
  };
  const [sizes, changeSize, error] = useSizesState(defaultScreenSizes);

  return (
    <AppContext.Provider value={{ sizes, changeSize, error }}>
      {children}
    </AppContext.Provider>
  );
};
