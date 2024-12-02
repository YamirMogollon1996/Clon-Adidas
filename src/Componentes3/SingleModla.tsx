import React, { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { IoSaveSharp } from "react-icons/io5";
import Foto from "../assets/Removv.avif";
import foto3 from "../assets/Reolo.avif";
import Foto4 from "../assets/Rmo.avif";
import Fot5 from "../assets/Lis.avif";
import { SiStartrek } from "react-icons/si";
import { addUsertocart } from "../Componets/Usuarios/SliceUsuario";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import MotionWrapper from "./MotionWraper";

const FotosUnises = [Foto, foto3, Foto4, Fot5];

interface Propsitem {
  cantidad: number;
  talla: string;
  price: number;
  detalle?: string;
}

const tallas = ["S", "M", "L", "XL"];

const SingleModla = () => {
  const [imagen, setimagnes] = useState<Propsitem>({} as Propsitem);
  const [menus, setmenu] = useState<any>([]);
  const [Now, setNow] = useState(0);
  const referecnia = useRef<HTMLInputElement>(null);
  let disptach = useDispatch();

  const handeChangueDetails = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "cantidad") {
      setimagnes({
        ...imagen,
        cantidad: parseInt(e.target.value),
      });
    }
    setimagnes({
      ...imagen,
      [e.target.name]: e.target.value,
    });
  };

  const agregar = () => {
    setimagnes({
      ...imagen,
      price: imagen.cantidad * 400,
    });

    disptach(addUsertocart(imagen));
    toast.success("Product agree", { autoClose: 1000 });
  };

  useEffect(() => {
    setimagnes({
      ...imagen,
      price: imagen.cantidad * 400,
    });
  }, [imagen.cantidad]);

  useEffect(() => {
    setmenu(FotosUnises);
  }, []);

  const { usuario } = useParams();
  return (
    <>
      {/* <pre>{JSON.stringify(imagen)}</pre> */}
      <MotionWrapper
        inital={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "in out" }}
      >
        <div className=" min-h-screen   flex items-center   justify-center">
          <div className="md:w-[70%]  lg:w-[60%] ">
            <div className=" flex justify-between  rounded-lg">
              <div>
                <FaArrowLeft className="text-2xl   text-slate-400"></FaArrowLeft>
              </div>
              <div className=" flex justify-between     w-[10%] text-slate-400">
                <GoHeartFill className="text-2xl"></GoHeartFill>
                <IoSaveSharp className="text-2xl"></IoSaveSharp>
              </div>
            </div>
            <br></br>
            <br></br>

            <div className="flex h-[100%]    border relative rounded-lg shadow-lg ">
              <div className="border">
                <img
                  className="rounded-lg w-[100%] h-[800px] "
                  src={menus[Now]}
                />
                <div className="absolute bottom-1 flex justify-center items-center w-[50%]">
                  {Array.from({ length: FotosUnises.length }, (_, i) => (
                    <button
                      onClick={() => setNow(i)}
                      className="border mx-2 bg-slate-400 rounded-full h-[20px] w-[20px]"
                    ></button>
                  ))}
                </div>
              </div>
              <div className=" w-[50%]  p-4 mt-5    relative">
                <h1 className="text-slate-500 text-5xl font-semibold mb-5 ">
                  Pantalón Deportivo Essentials Felpa Francesa
                </h1>
                <hr></hr>
                <div>
                  <div className=" flex justify-between  items-center  ">
                    <div className="flex  items-center  pt-5">
                      <SiStartrek className="text-4xl"></SiStartrek>
                      <h1 className="mx-4">Pantalones</h1>
                    </div>
                    <h1 className="rounded-md p-4 text-slate-400">Stock 100</h1>
                  </div>
                </div>
                <br></br>
                <div className=" flex justify-between flex-col">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Blanditiis dignissimos voluptatem rerum inventore, eaque
                    facere voluptatibus, neque enim suscipit eos nobis maiores
                    modi hic quae expedita consectetur debitis et ipsam.
                  </p>
                  <div className="mt-4">
                    {tallas.map((item, index) => (
                      <button
                        name="talla"
                        onClick={handeChangueDetails}
                        value={item}
                        className={`border p-4 mx-2  ${
                          imagen.talla == item &&
                          "bg-black text-white font-mono"
                        } hover:bg-black hover:text-white  rounded-lg`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <br></br>
                <div>
                  <label className="mx-4">Cantidad : </label>
                  <br></br>
                  <input
                    name="cantidad"
                    onChange={handeChangueDetails}
                    placeholder="0"
                    type="number"
                    className="border mx-4 m-3 p-2 rounded-md font-mono"
                  ></input>
                </div>
                <button
                  onClick={agregar}
                  className="border p-4  absolute bottom-2 rounded-lg  hover:bg-black hover:text-white  text-slate-900"
                >
                  Agregar
                </button>
                <h1 className="absolute bottom-2 rounded-lg font-mono shadow-xl bg-slate-100  p-4  border right-0">
                  $ 4000{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </MotionWrapper>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default SingleModla;
