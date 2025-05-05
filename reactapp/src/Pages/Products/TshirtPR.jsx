/* eslint-disable prettier/prettier */
import React from "react";
import useFetchData from "../../HOC/useFetchData";
import HomePrduct from "../../Components/Products/MainGridProduct";

const TshirtPR = () => {
  const [data, error, isLoading] = useFetchData(
    "http://localhost:3001/gettshirtImages"
  );
  if (error) {
    return <h1>err:{error}</h1>;
  }

  return (
    <div>
      <div className=" grid grid-cols-4 gap-24">
        {isLoading && <h1>Loading...</h1>}
        {data.map((item) => (
          <HomePrduct key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
};

export default TshirtPR;
