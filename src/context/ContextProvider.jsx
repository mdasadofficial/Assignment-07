"use client";

import React, { createContext, useState } from "react";

export const friendContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

const contactDate = new Date()
const formatDate = contactDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

  const handleAction = ({friendData, type})=>{
    const newData = {
      ...friendData, 
      type,
      formatDate
    }
    setData([...data, newData])
  }
  const value={ data, setData, handleAction}


  return (
    <friendContext.Provider  value={value}>
      {children}
    </friendContext.Provider>
  );
};

export default ContextProvider;
