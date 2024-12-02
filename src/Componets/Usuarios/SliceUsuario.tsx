import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PropsInicaiValues } from "../UsuariosForm";
import { PropsItem } from "../../Componentes3/Typos.D";

interface PropsConstextpItem {
  user: PropsInicaiValues;
  carritocar: PropsItem[];
}

const usuario = localStorage.getItem("user");

let inicialvalores: PropsConstextpItem = {
  user: {} as PropsInicaiValues,
  carritocar: [],
};

const RecuperarItem: PropsConstextpItem = usuario
  ? JSON.parse(usuario)
  : inicialvalores;

export const usuariosSlice = createSlice({
  name: "usuarios",
  // initialState: RecuperarItem || null,
  initialState: inicialvalores,
  reducers: {
    incremnt: (state, action: PayloadAction<PropsInicaiValues>) => {
      const { contrasenia, email, file } = action.payload;
      if (file) {
        console.log(action.payload);
        state.user = action.payload;
        // localStorage.setItem("user", JSON.stringify(state));

      }
    },
    addUsertocart: (state, action: PayloadAction<PropsItem>) => {
      state.carritocar = [...state.carritocar, action.payload];  
             localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { incremnt, addUsertocart } = usuariosSlice.actions;
