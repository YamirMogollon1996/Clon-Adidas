import React, { useEffect, useState } from "react";
import { cardTolil, PropsCard } from "./Dashboard";
Contednedordeobjeto;

import { FaPlus } from "react-icons/fa6";

import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import AlterEliminar from "../Usuarios/AlterEliminar";
import { Contednedordeobjeto } from "./Productos";
import { IconButtonDefault } from "../../Componentes/ui/Modal";

export interface PropiedoModal {
  modal: boolean;
  item: any;
}

const CrudAdmin = () => {
  const [open, setOpen] = useState(false);
  const [Conitem, setItemCon] = useState<PropsCard[]>([]);
  const [estadoItem, setEstadoitem] = useState<PropiedoModal>(
    {} as PropiedoModal
  );

  const opening = () => {
    setOpen(!open);
  };

  const handleEliminar = (ac: PropsCard) => {
    // console.log(ac);

    setItemCon(Conitem.filter((item) => item.id != ac.id));
    setEstadoitem({
      ...estadoItem,
      modal: false,
    });
  };

  const eliminar = (item: any) => {
    setEstadoitem({
      modal: true,
      item: item,
    });
    // console.log(item);
  };
  const Handleplus = () => {
    console.log("mogollon");
    setOpen(!open);
  };

  useEffect(() => {
    setItemCon(Contednedordeobjeto);
  }, []);

  return (
    <>
      <div className="w-[90%] mx-auto">
        <button
          onClick={opening}
          className="border p-4 bg-slate-400 text-white font-extralight rounded-md  cursor-pointer"
        >
          <FaPlus></FaPlus>
        </button>
        <div className="block mb-4 mx-auto  border-slate-300 pb-2 w-[80%]"></div>

        <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
          <div></div>
          <div className="ml-3">
            <div className="w-full max-w-sm min-w-[200px] relative">
              <div className="relative">
                <input
                  className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                  placeholder="Search for invoice..."
                />
                <button
                  className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    className="w-8 h-8 text-slate-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col w-full h-full  text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Invoice Number
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Customer
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Amount
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Issued
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal leading-none text-slate-500">
                    Due Date
                  </p>
                </th>
                <th className="p-4 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-normal   text-center leading-none text-slate-500">
                    Acciones
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {Conitem.map((item) => (
                <tr className="hover:bg-slate-50 border-b border-slate-200">
                  <td className="p-4 py-5">
                    <p className="block font-semibold text-sm text-slate-800">
                      {item.id}
                    </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">{item.price} </p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">{item.product}</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">2024-08-01</p>
                  </td>
                  <td className="p-4 py-5">
                    <p className="text-sm text-slate-500">2024-08-15</p>
                  </td>
                  <td className="p-4 py-5  text-center">
                    {/* <p className="text-sm text-slate-500">2024-08-15</p> */}
                    <button className="bg-slate-100 text-white p-2   text-center mx-auto  mx-2 rounded-lg">
                      <GrUpdate className="text-black"></GrUpdate>
                    </button>
                    <button className="bg-slate-100 text-white  p-2 mx-2  rounded-lg text-center ">
                      <MdDelete
                        onClick={() => eliminar(item)}
                        className="text-black"
                      ></MdDelete>
                    </button>
                  </td>
                </tr>
              ))}

              {/* <tr className="hover:bg-slate-50 border-b border-slate-200">
                <td className="p-4 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    PROJ1002
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">Jane Smith</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">$850.00</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">2024-08-05</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">2024-08-20</p>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 border-b border-slate-200">
                <td className="p-4 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    PROJ1003
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">Acme Corp</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">$2,500.00</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">2024-08-07</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">2024-08-21</p>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 border-b border-slate-200">
                <td className="p-4 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    PROJ1004
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">Global Inc</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">$4,750.00</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">2024-08-10</p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">2024-08-25</p>
                </td>
              </tr> */}
            </tbody>
          </table>

          <div className="flex justify-between items-center px-4 py-3">
            <div className="text-sm text-slate-500">
              Showing <b>1-5</b> of 45
            </div>
            <div className="flex space-x-1">
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                Prev
              </button>
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                1
              </button>
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                2
              </button>
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                3
              </button>
              <button className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {estadoItem.modal && (
        <AlterEliminar
          estadoItem={estadoItem}
          handleEliminar={handleEliminar}
        ></AlterEliminar>
      )}

      {open && (
        <IconButtonDefault opening={opening} open={open}></IconButtonDefault>
      )}
    </>
  );
};

export default CrudAdmin;
