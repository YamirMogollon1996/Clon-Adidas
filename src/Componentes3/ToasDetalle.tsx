import React from 'react'
import { FaStar } from "react-icons/fa";


import  adidasM from "../assets/Reolo.avif"

const ToasDetalle = () => {


  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="border min-h-[50vh]">
        <div
          style={{
            backgroundImage: `url(${  adidasM })`,
          }}
          className={`bg-[url('${adidasM}')] bg-cover bg-center h-full  border`}
        ></div>
      </div>
      <div className="border min-h-[50vh]">
        <h1>Mogollon</h1>
      </div>
    </div>
  );
}

export default ToasDetalle