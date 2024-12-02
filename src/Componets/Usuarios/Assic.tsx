import React, { useEffect, useState } from "react";

import {
  useAddPostMutation,
  // useCreateusuarioMutation,
  useGetusuariosQuery,
} from "../../Services/Usuarios";
import { useForm } from "react-hook-form";
import { Usuarios } from "../../Services/indes.D";
import Card from "./CardTo";
import ModalChek from "../../Componentes/ui/ModalChek";
import { Navigate, useNavigate } from "react-router-dom";
const initalValues: Usuarios = {
  nombre: "",
  avatar: "",
  dni: "",
  id: 0,
  roleId: 0,
};

const Assic = () => {
  const {
    isError,
    isFetching,
    data: usuarios,
    refetch,
  } = useGetusuariosQuery(null);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: initalValues });

  const [addPost, { isLoading, isSuccess, error }] = useAddPostMutation();
  const [modal, setmodal] = useState(false);
  const navigate = useNavigate();

  console.log(import.meta.env.VITE_BACK_END);

  const enviar = async (data: Usuarios) => {
    const formdata = new FormData();
    if (data.avatar && data.avatar[0]) {
      formdata.append("nombre", data.nombre);
      formdata.append("dni", data.dni);
      formdata.append("avatar", data.avatar[0]);
      formdata.append("roleId", String(data.roleId));
    }

    await addPost(formdata);
    setmodal(true);

    setTimeout(() => {
      setmodal(false);
    }, 1000);

    refetch();
    reset();

    navigate("/Productos");
  };

  console.log(usuarios);

  if (isFetching) {
    return <div> ....Cargadno</div>;
  }
  if (isError) {
    return (
      <div className="font-mono text-center ">
        Peticion Invalida °°°° no estas Authorizado para entrar a esa Ruta
        necesitas ser administrador :({" "}
      </div>
    );
  }

  return (
    <>
      <div className=" p-4"></div>
      <div className="border  rounded-lg  min-w-md  max-w-xl  mx-auto shadow-lg ">
        <div className="border  bg-gradient-to-r from-indigo-500 to-blue-500 ...    rounded-md border-none h-[30px]"></div>
        <h2 className="text-3xl text-center m-4  text-gray-500  font-serif">
          Create Producto
        </h2>
        <form onSubmit={handleSubmit(enviar)} className="flex flex-col">
          <input
            {...register("nombre", {
              required: {
                value: true,
                message: "necesitas poneer un valor",
              },
            })}
            placeholder="nombre"
            className="border   outline-slate-400 rounded-sm p-4 m-4 bg-slate-50"
          ></input>
          <input
            {...register("dni", {
              required: {
                value: true,
                message: "necesitas un valor",
              },
            })}
            placeholder="dni"
            className="border  outline-slate-400   rounded-sm p-4 m-4 bg-slate-50"
          ></input>

          <input
            {...register("avatar", {
              required: {
                value: true,
                message: "Requerimos un avatar",
              },
            })}
            type="file"
            placeholder="imagen"
            className="border outline-slate-400    rounded-sm p-4 m-4 bg-slate-50"
          ></input>

          <select
            {...register("roleId", {
              required: {
                value: true,
                message: "Necesitamos un Rol",
              },
            })}
            className="border outline-slate-400    rounded-sm p-4 m-4 bg-slate-50"
          >
            <option>Elejir Opcion</option>
            <option>admin</option>
            <option>user</option>
          </select>

          <div className="mx-4 mb-4">
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              possimus pariatur dolores rerum iusto unde, quas autem vitae,
              aliquam voluptas vero tenetur atque nesciunt perspiciatis.
              Obcaecati in tempora facilis minima.
            </p>

            <br></br>
            <div className="border  bg-gradient-to-r from-indigo-500 to-blue-500 ...    rounded-md border-none h-[30px]"></div>

            <input
              className="rounded-xl shadow-lg bg-stone-400"
              type="checkbox"
            ></input>
            <label className="text-slate-500">
              {" "}
              Aceptar Terminos y Condiciones
            </label>
          </div>

          <input
            className="border    bg-slate-900   hover:bg-slate-800 cursor-pointer text-white font-mono rounded-sm p-4 m-4 bg-slate-50"
            type="submit"
          ></input>
        </form>

        {/* <pre>{JSON.stringify(watch())}</pre> */}
      </div>

      {modal && <ModalChek></ModalChek>}
    </>
  );
};

export default Assic;
