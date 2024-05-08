import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  const setOrderData = (data) => {
    setOrder(data);
  };

  return (
    <OrderContext.Provider value={{ order, setOrder: setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};
