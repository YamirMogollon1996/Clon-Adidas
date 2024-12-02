import React, { useState } from "react";
import useContexto from "../../Services/useContexto";
import ContUsuario from "../../Services/ContUsuario";
import { fechaFormateada } from "../../helpers/Hora";
import FormularioCompletes from "./FormularioCompletes";
import { FaPlus } from "react-icons/fa";
import { ButonUi, ModalChildren } from "../../helpers/ButonUi";
import FadeinSort from "../FadeinSort";


const Project = () => {
  const [modal, setmodal] = useState(false);
  const { llenarDatos, state } = useContexto();
  const { usuarios } = state;

  const CloseModal = () => {
    setmodal(!modal);
  };
  return (
    <>
      <ButonUi onClick={() => setmodal(!modal)}>
        <FaPlus></FaPlus>
      </ButonUi>
   <FadeinSort></FadeinSort>
      {/* 
      {modal && (
        <ModalChildren>
          <FormularioCompletes CloseModal={CloseModal}></FormularioCompletes>
        </ModalChildren>
      )} */}

      {usuarios.length > 0 ? (
        <ContUsuario lista={usuarios}></ContUsuario>
      ) : (
        <h1>...Cargadando</h1>
      )}
    </>
  );
};

export default Project;
