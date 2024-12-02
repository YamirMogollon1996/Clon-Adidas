import { useState } from "react";
import "./App.css";
import Input from "./Componentes/ui/Input";
import { useForm } from "react-hook-form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsuariosForm from "./Componets/UsuariosForm";
import { store } from "./Componets/Contexto";
import { Provider } from "react-redux";
import Dashboard from "./Componets/pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Tablasusuarios from "./Componets/pages/Tablasusuarios";
import Paginas from "./Componets/pages/Paginas";
import Productos from "./Componets/pages/Productos";
import CrudAdmin from "./Componets/pages/CrudAdmin";
import Assic from "./Componets/Usuarios/Assic";
import Product from "./Componets/Product";
import PruebaTecnica from "./Componets/PruebaTecnica";
import ResetPassword from "./Componets/ResetPassword";
import FormularioSession from "./Componets/FormularioSession";
import NuevaResearContrasenia from "./Componets/Usuarios/ResetPassword";
import PropsProyect from "./Componets/PropsProyect";
import Pagina from "./Componets/pages/dashboard/Pagina";
import Leta from "./Componets/Leta";
import Project from "./Componets/Usuarios/Project";
import Contexto from "./Services/Contexto";
import entrada from "./Componentes3/entrada";
import Entrada from "./Componentes3/entrada";
import SingleModla from "./Componentes3/SingleModla";
import ProductosDetails from "./Componentes3/Productos";
import whassapIcon from "./assets/icons8-whatsapp-48.png";
import { FaShoppingCart } from "react-icons/fa";
import ToasDetalle from "./Componentes3/ToasDetalle";



interface PropsInicaiValues {
  usuario: string;
  email: string;
  contrasenia: string;
  repetircontrasenia: string;
}

const initialvalues: PropsInicaiValues = {
  contrasenia: "",
  email: "",
  repetircontrasenia: "",
  usuario: "",
};

// Compon;

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="fixed   flex  flex-col items-center justify-between  right-10 bottom-10 z-10  p-4 bg-gray-50 rounded-md  text-3xl text-center ">
          <img className="p-4  f" src={whassapIcon}></img>
          <button
            className={` m-4 p-2
              rounded-full  animate-pulse flex items-center justify-center text-white bg-black text-center  `}
          >
            <FaShoppingCart></FaShoppingCart>
          </button>
        </div>
        <Contexto>
          <BrowserRouter>
            <Routes>
              <Route
                path="/user"
                element={
                  <ProtectedRoutes>
                    <Dashboard></Dashboard>
                  </ProtectedRoutes>
                }
              >
                <Route path="estacion" />
                <Route path="admin" element={<CrudAdmin></CrudAdmin>} />
                <Route path="tablas" element={<Productos />} />
                <Route
                  path="usuarios"
                  element={<Tablasusuarios></Tablasusuarios>}
                />
              </Route>
              <Route path="/" element={<UsuariosForm></UsuariosForm>}></Route>
              <Route path="/grilla" element={<Assic></Assic>}></Route>
              <Route path="/Productos" element={<Product></Product>}></Route>
              <Route
                path="/tecnologia"
                element={<Tablasusuarios></Tablasusuarios>}
              ></Route>
              <Route
                path="/ "
                element={<FormularioSession></FormularioSession>}
              ></Route>
              <Route
                path="/Tec"
                element={
                  <ProtectedRoutes>
                    <PruebaTecnica></PruebaTecnica>
                  </ProtectedRoutes>
                }
              ></Route>
              <Route
                path="/resetpasswrod"
                element={<ResetPassword></ResetPassword>}
              ></Route>
              <Route
                path="/TecnicalProps"
                element={<PropsProyect></PropsProyect>}
              ></Route>
              <Route
                path="/newPassword/:token"
                element={<NuevaResearContrasenia></NuevaResearContrasenia>}
              ></Route>
              <Route path="/pagina" element={<Pagina></Pagina>}></Route>
              <Route path="/comida" element={<Leta />}></Route>
              <Route path="/Project" element={<Project></Project>}></Route>
              <Route path="/fadeIn" element={<Entrada></Entrada>}></Route>
              <Route
                path="/fadeIn/:usuario"
                element={<SingleModla></SingleModla>}
              ></Route>
              <Route
                path="/productDetalle"
                element={<ProductosDetails></ProductosDetails>}
              ></Route>

              {/* </Route> */}
              <Route path="/Detalle"  element={<ToasDetalle></ToasDetalle>} / >
            </Routes>
          </BrowserRouter>
        </Contexto>
      </Provider>
    </>
  );
}

export default App;
