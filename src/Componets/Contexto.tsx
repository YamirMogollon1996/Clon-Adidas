import { UsuariosPai } from "../Services/Usuarios";
import { usuariosSlice } from "./Usuarios/SliceUsuario";
import { configureStore } from "@reduxjs/toolkit";

// Creamos el store usando configureStore


export const store = configureStore({
  reducer: {
    usuario: usuariosSlice.reducer, // Reducer para el slice de usuario
    [UsuariosPai.reducerPath]: UsuariosPai.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UsuariosPai.middleware),


});


// Exportamos el tipo para el estado global
export type RootState = ReturnType<typeof store.getState>;
// Exportamos el tipo para el dispatch
export type AppDispatch = typeof store.dispatch;
