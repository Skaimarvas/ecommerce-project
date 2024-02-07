import React from "react";
//Component
import CarouselComp from "../components/CarouselComp";
import EditorPick from "../components/EditorPick";
import BestsellerProduct from "../components/BestsellerProduct";

export default function Home() {
  return (
    <>
      <CarouselComp />
      <EditorPick />
      <BestsellerProduct />
    </>
  );
}
