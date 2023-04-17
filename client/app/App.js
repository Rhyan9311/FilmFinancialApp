import React from "react";
import { Provider } from "react-redux";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
// import InvPrefForm from "../features/investmentPreferences/InvPrefForm";
import store from "./store";

const App = () => {
  return ( //
      <div>
        <Navbar />
        <AppRoutes />
      </div>
  );
};

export default App;

