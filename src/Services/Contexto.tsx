import React, { useContext, createContext, useReducer } from "react";
import { intialEstado, Reducer } from "./Reducer";
import { RootUserios } from "./Reducer";

//Contexto Reducer
interface ContextType {
  state: {
    usuarios: RootUserios[];
  };
  llenarDatos : (  payload: RootUserios)  => void  
}

export const ContextoProviderTo = createContext<ContextType>({} as ContextType);

interface PropsItemContexto {
  children: JSX.Element | JSX.Element[];
}

const Contexto = ({ children }: PropsItemContexto) => {
  const [state, dispatch] = useReducer(Reducer, intialEstado);
  const llenarDatos = (payloadItme :  RootUserios) => {
    dispatch({
      type: "aumentar",
      payload: payloadItme,
    });
  };

  const data = { state, llenarDatos };

  return (
    <ContextoProviderTo.Provider value={data}>
      {children}
    </ContextoProviderTo.Provider>
  );
};

export default Contexto;
