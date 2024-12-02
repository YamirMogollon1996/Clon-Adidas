//mi elemento dentro del Reducer
export interface RootUserios {
  name: string;
  edad: number;
  fecha: string;
  estado: boolean;
}


interface State {
  usuarios: RootUserios[];
}
export const intialEstado: State = {
  usuarios: [],
};


export type actionsPayload =
  | { type: "aumentar"; payload: RootUserios }
  | { type: "eliminar"; payload: number };

export const Reducer = (state: State, action: actionsPayload): State => {

  
  switch (action.type) {
    case "aumentar":
      const { edad, estado, fecha, name } = action.payload;
      const FindData = state.usuarios.find((item) => item.name === name);
      if (FindData == undefined) {
        return {
          ...state,
          usuarios: [...state.usuarios, action.payload],
        };
      } else {
        alert("no esta dentro !!!");
      }

    case "eliminar":
      const {} = action.payload;

    default:
      return state;
  }
};
