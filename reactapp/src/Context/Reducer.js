/* eslint-disable prettier/prettier */

import { jwtDecode } from "jwt-decode";
import { AppActions } from "./AppActions";
import { toggleLocalStorage } from "../Utils/jwt";

const initials = {
  isAuthanticated: false,
  user: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case AppActions.AUTHENTICATED: {
      const user = jwtDecode(payload);
      return { ...state, isAuthanticated: true, user: user };
    }
    case AppActions.LOG_IN: {
      const { token } = payload;
      const user = jwtDecode(token);
      toggleLocalStorage(token);
      return { ...state, isAuthanticated: true, user };
    }
    case AppActions.LOG_OUT:
      toggleLocalStorage();
      return { ...state, isAuthanticated: false, user: null };
    default:
      return state;
  }
};

export { initials, reducer };
