import { useReducer, createContext } from "react";
import { filterbar } from "./reducer/filterbar";
import { IProps } from "../interfaces/iProps";

const initialState = {
  opened: true,
};

const FilterContext = createContext({});

const FilterBarProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(filterbar, initialState);
  const value = { state, dispatch };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FilterBarProvider };
