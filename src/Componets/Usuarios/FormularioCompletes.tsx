import React from "react";
import useFormu from "./useFormu";
import { RootUserios } from "../../Services/Reducer";

const initalState: RootUserios = {
  edad: 0,
  estado: false,
  fecha: "",
  name: "",
};

interface Propsmdoal {
  CloseModal: () => void;
}
const FormularioCompletes = ({ CloseModal }: Propsmdoal) => {
  const { Form, HandleSubmit, handleChanuge, Erroes, handleuBlurError } =
    useFormu(initalState);
  return (
    <>
      <form
        onSubmit={HandleSubmit}
        className="border mx-auto pt-5   max-w-lg	    shadow-2xl p-4 rounded-lg mt-4"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            your name
          </label>
          <input
            onBlur={handleuBlurError}
            name="name"
            onChange={handleChanuge}
            // type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
          {Erroes.name && (
            <p className="font-mono text-red-800 ">{Erroes?.name}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            your name
          </label>
          <input
            onBlur={handleuBlurError}
            name={"fecha"}
            onChange={handleChanuge}
            type="date"
            id="email"
            className="shadow-sm   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            onBlur={handleuBlurError}
            name={"edad"}
            onChange={handleChanuge}
            type="number"
            placeholder="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div>
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Estado
          </label>

          <select
            onBlur={handleuBlurError}
            name={"estado"}
            onChange={handleChanuge}
            className=' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light mb-5'
          >
            <option>Terminado</option>
            <option>No Terminado </option>
          </select>
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>

          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
      <button onClick={CloseModal} className="border bg-slate-300 rounded p-4">
        Close Modal
      </button>
    </>
  );
};

export default FormularioCompletes;
