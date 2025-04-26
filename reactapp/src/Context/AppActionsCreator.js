/* eslint-disable prettier/prettier */
import { AppActions } from "./AppActions";
export const authenticatedAction = (token) => {
  return { type: AppActions.AUTHENTICATED, payload: token };
};

export const logInAction = (data) => {
  return { type: AppActions.LOG_IN, payload: data };
};

export const logOutAction = () => {
  return { type: AppActions.LOG_OUT };
};
