import React from "react";
import Card from "./Card";
import { PropsCard } from "./Dashboard";

export const Contednedordeobjeto: PropsCard[] = [
  {
    id: 1,
    product: "Iphone X",
    price: 100,
    imagen:
      "//images.unsplash.com/photo-1729608462362-21193b628e56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    product: "Air Pods",
    price: 200,
    imagen:
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    product: "Huwaei",
    price: 300,
    imagen:
      "https://images.unsplash.com/photo-1574920162043-b872873f19c8?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    product: "sinsis",
    price: 350,
    imagen:
      "https://plus.unsplash.com/premium_photo-1679456062579-cc90340801db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Productos = () => {
  return (
    <>
      {Contednedordeobjeto.map((item) => (
        <Card item={item}></Card>
      ))}
    </>
  );
};

export default Productos;
