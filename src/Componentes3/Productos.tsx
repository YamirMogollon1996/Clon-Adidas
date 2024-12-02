import React, { useEffect, useRef, useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Datavalues } from "./entrada";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MotionWrapper from "./MotionWraper";

const ProductosDetails = () => {
  const Navigate = useNavigate();
  const [Formulario, setFomrulario] = useState("");
  const [ChanugeValues, setChangueValues] = useState<number>(0);
  const [Talla, setTalla] = useState<number>(0);
  const Referencia = useRef(null);
  const changueElement = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (parseInt(e.target.value) > 100) {
      setChangueValues(parseInt(e.target.value));
    } else {
      setTalla(parseInt(e.target.value));
    }
  };


  const notify = () =>
    toast.success("Se Registro la Consulta", { autoClose: 1000 });
  const FilterDatails = Datavalues.map((item) => item.talla).reduce(
    (acum: any[], item: any) => {
      if (!acum.includes(item)) {
        acum.push(item);
      }
      return acum;
    },
    []
  );
  const filtro =
    Formulario.length > 0
      ? Datavalues.filter((item) =>
          item.Title.replace(" ", "").toLocaleLowerCase().includes(Formulario)
        )
      : Datavalues;

  const filtroPrices = filtro.filter((item) => item.price < ChanugeValues);
  const filterForTalla = filtro.filter((item) => item.talla === Talla);
  console.log(filterForTalla);
  const FilterChanugePrices = ChanugeValues != 0 ? filtroPrices : Datavalues;
  const FilterForDetails = Talla != 0 ? filterForTalla : Datavalues;

  useEffect(() => {
window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth", // Desplazamiento suave
});
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r bg-black	  h-[500px] text-white flex items-center justify-center  relative">
        <FaArrowAltCircleLeft
          onClick={() => Navigate("/Fadein")}
          className="absolute p-0 cursor-pointer text-white top-3 left-1 text-4xl mx-4 bottom-4"
        ></FaArrowAltCircleLeft>
        <div className="  text-center flex items-center  justify-center">
          <FaHouse className="mx-4 text-4xl cursor-pointer"></FaHouse>
          <h1 className="mx-4 text-4xl"> | Productos</h1>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className=" mx-auto  sm:w-[90%] md:w-[90%] lg:w-[80%] p-4 ">
        <MotionWrapper
          inital={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-between">
            <div className="w-[20%] flex flex-col   p-2 shadow-lg">
              <input
                onChange={(e) => setFomrulario(e.target.value)}
                placeholder="busquedad  "
                className="border p-4 rounded-lg"
              ></input>
              <select
                onChange={changueElement}
                className="border p-4 rounded-lg  mt-4"
              >
                <option value={100}>Price Tell</option>
                <option value={300}>Price Tell</option>
                <option value={900}>Price Tell</option>
              </select>

              <select
                onChange={changueElement}
                defaultValue={"selec"}
                className=" p-4 rounded-lg mt-4 mb-4"
              >
                {FilterDatails.map((item) => (
                  <option value={item}> {item} </option>
                ))}
              </select>
              <button className="bg-gray-950 p-4 text-white rounded-lg">
                Eliminar Filtros
              </button>
            </div>
            <div className="w-[80%] text-center gap-4 grid grid-cols-4 mx-4">
              {FilterForDetails.map((item) => (
                <div className="border  shadow-lg rounded-lg">
                  <img src={item.img}></img>
                  <div className="flex justify-between p-4">
                    <h1 className="font-semibold">${item.price}</h1>
                    <h1 className="font-semibold">{item.Title}</h1>
                    <h1 className="font-semibold">{item.id}</h1>
                  </div>
                  {/* <button>Remove</button> */}
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>
      </div>
      <button onClick={notify}>Wo asu</button>
      <ToastContainer />
    </>
  );
};

export default ProductosDetails;
