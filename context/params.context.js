import { useState, useEffect, useReducer, createContext, useRef } from "react";
import { params } from "./reducer/params";
import { useRouter } from "next/router";
// initial state
const initialState = {
  limit: 100,
  material: "",
  soldByThe: "",
  frostProof: true,
  notFrostProof: true
};

// create context
const ParamsContext = createContext({});

// context provider
const ParamsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(params, initialState);
  const value = { state, dispatch };
  
  return (
    <ParamsContext.Provider value={value}>{children}</ParamsContext.Provider>
  );
};

export { ParamsContext, ParamsProvider };
