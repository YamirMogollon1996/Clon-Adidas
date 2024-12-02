import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { cardTolil, PropsCard } from "../../Componets/pages/Dashboard";
import { Contednedordeobjeto } from "../../Componets/pages/Productos";

interface ChildrenButon {
  opening: () => void;
  open: boolean;
}

export function IconButtonDefault({ open, opening }: ChildrenButon) {
  const [Form, setForm] = useState<PropsCard>({} as PropsCard);
  const HandleChanuge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const IdGenaratorPor = (): number => {
    return Contednedordeobjeto.length;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(IdGenaratorPor());
    const formulario = { ...Form, id: IdGenaratorPor() + 1 };

    Contednedordeobjeto.push(formulario);

    opening();
  };

  return (
    <div className="absolute  top-0  left-0 border-none border rounded-1xl    w-screen h-full flex justify-center items-center">
      <div className="bg-stone-50 w-[50%] flex  border-none rounded-2xl   p-6 roun flex-col items-center justify-center ">
        <h1 className="text-3xl  font-mono">Crear un Nuevo Producto</h1>
        <h1>{Contednedordeobjeto.length}</h1>
        <form
          onSubmit={handleSubmit}
          className=" p-4  flex flex-col w-[80%]   m-4 z-20"
        >
          <label className="mx-4 font-thin text-slate-400">Proctuo</label>

          <input
            name="id"
            onChange={HandleChanuge}
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 m-4"
            placeholder="Id"
          />
          <label className="mx-4 font-thin text-slate-400">Proctuo</label>
          <input
            name="product"
            onChange={HandleChanuge}
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 m-4"
            placeholder="imagen"
          />
          <label className="mx-4 font-thin text-slate-400">Proctuo</label>
          <input
            name="price"
            onChange={HandleChanuge}
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 m-4"
            placeholder="price"
          />
          <label className="mx-4 font-thin text-slate-400">Imagen</label>
          <input
            name="imagen"
            onChange={HandleChanuge}
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 m-4"
            placeholder="descripcion"
          />
          <button className="border mx-4 p-4 bg-black text-white font-extralight rounded-md ">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}
