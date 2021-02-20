import { useReducer, createContext } from "react";
// import { params } from "./reducer/params";
import { IProps } from "../interfaces/iProps";
const initialState = {
  limit: "10",
  material: "",
  soldByThe: "",
  finish: "",
  frostProof: true,
  notFrostProof: true,
  order: "",
};

type State = {
  material: string;
  finish: string;
  soldByThe: string;
  order: string;
  limit: string;
  frostProof: boolean
};

type Action = {
  type: string;
  payload: string;
};

type Context = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const params: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "SOLD_PER":
      return { ...state, soldByThe: action.payload };
    case "MATERIAL":
      return { ...state, material: action.payload };
    case "LIMIT":
      return { ...state, limit: action.payload };
    case "FROST_PROOF":
      return { ...state, frostProof: Boolean(action.payload) };
    case "FINISH":
      return { ...state, finish: action.payload };
    case "LOAD_MORE":
      return { ...state, limit: action.payload };
    case "ORDER":
      return { ...state, order: action.payload };
    case "RESET":
      return { ...initialState };
    default:
      return state;
  }
};

const ParamsContext = createContext<Context>({
  state: initialState,
  dispatch: () => {},
});

const ParamsProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(params, initialState);
  const value = { state, dispatch };

  return (
    <ParamsContext.Provider value={value}>{children}</ParamsContext.Provider>
  );
};

export { ParamsContext, ParamsProvider };
