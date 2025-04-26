/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React from "react";
import { useAppContext } from "../../Context/AppContextReducer";
import "swiper/css";

import musicWeb from "../../Images/musicwebMARS.svg";
import { HomeShowProducts } from "../../Components/Home/HomeShowProducts";
// import Astronaut from "../../Components/Home/LoadersHM/Astronaut";
import Ghost from "../../Components/Home/LoadersHM/Ghost";
import Flamer from "../../Components/Home/LoadersHM/Flamer";
// import FuzzyText from "../../Components/Ui/textFZ/FuzzyText";
// import Spline from "@splinetool/react-spline";
export const Home = () => {
  const { state } = useAppContext();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="flex flex-row gap-20">
          <div className="relative top-20">
            {/* <FuzzyText baseIntensity={0.2} hoverIntensity={2} enableHover={2}>
              ffz
            </FuzzyText> */}
            <Ghost />
          </div>
          <div className="w-full flex justify-center relative -top-20 ">
            <img
              src={musicWeb}
              alt="music visual"
              className="w-[700px] max-w-full rounded-full contrast-125 hue-rotate-[-35deg] saturate-50"
            />
          </div>
          <div className=" relative top-96">
            <Flamer />
          </div>
        </div>
        {/* <Spline scene="https://prod.spline.design/FYO052hVaX2k2Rm3/scene.splinecode" /> */}
      </div>

      <HomeShowProducts />
      <h1 className="text-white bg-red-400 mt-6 text-xl">
        {state.user ? state.user.userName : "alo"}
      </h1>
      <div className="h-full text-white mt-4">Home</div>
    </div>
  );
};
