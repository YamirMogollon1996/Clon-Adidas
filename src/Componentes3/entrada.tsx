import React, { useEffect, useRef, useState } from "react";
import { ButonUi } from "../helpers/ButonUi";
import { FaPlus } from "react-icons/fa";
import FormularioDetalle from "./FormularioDetalle";
import { GrNext } from "react-icons/gr";
import { FaFire } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import ModalBusqueda from "./ModalBusqueda";
import "../Componentes3/Carrusel.css";
import ModalFavo from "../modal/modalFavo";
import ModalCar from "../modal/modalCar";
import adidas from "../assets/sinfondoimagen.png";
import "./EstiloModal.css";
import SingleModla from "./SingleModla";
import { Navigate, useNavigate } from "react-router-dom";
import CartChildren from "./CartChildren";
import MotionWraper from "./MotionWraper";

// ModalCar
// ModalFavo;

const menu = [
  <FaSearch></FaSearch>,
  <FaHeart></FaHeart>,
  <IoMdMenu></IoMdMenu>,
];

interface Data {
  id: number;
  Title: string;
  descripcion: string;
  price: number;
  img: string;
  vendido: string;
  talla: number;
}
export const Datavalues: Data[] = [
  {
    id: 1,
    Title: "ADIDAS XXL",
    descripcion: "Zapatillas Adidas Running",
    price: 400,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa21e453586e40e58cf43db19160be6a_9366/Zapatillas_Adistar_Byd_Purpura_ID6179_HM1.jpg",
    vendido: "mas vendido",
    talla: 32,
  },
  {
    id: 2,
    Title: "ADIDAS REVOUT",
    descripcion: "Zapatilla Country OG SFTM",
    price: 300,
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b94b0e16ce1343f8bc3ca60501799631_9366/zapatillas-gazelle.jpg",
    vendido: "mas vendido",
    talla: 34,
  },
  {
    id: 3,
    Title: "ADIDAS ZLET",
    descripcion: "Zapatilla Country GAZELLE BY EC",
    price: 100,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d03ccece464417dacccad7c00fc6f4b_9366/COURTIC_Blanco_GX6318_02_standard_hover.jpg",
    vendido: "mas vendido",
    talla: 34,
  },
  {
    id: 4,
    Title: "ADIDAS ZAMBA",
    descripcion: "Zapatillas CLOT GAZELLE BY EC",
    price: 900,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc4b52ea20944a4c8e56ae750169a021_9366/Zapatillas_Galaxy_6_Negro_GW4131_01_standard.jpg",
    vendido: "mas vendido",
    talla: 36,
  },
  {
    id: 4,
    Title: "ADIDAS ZAMBA",
    descripcion: "Zapatillas CLOT GAZELLE BY EC",
    price: 900,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc4b52ea20944a4c8e56ae750169a021_9366/Zapatillas_Galaxy_6_Negro_GW4131_01_standard.jpg",
    vendido: "mas vendido",
    talla: 36,
  },
  {
    id: 1,
    Title: "ADIDAS XXL",
    descripcion: "Zapatillas Adidas Running",
    price: 400,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa21e453586e40e58cf43db19160be6a_9366/Zapatillas_Adistar_Byd_Purpura_ID6179_HM1.jpg",
    vendido: "mas vendido",
    talla: 36,
  },
  {
    id: 2,
    Title: "ADIDAS REVOUT",
    descripcion: "Zapatilla Country OG SFTM",
    price: 300,
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b94b0e16ce1343f8bc3ca60501799631_9366/zapatillas-gazelle.jpg",
    vendido: "mas vendido",
    talla: 32,
  },
  {
    id: 3,
    Title: "ADIDAS ZLET",
    descripcion: "Zapatilla Country GAZELLE BY EC",
    price: 100,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d03ccece464417dacccad7c00fc6f4b_9366/COURTIC_Blanco_GX6318_02_standard_hover.jpg",
    vendido: "mas vendido",
    talla: 34,
  },
  {
    id: 4,
    Title: "ADIDAS ZAMBA",
    descripcion: "Zapatillas CLOT GAZELLE BY EC",
    price: 900,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc4b52ea20944a4c8e56ae750169a021_9366/Zapatillas_Galaxy_6_Negro_GW4131_01_standard.jpg",
    vendido: "mas vendido",
    talla: 32,
  },
  {
    id: 4,
    Title: "ADIDAS ZAMBA",
    descripcion: "Zapatillas CLOT GAZELLE BY EC",
    price: 900,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc4b52ea20944a4c8e56ae750169a021_9366/Zapatillas_Galaxy_6_Negro_GW4131_01_standard.jpg",
    vendido: "mas vendido",
    talla: 32,
  },
  {
    id: 1,
    Title: "ADIDAS XXL",
    descripcion: "Zapatillas Adidas Running",
    price: 400,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa21e453586e40e58cf43db19160be6a_9366/Zapatillas_Adistar_Byd_Purpura_ID6179_HM1.jpg",
    vendido: "mas vendido",
    talla: 32,
  },
  {
    id: 2,
    Title: "ADIDAS REVOUT",
    descripcion: "Zapatilla Country OG SFTM",
    price: 300,
    img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b94b0e16ce1343f8bc3ca60501799631_9366/zapatillas-gazelle.jpg",
    vendido: "mas vendido",
    talla: 34,
  },
  {
    id: 3,
    Title: "ADIDAS ZLET",
    descripcion: "Zapatilla Country GAZELLE BY EC",
    price: 100,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d03ccece464417dacccad7c00fc6f4b_9366/COURTIC_Blanco_GX6318_02_standard_hover.jpg",
    vendido: "mas vendido",
    talla: 32,
  },
  {
    id: 4,
    Title: "ADIDAS ZAMBA",
    descripcion: "Zapatillas CLOT GAZELLE BY EC",
    price: 900,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc4b52ea20944a4c8e56ae750169a021_9366/Zapatillas_Galaxy_6_Negro_GW4131_01_standard.jpg",
    vendido: "mas vendido",
    talla: 34,
  },
  {
    id: 4,
    Title: "ADIDAS ZAMBA",
    descripcion: "Zapatillas CLOT GAZELLE BY EC",
    price: 900,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc4b52ea20944a4c8e56ae750169a021_9366/Zapatillas_Galaxy_6_Negro_GW4131_01_standard.jpg",
    vendido: "mas vendido",
    talla: 36,
  },
];

