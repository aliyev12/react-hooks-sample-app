import React, { createContext, useReducer } from 'react';
import sizesReducer from '../reducers/sizes.reducer';

const defaultScreenSizes = {
  sm: {
    name: 'Small',
    size: 768
  },
  md: {
    name: 'Medium',
    size: 992
  },
  lg: {
    name: 'Large',
    size: 1200
  },
  xl: {
    name: 'Extra Large',
    size: 1600
  }
};

export const ReducerContext = createContext();

export const ReducerProvider = ({ children }) => {
  const [sizes, dispatch] = useReducer(sizesReducer, defaultScreenSizes);

  return (
    <ReducerContext.Provider value={{ sizes, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};
