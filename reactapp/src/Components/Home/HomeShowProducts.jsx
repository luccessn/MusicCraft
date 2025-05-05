/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React from "react";
// import { homeProducts } from "../../Constants/Database/HomeProducts";
// import { HomeProduct } from "./HomeProduct";
import useFetchData from "../../HOC/useFetchData";
import HomePrduct from "../Products/MainGridProduct";

export const HomeShowProducts = () => {
  const [data, error, isLoading] = useFetchData(
    "http://localhost:3001/getcvImages"
  );

  if (error) {
    return <h1>err:{error}</h1>;
  }

  return (
    <div className=" grid grid-cols-4 gap-24">
      {isLoading && <h1>Loading...</h1>}
      {/* {data.map((item) => (
        <HomeProduct key={item.id} props={item} />
      ))} */}
      {data.map((item) => (
        <HomePrduct key={item.id} props={item} />
      ))}
    </div>
  );
};
