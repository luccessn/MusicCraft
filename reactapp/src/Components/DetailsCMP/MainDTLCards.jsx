/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainDTLCard from "./MainDTLCard";
import { useAppContext } from "../../Context/AppContextReducer";
import { addToCart } from "../../Context/AppActionsCreator";

const MainDTLCards = ({ data }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [imgsChange, setImgsChange] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (data && data.images && data.images?.img1) {
      setImgsChange(data.images?.img1);
    }
  }, [data]);

  //SIZES
  const sizes = ["Small", "Medium", "Large", "XL", "XXL", "XXXL"];
  const [selectedSize, setSelectedSize] = useState(null);
  //counter
  const [Counter, setCounter] = useState(1);
  // cart logic
  const { dispatch } = useAppContext();
  const AddToCart = () => {
    const itemToAdd = {
      id: data._id,
      name: data.name,
      image: data.images?.img1,
      price: data.price,
      size: selectedSize,
      quantity: Counter,
    };
    dispatch(addToCart(itemToAdd));
  };
  console.log(data);

  return (
    <div className="text-5xl p-6 text-white flex flex-col gap-20 items-center ">
      <div className="flex flex-row gap-2 ">
        <div className="flex flex-col gap-2 ">
          <div className="w-[350px] h-[350px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center ">
                {/* ეს იქნება ლოადერი ან placeholder */}
                <span className="loader border-4 border-purple-800 border-t-transparent rounded-full w-10 h-10 animate-spin"></span>
              </div>
            )}
            <img
              src={data.images?.img1}
              alt=""
              className={`w-[350px] h-[350px] cursor-pointer ${
                isLoading ? "invisible" : "visible"
              }`}
              onClick={() => setImgsChange(data.images?.img1)}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          {data.images?.img2 ? (
            <img
              src={data.images?.img2}
              alt=""
              className="w-[350px] h-[350px]   cursor-pointer"
              onClick={() => setImgsChange(data.images?.img2)}
            />
          ) : null}
        </div>
        {imgsChange && (
          <div className="relative">
            <motion.img
              key={imgsChange}
              src={imgsChange}
              alt=""
              className="w-[500px] h-[550px] cursor-zoom-in z-10"
              onClick={() => setIsZoomed((prev) => !prev)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: isZoomed ? 2 : 1 }}
              transition={{ duration: 0.5 }}
            />
            {data.sale && (
              <div className="absolute overflow-hidden w-[150px] h-[150px] flex items-center justify-center top-0 left-0 -z-10">
                <div className="absolute w-[150%] h-10 rotate-[-45deg] text-2xl -translate-y-5 bg-gradient-to-r from-[#770737] via-[#800080] to-[#953553] text-white font-semibold uppercase tracking-wider shadow-md flex items-center justify-center">
                  Sale {data.sale}
                </div>
                <div className="absolute w-[10px] h-[10px] bottom-0 left-0 -z-10 shadow-[140px_-140px_0_0_#cc3f47] bg-gradient-to-r from-[#770737] via-[#770737] to-[#770737]" />
              </div>
            )}
          </div>
        )}
        <div className="w-[400px] flex flex-col gap-8 font-serif">
          <h1 className=" font-serif text-5xl">{data.name}</h1>

          <div className="flex flex-row gap-2">
            <h1 className="text-3xl font-semibold text-green-500">
              {data.price}
            </h1>

            {data.orgprice ? (
              <h1 className="text-2xl  line-through font-bold  text-red-600 text-center">
                {data.orgprice}
              </h1>
            ) : (
              ""
            )}
          </div>

          <h1 className="text-gray-300 text-xl">Finally calculated</h1>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">Size</h1>
            <div className="grid grid-cols-3 gap-5">
              {data.sizes
                ? data.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`text-xl rounded-sm ${
                        selectedSize === size
                          ? "bg-gray-200 text-black"
                          : "bg-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))
                : sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`text-xl rounded-sm ${
                        selectedSize === size
                          ? "bg-gray-200 text-black"
                          : "bg-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
              {/* {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-xl rounded-sm ${
                    selectedSize === size
                      ? "bg-gray-200 text-black"
                      : "bg-black"
                  }`}
                >
                  {size}
                </button>
              ))} */}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-xl">Quantity</h1>
            <div className="text-xl flex flex-row items-center gap-3 relative left-10">
              <button
                onClick={() => setCounter((prev) => Math.max(prev - 1, 1))}
                className={`px-3 py-1 rounded ${
                  Counter === 1 ? " text-gray-600" : "text-white"
                }`}
              >
                -
              </button>
              <h1>{Counter}</h1>
              <button
                onClick={() => setCounter((prev) => prev + 1)}
                className="px-3 py-1  rounded"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <button
              className="text-2xl bg-gray-400 w-[200px] rounded-xl"
              onClick={AddToCart}
            >
              Add To cart
            </button>
            <button className="text-2xl bg-blue-400 w-[200px] rounded-xl">
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div>
        <MainDTLCard props={data} />
      </div>
    </div>
  );
};

export default MainDTLCards;
