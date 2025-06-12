// src/context/ScrollContext.js

"use client";

import React, { createContext, useState, useContext } from "react";

// 1. Create the context
const ScrollContext = createContext(null);

// 2. Create the Provider component
export const ScrollProvider = ({ children }) => {
  const [targetId, setTargetId] = useState(null);

  return (
    <ScrollContext.Provider value={{ targetId, setTargetId }}>
      {children}
    </ScrollContext.Provider>
  );
};

// 3. Create a custom hook for easy access
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};