import React from "react";
import { Provider } from "react-redux";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import InvPrefForm from "../features/investmentPreferences/InvPrefForm";
import store from "./store"; // assuming your store file is named store.js

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <AppRoutes />
      </div>
    </Provider>
  );
};

export default App;

