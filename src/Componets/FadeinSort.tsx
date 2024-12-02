import React from 'react'
import FormularioCompletes from './Usuarios/FormularioCompletes';


const FadeinSort = () => {
  return (
    <>
      <div className="min-h-screen fixed min-w-full top-0 flex justify-center items-center bg-black  bg-opacity-50">
        <div className="max-w-md   bg-white p-4">
          <FormularioCompletes></FormularioCompletes>
        </div>
      </div>
    </>
  );
}

export default FadeinSort