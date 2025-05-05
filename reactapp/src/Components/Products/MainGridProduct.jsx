/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainGridProduct = ({ props }) => {
  const [image, setImage] = useState(props.images.img1);
  const handleMouseEnter = () => {
    if (props.images.img2) {
      setImage(props.images.img2); // შეცვლის ფოტოს img2-ზე
    } else {
      setImage(props.images.img1); // დაბრუნდება img1-ზე
    }
  };

  const handleMouseLeave = () => {
    setImage(props.images.img1); // დაბრუნდება img1-ზე
  };
  // Naviget
  const navigate = useNavigate();
  const goDTL = () => {
    if (props.member === "cover") {
      navigate(`/cvdetail/${props.id}`);
      window.scrollTo(0, 0);
    } else if (props.type === "tshirt") {
      navigate(`/tshirtdetail/${props.id}`);
    } else if (props.type === "case") {
      navigate(`/casedetail/${props.id}`);
    } else if (props.type === "hood") {
      navigate(`/hooddetail/${props.id}`);
    }
  };
  return (
    <div
      className="w-80 h-[400px]   flex flex-col gap-4 rounded-br-3xl"
      onClick={goDTL}
    >
      <div>
        {/* <div className="duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100"></div> */}
        <img
          src={image}
          alt=""
          className="w-full h-[350px] transition-transform duration-300 ease-in-out transform hover:scale-125"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      {props.sale ? (
        <div className="absolute overflow-hidden w-[150px] h-[150px]  flex items-center justify-center">
          <div className="absolute w-[150%] h-10 rotate-[-45deg] text-2xl -translate-y-5 bg-gradient-to-r from-[#770737] via-[#800080] to-[#953553] text-white font-semibold uppercase tracking-wider shadow-md flex items-center justify-center">
            Sale {props.sale}
          </div>
          <div className="absolute w-[10px] h-[10px] bottom-0 left-0 -z-10 shadow-[140px_-140px_0_0_#cc3f47] bg-gradient-to-r from-[#770737] via-[#770737] to-[#770737]" />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col ">
            <span className="text-xl text-gray-50 font-bold">{props.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-green-500">
                {props.price}
              </span>

              {props.orgprice ? (
                <span className="text-sm  line-through font-bold  text-red-600 text-center">
                  {props.orgprice}
                </span>
              ) : (
                ""
              )}
            </div>
            {/* <p className="text-xs text-gray-400">ID: 23432252</p> */}
          </div>
        </div>
        {/* <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-br-xl">
          Add to cart
        </button> */}
      </div>
    </div>
  );
};

export default MainGridProduct;
