import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <button
        onClick={toggleModal}
        className="md:hidden p-4 bg-indigo-600 text-white rounded-lg shadow-lg fixed bottom-4 right-4"
      >
        Abrir Modal
      </button>

      {/* Modal */}
      <div
        className={`fixed top-0 left-0 bg-indigo-800 h-screen w-full md:w-[80%] flex flex-col items-center justify-center gap-4 p-4 font-mono transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <h1 className="text-3xl text-white">Contact U.S</h1>
        <hr />
        <p className="hover:bg-indigo-500 text-white p-3 rounded-lg border shadow-lg mx-2">
          TemporalMente
        </p>
        <p className="hover:bg-indigo-500 text-white border p-3 rounded-lg shadow-lg mx-2">
          TemporalMente
        </p>
        <p className="hover:bg-indigo-500 text-white border p-3 rounded-lg shadow-lg mx-2">
          TemporalMente
        </p>
        <p className="hover:bg-indigo-500 p-3 text-white border rounded-lg shadow-lg mx-2">
          TemporalMente
        </p>

        {/* Botón para cerrar el modal */}
        <button
          onClick={toggleModal}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg"
        >
          Cerrar
        </button>
      </div>
    </>
  );
};

export default Modal;
