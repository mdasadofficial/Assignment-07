"use client"

import React, { createContext, useState } from "react";
export const friendContext = createContext();
const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const ContextData = {
    data,
    setData,
  };

  return (
    <friendContext.Provider value={ContextData}>
      {children}
    </friendContext.Provider>
  );
};

export default ContextProvider;
