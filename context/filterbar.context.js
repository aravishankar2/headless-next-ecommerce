import { useState, useEffect, useReducer, createContext } from "react";
import { filterbar } from "./reducer/filterbar";
import { params } from "./reducer/params";
import { useRouter } from "next/router";
// initial state
const initialState = {
  opened: false,
};

// create context
const FilterContext = createContext({});

// context provider
const FilterBarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterbar, initialState);
  const value = { state, dispatch };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export { FilterContext, FilterBarProvider };
