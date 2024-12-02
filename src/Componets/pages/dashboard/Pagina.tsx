import React, { useEffect, useRef, useState } from "react";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  origenFrom from "../../Typos/index"


const LocalSrotageVaribale = "454545";

const Pagina = () => {
  const [ChekinVerify, setChekinVeify] = useState<String>("");
  const HandleChanuge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChekinVeify((prev) => prev.concat(e.target.value));
  };

  const navigate = useNavigate();
  const OnmouseCenter = () => {
    console.log("Mogollon");
  };

  const validateTemp = async () => {
    if (LocalSrotageVaribale == ChekinVerify) {
      await toast.success("Contrasenia Correcta", {
        position: "top-left",
        autoClose: 1200,
      });
      setTimeout(() => {
        navigate("/Tec");
      }, 1200);
    } else {
      toast.error("error al ingresar el codigo", {
        position: "top-left",
        autoClose: 1000,
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  useEffect(() => {
    if (ChekinVerify.length === 6) {
      validateTemp();
    }
  }, [ChekinVerify]);
  return (
    <>
      <div className="border min-h-screen flex items-center justify-center border-blue-300">
        <div className="min-w-[300px]  max-w-2xl  p-4 border mx-auto text-center rounded-lg  mt-6  border-blue-200 shadow-md  ">
          <h1 className="font-mono font-semibold  text-3xl  text-blue-800">
            Pon los 6 digitos{" "}
          </h1>
          <p className="mt-5 mb-5   text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            reiciendis fugiat soluta earum officiis autem dolore fugit
            doloremque voluptatibus ratione!
          </p>
          <div className=" mx-auto  place-content-center  flex-wrap flex  gap-4 justify-between">
            <input
              onMouseDown={OnmouseCenter}
              onChange={HandleChanuge}
              maxlength="1"
              pattern="[0-9]"
              className="border 
            
            outline-blue-500 w-20  h-20 text-center  text-blue-400  rounded-lg p-2 text-2xl  outline-blue  text-gray-700 border-none  border-blue-400 shadow-md  font-mono font-semibold 

            "
            ></input>
            <input
              onChange={HandleChanuge}
              maxlength="1"
              pattern="[0-9]"
              className="border  outline-blue-500 w-20   text-center  h-20 rounded-lg p-2 text-2xl text-blue-400 text-gray-700 border-blue-600  border-none  shadow-md  font-mono font-semibold "
            ></input>
            <input
              onChange={HandleChanuge}
              maxlength="1"
              pattern="[0-9]"
              className="border  outline-blue-500  w-20   text-center    text-blue-400  h-20 rounded-lg p-2 text-2xl  text-gray-700 border-blue-600  border-none  shadow-md  font-mono font-semibold "
            ></input>
            <input
              onChange={HandleChanuge}
              maxlength="1"
              pattern="[0-9]"
              className="border  outline-blue-500  w-20   text-center  text-blue-400  h-20 rounded-lg p-2 text-2xl  text-gray-700 border-blue-600  border-none  shadow-md  font-mono font-semibold "
            ></input>
            <input
              onChange={HandleChanuge}
              maxlength="1"
              pattern="[0-9]"
              className="border  outline-blue-500 w-20   text-center   text-blue-400 h-20 rounded-lg p-2 text-2xl  text-gray-700 border-blue-600  border-none  shadow-md font-mono font-semibold "
            ></input>
            <input
              onChange={HandleChanuge}
              maxlength="1"
              pattern="[0-9]"
              className="border   outline-blue-500 w-20   text-center text-blue-400  h-20 rounded-lg p-2 text-2xl  text-gray-700 border-blue-600 border-none  shadow-md  font-mono font-semibold "
            ></input>
          </div>
          <p className="mt-5 mb-5  text-gray-400"> Validcacion de condigo </p>
          <button>
            <MdVerified className="text-3xl"></MdVerified>
          </button>
        </div>
        <ToastContainer></ToastContainer>
        {/* <button onClick={notify}>Notify!</button> */}
      </div>
    </>
  );
};

export default Pagina;
