import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closeLoginPopup }}>
      {children}
    </PopupContext.Provider>
  );
};
