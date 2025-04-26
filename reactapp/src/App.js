import "./App.css";
import React from "react";

import AppRoutes from "./AppRoutes";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <AppRoutes />
      </Navbar>
    </div>
  );
}

export default App;
