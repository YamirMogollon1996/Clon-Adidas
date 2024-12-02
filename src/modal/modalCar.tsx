import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import adidas from "../assets/adidas.jpg";
import { ButonUi } from "../helpers/ButonUi";
import { FaFire } from "react-icons/fa6";
let icono = [<FaWhatsapp />, <FaFacebookSquare />, <FaInstagram />];
const ModalCar = () => {
  return (
    <>
      <div className="fixed right-0    bg-white w-[30%] h-full z-20 text-center">
        <div className=" h-[40%] ">
          <img className="w-full" src={adidas} />
          {/* <h1>Mundo Viruta</h1> */}
        </div>
        <button className=" p-6  m-[-25px] text-2xl rounded-full bg-slate-900 text-white bg-gradient-to-t from-slate-950 via-slate-950 to-gray-700 .. ">
          <FaFire className="text-3xl"></FaFire>
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="text-4xl  text-gray-600  bounce-once">Tienda Virtual</h1>
        <br></br>
        <div className="mx-auto w-[50%] p-2  flex text-2xl justify-around bounce-once  text-gray-700">
          {icono.map((item) => item)}
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className=" font-mono text-gray-600 text-2xl mx-4">
          <h1 className=" font-mono text-gray-600m-2   bounce-once text-2xl m-4">
            Producto
          </h1>
          <h1 className=" font-mono text-gray-600m-2  bounce-once   text-2xl m-4">
            Productogmail.com
          </h1>
          <h1 className=" font-mono  text-gray-600 m-2 bounce-once   text-2xl m-4">
            Lima / Peru
          </h1>
        </div>
      </div>
    </>
  );
};

export default ModalCar;
