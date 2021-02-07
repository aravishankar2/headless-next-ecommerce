import { useReducer, createContext } from "react";
import { params } from "./reducer/params";
import { IProps } from "../interfaces/iProps";
const initialState = {
  limit: 20,
  material: "",
  soldByThe: "",
  finish: "",
  frostProof: true,
  notFrostProof: true,
  order: ""
};
const ParamsContext = createContext({});

const ParamsProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(params, initialState);
  const value = { state, dispatch };

  return (
    <ParamsContext.Provider value={value}>{children}</ParamsContext.Provider>
  );
};

export { ParamsContext, ParamsProvider };
