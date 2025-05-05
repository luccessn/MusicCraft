/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";
const getInitialCart = () => {
  const localData = localStorage.getItem("cartItems");
  return {
    cartItems: localData ? JSON.parse(localData) : [],
  };
};
const AppContext = createContext();
const AppContextReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {}, getInitialCart);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context) {
    return context;
  }
  throw new Error("AppContex Error");
};

export default AppContextReducer;
// useEffect(() => {
//   const token = localStorage.getItem("accessToken");
//   if (token && isTokenValid(token)) {
//     dispatch(authenticatedAction(token));
//   } else if (token && !isTokenValid(token)) {
//     toggleLocalStorage();
//   }
// }, []);
// import { isTokenValid, toggleLocalStorage } from "../Utils/jwt";
// import { authenticatedAction } from "./AppActionsCreator";
