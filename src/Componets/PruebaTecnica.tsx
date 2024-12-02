import React, { useEffect, useRef, useState } from "react";
import { Root } from "../Services/indes.D";
import { retonarFech } from "../helperes";
import Tabladatos from "./Tabladatos";
import PropsProyect from "./PropsProyect";

let Url = `https://randomuser.me/api/?results=20`;

interface Ordenamiento {
  nombre: boolean;
  edad: boolean;
  pais: boolean;
}

const PruebaTecnica = () => {
  const reference = useRef();
  const [estado, setestado] = useState<Root[]>([]);
  const [changueEvent, setChangueEevet] = useState<string>("");
  const [OrderPorPais, setOrderPais] = useState(false);
  const [Click, setCLick] = useState(false);
  const [Colors, setClor] = useState(false);
  const [Ordern, setOrder] = useState<Ordenamiento>({} as Ordenamiento);

  const ChangueFresh = () => {
    setOrder({
      ...Ordern,
      nombre: !Ordern.nombre,
    });
  };

  const ChangueEdad = () => {
    setOrder({
      ...Ordern,
      edad: !Ordern.edad,
    });
  };

  const PaisDetail = () => {
    setOrder({
      ...Ordern,
      pais: !Ordern.pais,
    });
  };

  const CLickHandle = () => {
    setestado(reference?.current);
  };

  const DeletedItem = (id: string) => {
    setestado(estado.filter((item) => item.name.first != id));
  };

  const filterUser =
    changueEvent.length > 0
      ? estado.filter((item) =>
          item.name.first.toLocaleLowerCase().includes(changueEvent)
        )
      : estado;

  const OrdenarPorPis = OrderPorPais
    ? [...filterUser].sort((a, b) =>
        a.location.city.localeCompare(b.location.city)
      )
    : filterUser;

  const Ordenamiento = (): Root[] => {
    if (Ordern.nombre) {
      return [...filterUser].sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      );
    }
    if (Ordern.edad) {
      return [...filterUser].sort((a, b) => a.dob.age - b.dob.age);
    }

    if (Ordern.pais) {
      return [...filterUser].sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      );
    }

    return filterUser;
  };

  useEffect(() => {
    retonarFech(Url)
      .then((data) => {
        setestado(data?.results);
        if (data != undefined) {
          reference.current = data.results;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {estado.length > 0 ? (
        <div>
          <form className="max-w-2xl mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium     sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setChangueEevet(e.target.value)
                }
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm     border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          <div className="text-center pt-5">
            <button
              onClick={() => setClor(!Colors)}
              className="border bg-slate-700 p-4 text-white rounded-lg "
            >
              {" "}
              Colorear Por filas{" "}
            </button>
            <button
              onClick={CLickHandle}
              className="border bg-slate-700 p-4 text-white rounded-lg "
            >
              {" "}
              Restaurar Estado Inicial{" "}
            </button>
          </div>
          {/* <button>add</button> */}

          <Tabladatos
            ChangueFresh={ChangueFresh}
            Colors={Colors}
            DeletedItem={DeletedItem}
            estado={Ordenamiento}
            ChangueEdad={ChangueEdad}
            PaisDetail={PaisDetail}
          ></Tabladatos>
        </div>
      ) : (
        <h1>...cargadno</h1>
      )}
    </>
  );
};

export default PruebaTecnica;
