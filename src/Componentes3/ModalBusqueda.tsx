import React from "react";
import { FaSearch } from "react-icons/fa";
import ModalCar from "../modal/modalCar";
import ModalFavo from "../modal/modalFavo";
import BusquedadModal from "../modal/BusquedadModal";

interface PropsModalitem {
  modalChangue: (rama: number) => void;
  modal: number | boolean;
  CloseModalFromchildren : () => void
}

const ModalBusqueda = ({ modalChangue, modal  , CloseModalFromchildren}: PropsModalitem) => {
  return (
    <>
      <div
        onClick={CloseModalFromchildren}
        className="fixed w-full h-[100%]   flex justify-center items-center backdrop-blur-sm  z-20 "
      >
        {modal === 1 && <BusquedadModal></BusquedadModal>}
        {modal === 2 && <ModalCar></ModalCar>}
        {modal === 3 && <ModalFavo></ModalFavo>}
      </div>
    </>
  );
};

export default ModalBusqueda;
