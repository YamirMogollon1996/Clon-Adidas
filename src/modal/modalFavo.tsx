import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const ModalFavo = () => {
  return (
    <>
      <div className="fixed   top-0 left-0 w-[35%] h-[100%] bg-white z-20 ">
        <div className="bg-black h-[50px] text-white p-0 left-0 flex justify-between items-center">
          <h1 className="text-white text-center font-mono text-2xl">
            Favoritos{" "}
          </h1>
          <FiArrowLeft className="text-white text-2xl mx-4"></FiArrowLeft>
        </div>

        <h1 className="font-mono  text-gray-400  text-3xl  text-center mt-8 bounce-once ">
          Favoritos{" "}
        </h1>
      </div>
    </>
  );
};

export default ModalFavo;
