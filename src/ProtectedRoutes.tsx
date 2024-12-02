import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

let user = true;
// const usuarioRecup = localStorage.getItem("usuariosT");
interface MycomponentProps {
  children: JSX.Element | JSX.Element[];
}
// const recp = usuarioRecup ? JSON.parse(usuarioRecup) : null;
// console.log(recp.access);
const ProtectedRoutes = ({ children }: MycomponentProps) => {
  return user ? children : <Navigate to={"/formulario"} />;
};

export default ProtectedRoutes;
