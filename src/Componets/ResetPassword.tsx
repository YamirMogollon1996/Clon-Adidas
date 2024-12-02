import axios from "axios";
import React, { useState } from "react";
import ModalChek from "../Componentes/ui/ModalChek";

interface ChanugePassword {   
  contrasenia: string;

}


const ResetPassword = () => {
  const [Form, setForm] = useState({
    contrasenia: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let primero = await axios.post("http://localhost:4000/recuperarPassword", {
      email: Form.contrasenia,
    });
    let secondo = await primero.data;
    if (secondo.msg) {
      alert("Revisa Tu correo Electronico");
    }
  };
  return (
    <>
      <section className="bg-gray-50  min-h-screen dark:bg-gray-900 flex justify-center items-center">
        <div className="border-gray-50 shadow-xl  max-w-md mx-auto  bg-slate-800 p-4 text-center mt-5 mb-5 rounded-xl">
          <h2 className="text-center font-mono  text-slate-400 mb-5">
            Reset Password
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              // onSubmit={handleSubmit}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({
                  contrasenia: e.target.value,
                })
              }
              className="border-none  w-[90%] h-[60px] px-4 rounded-sm  outline-gray-50"
              placeholder="email"
            ></input>
            <br></br>
            <br></br>
            <button className="border bg-green-500 hover:bg-green-600 w-[90%] p-4 border-none text-white rounded-lg ">
              Enter Your Email
            </button>
            <p className="text-gray-400 mt-5 font-mono">
              Con esta opcion podras cambiar tu password
            </p>
          </form>

        </div>
        <pre> </pre>
      </section>
    </>
  );
};

export default ResetPassword;
