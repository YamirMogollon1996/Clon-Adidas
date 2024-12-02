import React, { useState } from "react";
import { useForm, useController, UseControllerProps } from "react-hook-form";
import Input from "../Componentes/ui/Input";
import { useAppDispatch, useAppSelector } from "./GanchosSelector";
import { useDispatch } from "react-redux";
import { incremnt } from "./Usuarios/SliceUsuario";
import { StringDecoder } from "string_decoder";
import { useNavigate } from "react-router-dom";

const initialvalues: PropsInicaiValues = {
  contrasenia: "",
  email: "",
  repetircontrasenia: "",
  usuario: "",
  role: "",
  file: {} as Propsimagen,
};

interface MetaData {
  name: string;
  size: number;
  type: string;
}

interface Propsimagen {
  muestra: string;
  Back: MetaData;
}

export interface PropsInicaiValues {
  usuario: string;
  email: string;
  contrasenia: string;
  repetircontrasenia?: string;
  role: string;
  file: Propsimagen | null;
}
const UsuariosForm = () => {
  const Select = useAppSelector((estado) => estado.usuario);
  let dispatch = useAppDispatch();

  const {
    formState: { errors },
    watch,
    register,
    handleSubmit,
    reset,
  } = useForm<PropsInicaiValues>({
    defaultValues: initialvalues,
  });

  const [imagen, setimagen] = useState<Propsimagen>({} as Propsimagen);
  const navigate = useNavigate();

  const MandarDatos = (data: PropsInicaiValues) => {
    const { file } = data;
    const datos = {
      ...data,
      file: {
        back: imagen.Back,
        muestra: imagen.muestra,
      },
    };

    dispatch(incremnt(datos));
    setTimeout(() => {
      reset();
      setimagen({} as Propsimagen);
      // navigate("/user");
    }, 2000);

    navigate("/user/admin");
  };

  const handleChangue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      const target: File = files[0];
      const names = {
        name: target.name,
        size: target.size,
        type: target.type,
      };
      const blog = URL.createObjectURL(files[0]);
      setimagen({
        muestra: blog,
        Back: names,
      });
    }
  };

  return (
    <>
      <div className="w-[10% ]   max-w-2xl flex flex-col  h-screen justify-around sm:w-[80%]  md:w-[80%]  items-center   lg:w-[80%]  mx-auto p-4">
        <div className=" w-[100%]   md-w-[100%]    lg:w-[70%] flex flex-col   shadow-lg  rounded-xl ">
          <div className="bg-gradient-to-r  from-indigo-500 via-indigo-800-500 to-indigo-800  w-full  p-4   rounded-lg  text-white ">
            <h1 className="text-center  font-semibold  ">Iniciar Session</h1>
          </div>
          <form
            onSubmit={handleSubmit(MandarDatos)}
            className=" w-[100%] flex flex-col lg:w-[80%]   mx-auto p-4"
          >
            <Input
              placeholder="usuario"
              {...register("usuario", {
                required: {
                  value: true,
                  message: "neceista un munuero",
                },
              })}
            />
            {errors.usuario && (
              <p className="text-red-700 px-2">{errors.usuario.message}</p>
            )}

            <p>{watch().contrasenia}</p>
            <Input
              {...register("email", {
                required: {
                  value: true,
                  message: "neceisa  un correo",
                },
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,})$/,
                  message: "Correo incorrecto",
                },
              })}
              placeholder="email"
            />

            {errors.email && (
              <p className="text-red-700 px-2">{errors.email.message}</p>
            )}

            <Input
              type="password"
              placeholder="contrasenia"
              {...register("contrasenia", {
                required: {
                  value: true,
                  message: "necesita poner",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[^\w\s]).{9,}$/,
                  message:
                    "incorrecta contrasenia necesita tener una mayuscula 1 minuscula y longitud de 8",
                },
              })}
            />
            {errors.contrasenia && (
              <p className="text-red-700 px-2">{errors.contrasenia.message}</p>
            )}
            <select
              {...register("role", {
                required: {
                  value: true,
                  message: "Necesita tener una opcion",
                },
              })}
              className='border p-4 rounded-lg m-2  outline-none  border-ring-2 sh ing-offset-2 ring-2"	   hover-ring-2 focus-bg-slate-400 focus:ring-1'
            >
              <option disabled value={""}>
                selected option
              </option>
              <option value={"user"}>user</option>
              <option value={"admin"}>admin</option>
            </select>
            <Input
              onChange={handleChangue}
              id="file"
              type="file"
              placeholder="sdfdsfsd"
            ></Input>
            <br></br>

            <div className="text-center  mx-auto">
              {imagen.muestra && (
                <img
                  className="rounded-xl  text-center shadow-lg  border"
                  src={imagen.muestra}
                  alt="Vista previa de la imagen"
                  style={{ width: "200px", marginTop: "20px" }}
                />
              )}
            </div>
            <p className="px-2  text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              deserunt sint ipsum ex illum architecto esse quae, dolores
            </p>

            <input
              type="submit"
              className="bg-indigo-700 text-white rounded-lg  mx-auto mt-5 border p-4  w-[50%]"
            ></input>

            {/* <pre>{JSON.stringify(watch())}</pre> */}
          </form>
          {/* <pre>{JSON.stringify(Select)}</pre> */}
        </div>
      </div>
    </>
  );
};

export default UsuariosForm;
