/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React from "react";
import { useAppContext } from "../Context/AppContextReducer";
import { useNavigate } from "react-router-dom";
import { logOutAction } from "../Context/AppActionsCreator";

const testpage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  const logOut = () => {
    dispatch(logOutAction());
    navigate("/");
  };
  return (
    <div>
      <h1>{state.user ? state.user.userName : "alo"}</h1>
      <h1 className="text-red-500 text-3xl">TEST AFTER LOGIN</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default testpage;
