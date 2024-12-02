import React from "react";
import { Root } from "../Services/indes.D";

interface PropsItemcenter {
  estado: Root[] | any;
  DeletedItem: (id: string) => void;
  Colors: boolean;
  ChangueFresh: () => void;
  ChangueEdad: () => void;
  PaisDetail: () => void;
}

const Tabladatos = ({
  estado,
  DeletedItem,
  Colors,
  ChangueFresh,
  ChangueEdad,
  PaisDetail,
}: PropsItemcenter) => {
  const ProductCLikc = () => {
    console.log("mogollon");
  };

  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 m-4">
        {" "}
        Tabla de Datos
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] mx-auto p-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th
                onClick={ChangueFresh}
                scope="col"
                className="px-6 py-3 bg-gray-50 "
              >
                name
              </th>
              <th onClick={ChangueEdad} scope="col" className="px-6 py-3">
                Edad
              </th>
              <th
                onClick={PaisDetail}
                scope="col"
                className="px-6 py-3 bg-gray-50 "
              >
                Pais
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Foto
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {estado().map((item, index) => (
              <tr
                className={`border-b border-gray-200  ${
                  Colors || index % 2 === 0 ? "bg-slate-800" : "bg-slate-900"
                } `}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap bg-gray-50 "
                >
                  {item.name.first}
                </th>
                <td className="px-6 py-4">{item.dob.age}</td>
                <td className="px-6 py-4 bg-gray-50 ">{item.location.city}</td>
                <td className="px-6 py-4"> {item.cell}</td>
                <td>
                  <img src={item.picture.thumbnail}></img>
                </td>
                <td className="">
                  <button
                    onClick={() => DeletedItem(item.name.first)}
                    className="bg-black text-white p-4 rounded-lg text-center mx-auto"
                  >
                    Deleted
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabladatos;
