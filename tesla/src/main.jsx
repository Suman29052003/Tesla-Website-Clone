import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Help from "./assets/Help.jsx";
import Vehicles from "./assets/Vehicles.jsx";
import Energy from "./assets/Energy.jsx";
import Menu from "./assets/Menu.jsx";
import CustomOrder from "./assets/CustomOrder.jsx";
import DemoDrive from "./assets/DemoDrive.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path : "vehicles",
    element :<Vehicles/>
  },
  {
    path : "/energy",
    element :<Energy/>
  },
  {
    path : "/menu",
    element : <Menu/>
  },
  {
    path : "/custom-order",
    element : <CustomOrder/>
  },
  {
    path : "/demodrive",
    element : <DemoDrive/>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
