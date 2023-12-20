import React from "react";
import Sidebar from "./admin/Sidebar";
import NavBar from "./admin/Navbar";
import Hapus from "./admin/Hapus";
import EditSukses from "./admin/EditSukses";
import KonfirmasiHapus from "./admin/KonfirmasiHapus";
import InfoVet from "../pages/InfoVet";
import Diskusi from "../pages/Diskusi";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="myDashboard bg-light">
        <div className="d-flex">
          <div className="col-2">{/* <Sidebar /> */}</div>
          <div className="col-10">
            <NavBar />
            <Routes>
              <Route path="/dashboard" element={Sidebar}>
                <Route path="hapus" element={<Hapus />} />
                <Route path="editSukses" element={<EditSukses />} />
                <Route path="konfirmasihapus" element={<KonfirmasiHapus />} />
                <Route path="infoVet" element={<InfoVet />} />
                <Route path="diskusi" element={<Diskusi />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
