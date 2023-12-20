import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import RoutesX from "./RoutesX.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <BrowserRouter>
 <App/>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
