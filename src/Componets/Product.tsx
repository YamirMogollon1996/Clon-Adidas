import React from "react";
import { useGetusuariosQuery } from "../Services/Usuarios";
import CardImagenTo from "./Usuarios/CardImagenTo";
import { useNavigate } from "react-router-dom";
// import CardTo from "./Usuarios/CardTo";



const Product = () => {

  const { isFetching, isError, data: usuarios } = useGetusuariosQuery(null);
  const navigate =  useNavigate(  )
  if (isError) {
    return (
      <>
        <h1>Error al cargar la Data..........</h1>
      </>
    );
  }
  if (isFetching) {
    return <h1>...Cargaddno</h1>;
  }

  return (
    <>
      <h1 className="text-3xl  bg-slate-900 text-white p-4 text-center font-extralight">
        Product Dev!!!
      </h1>

      <div className="flex ">


      {usuarios?.map((item) => (
        <CardImagenTo item={item}></CardImagenTo>
      ))}
      </div>
    </>
  );
};

export default Product;
