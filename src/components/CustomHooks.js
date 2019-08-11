import React, { useContext } from 'react';
import useWindowWidth from '../hooks/useWindowWidth';
import { AppContext } from "../contexts/SizesContext";
import '../styles/CustomHooks.css';

const CustomHooks = () => {
  const {sizes} = useContext(AppContext);
  const widthClassification = useWindowWidth(sizes);

  return (
    <div className="CustomHooks">
      <div className="container">
        {widthClassification.text ? (
          <div className="main">
            <h1>Current width: {widthClassification.size}</h1>
            <h2>Window size is: {widthClassification.text} </h2>
            <div
              className="box"
              style={{
                width: widthClassification.size / 8,
                height: widthClassification.size / 8
              }}
            />
          </div>
        ) : (
          <h2>Start resizing the window to get the size</h2>
        )}
      </div>
    </div>
  );
};

export default CustomHooks;
