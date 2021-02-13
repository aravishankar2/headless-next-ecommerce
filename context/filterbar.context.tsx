import { useReducer, createContext } from "react";
import { IProps } from "../interfaces/iProps";

const initialState = {
  opened: true,
  searchOpened: false,
};

type State = {
  opened: boolean;
  searchOpened: boolean;
};

type Action = {
  type: string;
  payload: boolean;
};

type Context = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const FilterContext = createContext<Context>({
  state: initialState,
  dispatch: () => {},
});

const filterbar: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "TOGGLE_OPEN":
      return { ...state, opened: action.payload };
    case "TOGGLE_SEARCH":
      return { ...state, searchOpened: action.payload };
    default:
      return state;
  }
};

const FilterBarProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(filterbar, initialState);
  const value: Context = { state, dispatch };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FilterBarProvider };
