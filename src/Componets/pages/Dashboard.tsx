import React from "react";
import Card from "./Card";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { GoArchive } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import luffy from "./assets/luffy.jpg";
import { useAppSelector } from "../GanchosSelector";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { TbLogin } from "react-icons/tb";
import { TbCreditCard } from "react-icons/tb";

export interface PropsCard {


      id: number;
      product: string;
      price: number;
      imagen: string;


}



export const cardTolil: PropsCard[] = [
  {
    id: 1,
    product: "Iphone X",
    price: 100,
    imagen:
      "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
  },
  {
    id: 2,
    product: "Air Pods",
    price: 200,
    imagen:
      "https://images.unsplash.com/photo-1604013075435-f49d682f35f7?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
  {
    id: 3,
    product: "Huwaei",
    price: 300,
    imagen:
      "https://images.unsplash.com/photo-1610284858234-66d0478f40ad?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
  {
    id: 4,
    product: "sinsis",
    price: 350,
    imagen:
      "https://images.unsplash.com/photo-1623127265603-505b993d3229?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
  {
    id: 3,
    product: "Huwaei",
    price: 300,
    imagen:
      "https://images.unsplash.com/photo-1594686431247-b1a70c34e5ab?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
  {
    id: 4,
    product: "sinsis",
    price: 350,
    imagen:
      "https://images.unsplash.com/photo-1617601306358-6c66b2c7f474?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },

  {
    id: 4,
    product: "sinsis",
    price: 350,
    imagen:
      "https://images.unsplash.com/photo-1623127265603-505b993d3229?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
  {
    id: 3,
    product: "Huwaei",
    price: 300,
    imagen:
      "https://images.unsplash.com/photo-1594686431247-b1a70c34e5ab?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
  {
    id: 4,
    product: "sinsis",
    price: 350,
    imagen:
      "https://images.unsplash.com/photo-1617601306358-6c66b2c7f474?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
  {
    id: 4,
    product: "sinsis",
    price: 350,
    imagen:
      "https://images.unsplash.com/photo-1623127265603-505b993d3229?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
  {
    id: 3,
    product: "Huwaei",
    price: 300,
    imagen:
      "https://images.unsplash.com/photo-1594686431247-b1a70c34e5ab?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
  {
    id: 4,
    product: "sinsis",
    price: 350,
    imagen:
      "https://images.unsplash.com/photo-1617601306358-6c66b2c7f474?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },

  {
    id: 4,
    product: "sinsis",
    price: 350,
    imagen:
      "https://images.unsplash.com/photo-1623127265603-505b993d3229?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
  {
    id: 3,
    product: "Huwaei",
    price: 300,
    imagen:
      "https://images.unsplash.com/photo-1594686431247-b1a70c34e5ab?crop=entropy&cs=tinysrgb&fit=max&ixlib=rb-1.2.1&q=80&w=927",
  },
];
const Dashboard = () => {
  const Seclecr = useAppSelector((stado) => stado.usuario);
  const navigate = useNavigate();
  const handleCliclc = (item: string) => {
    // localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className=" fixed top-0 left-0 w-[20%] h-full shadow-xl  ">
          <div className="border flex p-4 justify-start  shadow-xl">
            <button className="border p-2 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-400 rounded-lg text-white">
              <CiSettings />
            </button>
            <h2 className="p-2 mx-5  ">Settings</h2>

            <div className=" w-full absolute bottom-0 flex justify-normal m-0  left-0 bg-slate-50  rounded-lg p-4 items-center">
              {Seclecr && (
                <img
                  className="rounded-full mx-4 object-cover"
                  width={60}
                  height={60}
                  src={Seclecr.user.file?.muestra}
                ></img>
              )}
              <div>
                <p className="font-mono font-bold">{Seclecr.user.usuario}</p>
                <p className="text-gray-400 text-center font-extralight">
                  {" "}
                  Session pertenece al usuario
                </p>
              </div>
            </div>
          </div>

          <Link
            to={"/user/admin"}
            className="rounded-lg hover:cursor-pointer mx-8 flex hover:bg-slate-200 items-center justify-normal p-4"
          >
            <button className="p-2 bg-slate-400 rounded-lg text-white">
              <MdOutlineProductionQuantityLimits />
            </button>
            <p
              onClick={() => handleCliclc("Detalle")}
              className="font-mono text-1xl mx-3"
            >
              Detalle
            </p>
          </Link>

          <Link
            to={"/user/usuarios"}
            className="rounded-lg hover:cursor-pointer mx-8 flex hover:bg-slate-200 items-center justify-normal p-4"
          >
            <button className="border p-2 bg-slate-400 rounded-lg text-white">
              <AiOutlineProduct />
            </button>
            <p
              onClick={() => handleCliclc("Productos")}
              className="font-mono text-1xl mx-3"
            >
              Productos
            </p>
          </Link>

          <Link
            to={"/user/tablas"}
            onClick={() => handleCliclc("Offsite")}
            className="rounded-lg flex mx-8 hover:bg-slate-200 items-center justify-normal p-4"
          >
            <button className="border p-2 bg-slate-400 rounded-lg text-white">
              <GoArchive />
            </button>
            <p className="font-mono text-1xl mx-3">Offsite</p>
          </Link>

          <Link
            to={"/user/tablas"}
            onClick={() => handleCliclc("admin")}
            className="rounded-lg flex mx-8 hover:bg-slate-200 items-center justify-normal p-4"
          >
            <button className="border p-2 bg-slate-400 rounded-lg text-white">
              <MdOutlineProductionQuantityLimits />
            </button>
            <p className="font-mono text-1xl mx-3">admin</p>
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="w-[80%] ml-[20%]  flex   items-center flex-col">
          <div className="p-4 shadow-xl  w-full text-center ">
            <div className=" flex justify-end p-0">
              <button className="border  font-semibold p-2 mx-2  ml-4 rounded-lg bg-slate-400 text-white">
                <CiLogin className="text-2xl"></CiLogin>
              </button>

              <button
                // onClick={handleCliclc}
                className="border p-2 mx-2  rounded-lg bg-slate-400 text-white"
              >
                <TbLogin className="text-2xl"></TbLogin>
              </button>
              <button className="border p-2 mx-2  rounded-lg bg-slate-400 text-white">
                <TbCreditCard className="text-"></TbCreditCard>
              </button>
            </div>
          </div>
          <div className="h-full w-full border mx-auto  flex  place-content-center flex-wrap gap-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
