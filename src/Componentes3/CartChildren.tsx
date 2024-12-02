import React from "react";
import { useSelector } from "react-redux";
const CartChildren = () => {



  
  const stato = useSelector((state) => state?.usuario);
  console.log( stato)
  console.log("mogollon")
  return (
    <>

        <pre>{ JSON.stringify( stato) } </pre>
        
    </>
  );
};

export default CartChildren;
