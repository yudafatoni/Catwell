import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Login from "./pages/Login";
import LupaPassword from "./pages/LupaPassword";
import NewPassword from "./pages/NewPassword";
import VerifPassword from "./pages/VerifPassword";
import Success from "./pages/Success";


export const RoutesX = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/login" element={<Login />} />
        <Route path="/lupapassword" Component={LupaPassword} />
        <Route path="/newpassword" Component={NewPassword} />
        <Route path="/verification" Component={VerifPassword} />
        <Route path="/success" Component={Success} />
      </Routes>
    </div>
  );
};
export default RoutesX;