import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const Leta = () => {
  const [carganddo, setcagrnado] = useState([]);

  const FechingData = async () => {
    let pri = await axios("https://jsonplaceholder.typicode.com/users");
    let secondo = await pri.data;
    setcagrnado(secondo);
  };  
  useEffect(() => {
    setTimeout(() => {
      FechingData();
    }, 2000);
  }, []);
  return (
    <>
      {/* <div> */}

        <h1 className="text-3xl  text-center  ">Skeleton Style con TawilWiind Css</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 gap-6 mt-5  w-[80%] mx-auto p-4  ">
        {carganddo.length > 0 ? (
          carganddo.map((item) => (
            <div className="border mx-auto max-w-2xl p-4   rounded-lg shadow-lg">
              <h1 className="font-mono text-center text-4xl  ">Leta</h1>
          
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias, voluptas corrupti tempora laboriosam hic voluptatum
                officia consectetur unde doloremque assumenda nemo quasi quae
                qui, consequatur dicta voluptatem. Exercitationem, sequi eos?
              </p>
              <button className="bg-slate-800 max w-[100px]  p-2  rounded-md text-white mx-auto mt-4 hover:bg-slate-700">
                Add
              </button>
            </div>
          ))
        ) : (
          <Skeleton index={10}></Skeleton>
        )}
      </div>
    </>
  );
};

export default Leta;
