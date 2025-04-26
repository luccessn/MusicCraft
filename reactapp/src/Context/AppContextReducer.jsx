/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initials, reducer } from "./Reducer";
import { isTokenValid, toggleLocalStorage } from "../Utils/jwt";
import { authenticatedAction } from "./AppActionsCreator";

const context = createContext();
const AppContextReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initials);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && isTokenValid(token)) {
      dispatch(authenticatedAction(token));
    } else if (token && !isTokenValid(token)) {
      toggleLocalStorage();
    }
  }, []);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

export const useAppContext = () => {
  const AppContext = useContext(context);
  if (AppContext) {
    return AppContext;
  }
  throw new Error("AppContex Error");
};

export default AppContextReducer;
