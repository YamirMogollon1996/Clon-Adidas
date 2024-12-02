
import React from "react";



const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      className='border p-4 rounded-lg m-2  outline-none  border-ring-2 sh ing-offset-2 ring-2"	   hover-ring-2 focus-bg-slate-400 focus:ring-1'
      {...props} // Pasa todas las props al input subyacente
      ref={ref} // Pasa la referencia
    />
  );
});

Input.displayName = "Input"; // Es importante para que React pueda mostrar un nombre en las herramientas de desarrollo

export default Input;
