import { useContext, } from "react";
import { ContextProvider } from "../context/context";



export const useCustom = () => {
  return useContext(ContextProvider);
};
