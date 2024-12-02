import React from "react";
import { RootUserios } from "./Reducer";
interface PropsItem {
  lista: RootUserios[];
}

const ContUsuario = ({ lista }: PropsItem) => {
  return (
    <>
      {lista.map((item) => (
        <div className="border">
          <h1>{item.fecha}</h1>
        </div>
      ))}
    </>
  );
};

export default ContUsuario;
