import "./App.css";
import React from "react";

import AppRoutes from "./AppRoutes";
import NavBarHR from "./Components/Navbar/NavBarHR";
import { ShootingStars } from "./Components/Ui/stars/shooting-stars";
import { StarsBackground } from "./Components/Ui/stars/stars-background";
// import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="  bg-black h-[2500px]  ">
      <NavBarHR />
      <div className="z-10 relative">
        {/* <Navbar> */}
        <AppRoutes />
        {/* </Navbar> */}
      </div>
      <ShootingStars className="h-[2500px]" />
      <StarsBackground className="h-[2500px]" />
    </div>
  );
}

export default App;