const Entrada = () => {
  const [Descrip, setDescrip] = useState<Data[] | null>(null);
  const [ModalContainer, setModalContainer] = useState(false);
  const [modal, setmodal] = useState<boolean | number>(false);
  const [mModalview, setModalview] = useState(1);
  const referencInput = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const modalChangue = (rama: number) => {
    console.log(rama);
    setmodal(rama);
  };
  const CloseModalFromchildren = () => {
    setmodal(false);
  };

  const handleClickProduct = (item: Data) => {
    console.log(item);
    navigate(`/fadeIn/${item.Title}`);
  };

  // OSORIOMARIALUISA47@GMAIL.COM
  // Passw0rd123@@

  useEffect(() => {
    let timer: NodeJS.Timeout; // Tipo para temporizadores en TypeScript
    const listaNodos = 100 / 3; // Calcula cuánto debe desplazarse por nodo
    const modal = mModalview * listaNodos; // Determina el porcentaje de desplazamiento

    if (mModalview < 3) {
      timer = setTimeout(() => {
        setModalview((prev) => prev + 1); // Incrementa `mModalview`

        if (referencInput.current?.style) {
          referencInput.current.style.transform = `translateX(-${modal}%`;
        }
      }, 2000);
    } else {
      setModalview(0); // Reinicia `mModalview` cuando llega al límite
    }

    return () => clearTimeout(timer); // Limpia el temporizador
  }, [mModalview]);

  useEffect(() => {
    setDescrip(Datavalues);
  }, []);
  return (
    <>
      {/* <pre>{mModalview} </pre> */}
      <CartChildren></CartChildren>
      {/* <pre>{JSON.stringify(CartChildren)}</pre> */}
      <div
        onClick={() => console.log("Close Modal")}
        className={`min-h-screen  bg-gray-400 bg-gradient-to-r from-gray-400 via-gray-400 to-gray-400/80 `}
      >
        <img
          width={900}
          height={900}
          className="absolute left-1/3  object-cover  rounded-xl"
          src={adidas}
        ></img>
        {modal && (
          <ModalBusqueda
            CloseModalFromchildren={CloseModalFromchildren}
            modal={modal}
          ></ModalBusqueda>
        )}

        <div
          className={` flex justify-between  overflow-hidden w-[80%] mx-auto p-2 ${
            modal && "blur"
          }`}
        >
          <div className="flex items-center  outline-none text-white">
            <button className=" p-6   text-2xl rounded-full bg-slate-900 text-white bg-gradient-to-t from-slate-950 via-slate-950 to-gray-700 ..">
              <FaFire className="text-3xl"></FaFire>
            </button>

            <div className=" text-center">
              <h1 className="mx-6 text-1xl  font-semibold"> Tienda Virtual</h1>
              <h1 className="mx-6 text-1xl  font-semibold">Lima , Peru</h1>
            </div>
          </div>
          <div className="flex justify-between  items-center w-[20%] text-white text-2xl ">
            {menu.map((item, index) => (
              <button
                onClick={() => modalChangue(index + 1)}
                className="p-4   text-2xl rounded-full bg-slate-900 text-white bg-gradient-to-t from-slate-950 via-slate-950 to-gray-700 .."
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`  TokioTell   overflow-hidden tokio   min-w-[100px] w-[100%]   p-4 gap-4 mx-auto    absolute   bottom-[-10%]  justify-around ${
          modal && "blur-sm"
        }`}
      >
        <div
          ref={referencInput}
          className="w-[300%]   Mover flex  justify-around gap-4   *: p-4 bottom-[-10%]  "
        >
          {Descrip?.map((item) => (
            <div
              onClick={() => handleClickProduct(item)}
              className="max-w-2xl  bg-white w-[400px] hover:bg-black hover:text-white p-4 rounded-lg shadow-lg transition-all duration-300 group rounded-r-lg font-semibold "
            >
              <div className="bg-dark  border inline-block bg-dark  rounded-sm  border-b p-2 bg-stone-900 text-white border-none absolute ">
                <h1>{item.vendido} </h1>{" "}
              </div>
              <img
                className="rounded  h-[300px] object-cover "
                height={200}
                width={400}
                src={item.img}
              ></img>
              <h1 className="text-slate-600 group-hover:text-white  font-semibold text-2xl p-4">
                ADIZERO XLL
              </h1>
              <p className="text-2xl mx-4 ">Zapatillas Adidas Running</p>
              <div className="font-semibold flex justify-between items-center mt-4">
                <p className="mx-4">$ 4000.00</p>
                <button className="border p-2 rounded-md bg-black text-white border-none">
                  <GrNext></GrNext>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <h1>Hola mundo</h1> */}
      <div className="min-h-screen  bg-gray-400 bg-gradient-to-r from-gray-400 via-gray-400 to-gray-400/80">
        <div className="bg-white min-h-screen rounded-tl-[100px] border flex items-center justify-center ">
          <div className=" w-[80%] flex justify-between border-b shadow-md-b">
            <div>
              <h1 className="text-2xl font-medium"> Recien Agregados</h1>
            </div>
            <div className="flex items-center">
              <p
                onClick={() => navigate("/productdetalle")}
                className="text-2xl cursor-pointer"
              >
                {" "}
                Ver mas{" "}
              </p>{" "}
              <GrNext className="mx-4"></GrNext>
            </div>
          </div>
        </div>

        <MotionWraper
          inital={{ opacity: 0, rotate: 0, y: -20 }} // Comienza más abajo
          animate={{ opacity: 1, scale: 1, y: 0 }} // Termina en su posición original
          transition={{ duration: 0.8, ease: "easeOut" }} // Transición suave
        >
          <div className="w-[80%] mx-auto p-4  min-h-[100%]">
            <div>
              <h1 className="text-4xl font-mono text-center">Hola mundo</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                porro quas corrupti! Doloremque illo obcaecati odit voluptas
                similique? Animi magnam atque excepturi, asperiores facilis
                numquam debitis suscipit laboriosam aliquid nostrum!
              </p>

              <button className="bg-black rounded  mx-4 p-4  text-white">
                Add
              </button>
              <button className="bg-black  rounded mx-4  p-4 text-white ">
                ELIMINAR
              </button>
              <button className="bg-black  rounded  mx-4  p-4 text-white">
                Restear
              </button>
            </div>
          </div>
        </MotionWraper>
      </div>

      <MotionWraper
        inital={{ opacity: 0, rotate: 0, y: -20 }} // Comienza más abajo
        animate={{ opacity: 1, scale: 1, y: 0 }} // Termina en su posición original
        transition={{ duration: 0.8, ease: "easeOut" }} // Transición suave
      >
        <div className="min-h-screen text-center text-8xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            mollitia, reiciendis eaque nostrum doloribus voluptatibus at
            corrupti modi in similique officiis id atque adipisci fugiat. Autem
            laborum tempora beatae facilis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            mollitia, reiciendis eaque nostrum doloribus voluptatibus at
            corrupti modi in similique officiis id atque adipisci fugiat. Autem
            laborum tempora beatae facilis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            mollitia, reiciendis eaque nostrum doloribus voluptatibus at
            corrupti modi in similique officiis id atque adipisci fugiat. Autem
            laborum tempora beatae facilis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            mollitia, reiciendis eaque nostrum doloribus voluptatibus at
            corrupti modi in similique officiis id atque adipisci fugiat. Autem
            laborum tempora beatae facilis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            mollitia, reiciendis eaque nostrum doloribus voluptatibus at
            corrupti modi in similique officiis id atque adipisci fugiat. Autem
            laborum tempora beatae facilis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            mollitia, reiciendis eaque nostrum doloribus voluptatibus at
            corrupti modi in similique officiis id atque adipisci fugiat. Autem
            laborum tempora beatae facilis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            mollitia, reiciendis eaque nostrum doloribus voluptatibus at
            corrupti modi in similique officiis id atque adipisci fugiat. Autem
            laborum tempora beatae facilis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            mollitia, reiciendis eaque nostrum doloribus voluptatibus at
            corrupti modi in similique officiis id atque adipisci fugiat. Autem
            laborum tempora beatae facilis.
          </p>
          <var>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              mollitia, reiciendis eaque nostrum doloribus voluptatibus at
              corrupti modi in similique officiis id atque adipisci fugiat.
              Autem laborum tempora beatae facilis.
            </p>
          </var>
        </div>
      </MotionWraper>
    </>
  );
};

export default Entrada;
