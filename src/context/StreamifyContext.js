// context/StreamifyContext.js - Streamify context
import React, { createContext, useState } from 'react';

export const StreamifyContext = createContext();

export const StreamifyProvider = ({ children }) => {
  const [data, setData] = useState({ /* initial data */ });

  // Functions to update data
  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <StreamifyContext.Provider value={{ data, updateData }}>
      {children}
    </StreamifyContext.Provider>
  );
};
