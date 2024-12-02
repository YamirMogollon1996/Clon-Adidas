import React from 'react'

const BusquedadModal = () => {
  return (
    <>
      <div className=" h-[80%] w-[30%] bg-white rounded-2xl text-center backdrop-blur-none  relative">
        <form className="">
          <input
            placeholder="buscar"
            className="border    focus:right-4 w-[90%] p-4 rounded-xl mx-4 mt-5"
          ></input>
        </form>

        <button
          // onClick={handleClickMOal}
          className="bg-black absolute bottom-10 w-[50%] left-1/2  -translate-x-1/2  mx-auto text-white border p-4 rounded-md"
        >
          Buscar
        </button>

        {/* <button  className='absolute top-0 right-0 text-2xl'>x</button> */}
      </div>
    </>
  );
}

export default BusquedadModal