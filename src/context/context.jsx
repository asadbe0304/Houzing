import { useReducer, createContext, useContext } from "react";
import { reducers } from "./reducer";
const Context = createContext({});
const initialState = {
  menu: false,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useCustom = () => {
  return useContext(Context);
};
