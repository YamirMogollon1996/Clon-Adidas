import React, { useState } from "react";
import useContexto from "../../Services/useContexto";
import { RootUserios } from "../../Services/Reducer";

const validdate = {
  nombres: /^[a-zA-Z\s]{5,14}$/,
  edad: /^(1[89]|[2-9][0-9]|100)$/  ,  
  fecha :/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/
};

const useFormu = <T extends object>(initalState: T) => {
  const { llenarDatos, state } = useContexto();
  const [Form, setForm] = useState(initalState);
  const [Erroes, setErrors] = useState({});

  const handleuBlurError = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newErros: Record<any, string> = { ...Erroes };
    if (e.target.name === "name") {
      const val = e.target.name;
      if (!validdate.nombres.test(e.target.value)) {
        newErros[e.target.name] = "erro de ongtiud";
      } else {
        delete newErros[e.target.name];
      }
    }

    if (e.target.name === "edad") {
      const tipo = parseInt(e.target.value);
      if (!validdate.edad.test(tipo.toString())) {
        newErros[e.target.name] = "Recuerda que tiene que poner entre 0 y 20 ";
      } else {
        delete newErros[e.target.name];
      }
    }
    if (e.target.name === "fecha") {
      const fecha = new Date().getFullYear();
      console.log(fecha);
      const Fecha = parseInt(e.target.value.split("-")[0]);
      if (Fecha === fecha && validdate.fecha.test(e.target.value) )   {
               newErros[e.target.name] =
                 "No pueden estar en el Mismo anio";
      } else {
         delete newErros[e.target.name];
      }
    }

    setErrors(newErros);
    console.log(newErros);
    
  };

  const handleChanuge = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // console.log(e.target.name, e.target.value);
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const LongitudDeerroes = Object.values(Erroes).length;
    if (LongitudDeerroes === 0) {
      
      llenarDatos(Form as RootUserios);
    } else {
      console.log(LongitudDeerroes);
    }
  };

  return { Form, handleChanuge, HandleSubmit, handleuBlurError, Erroes };
};

export default useFormu;
