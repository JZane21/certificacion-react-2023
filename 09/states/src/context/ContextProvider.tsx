import { Context, createContext, useContext, useReducer } from "react";
import { initialValues, storeReducer } from "./storeReducer";

export const StoreContext = createContext({});

interface Props{
  children:JSX.Element,
}

export const StoreProvider = ({children}:Props) => {
  return (
    <StoreContext.Provider 
    value={useReducer(storeReducer,initialValues)}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  // console.log('usando contexto desde useStore');
  return useContext(StoreContext)[0];
};

export const useDispatch = () => useContext(StoreContext)[1];
