import React, { createContext, useContext, useState } from 'react';

const RecognizedTextContext = createContext();

export const useRecognizedText = () => useContext(RecognizedTextContext);

export const RecognizedTextProvider = ({ children }) => {
  const [recognizedText, setRecognizedText] = useState("");

  return (
    <RecognizedTextContext.Provider value={{ recognizedText, setRecognizedText }}>
      {children}
    </RecognizedTextContext.Provider>
  );
};