/* eslint-disable prettier/prettier */
import React from "react";
import { CardBody, CardContainer, CardItem } from "../Ui/3dProduct/3d-card";
import { useNavigate } from "react-router-dom";

export const HomeProduct = ({ props }) => {
  const navigate = useNavigate();
  const goDTL = () => {
    navigate(`/productdetail/${props.id}`);
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-black via-purple-950 to-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {props.descr}
        </CardItem>
        {props.sale ? (
          <div className="absolute overflow-hidden w-[150px] h-[150px] -top-[10px] -left-[10px] flex items-center justify-center">
            <div className="absolute w-[150%] h-10 rotate-[-45deg] text-2xl -translate-y-5 bg-gradient-to-r from-[#ff6547] via-[#ffb144] to-[#ff7053] text-white font-semibold uppercase tracking-wider shadow-md flex items-center justify-center">
              Sale {props.sale}
            </div>
            <div className="absolute w-[10px] h-[10px] bottom-0 left-0 -z-10 shadow-[140px_-140px_0_0_#cc3f47] bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F]" />
          </div>
        ) : (
          ""
        )}
        <CardItem
          translateZ="100"
          rotateX={10}
          rotateZ={0}
          className="w-full mt-4"
        >
          <img
            src={props.img}
            className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl "
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-green-500">
                Price : {props.price}
              </span>

              {props.originalprice ? (
                <span className="text-sm text-gray-500 line-through">
                  Price : {props.originalprice}
                </span>
              ) : (
                ""
              )}
            </div>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={-40}
            onClick={goDTL}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
