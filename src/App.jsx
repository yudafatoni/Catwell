import LoginPage from "./pages/LoginPage";
import Login from "./pages/Login";
import LupaPassword from "./pages/LupaPassword";
import VerifPassword from "./pages/VerifPassword";
import NewPassword from "./pages/NewPassword";
import Success from "./pages/Success";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Hapus from "./components/admin/Hapus";
import EditSukses from "./components/admin/EditSukses";
import KonfirmasiHapus from "./components/admin/KonfirmasiHapus";
import InfoVet from "./pages/InfoVet";
import Diskusi from "./pages/Diskusi";
import Sidebar from "./components/admin/Sidebar";
import Navbar from "./components/admin/Navbar";
import Konsultasi from "./pages/Konsultasi";
import { Routes, Route, Router } from "react-router-dom";
import RoutesX from "./RoutesX";
import Admin from "./components/Admin";
import Edukasi from "./pages/Edukasi";
import Pengguna from "./pages/User";
import Produk from "./pages/produk";
import User from "./pages/User";
import Dokter from "./pages/Dokter";

function App() {
  return (
    <div>
      {/* <div className="col-10"> */}

      <Routes>
        <Route exact path="/" Component={LoginPage} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/lupapassword" Component={LupaPassword} />
        <Route exact path="/newpassword" Component={NewPassword} />
        <Route exact path="/verification" Component={VerifPassword} />
        <Route exact path="/success" Component={Success} />

        <Route path="/dashboard" element={<Navbar />}>
          {/* <Route path="hapus" element={<Hapus />} />
                <Route path="editSukses" element={<EditSukses />} />
                <Route path="konfirmasihapus" element={<KonfirmasiHapus />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/infoVet" element={<InfoVet />} />
          <Route path="/dashboard/diskusi" element={<Diskusi />} />
          <Route path="/dashboard/edukasi" element={<Edukasi />} />
          <Route path="/dashboard/konsultasi" element={<Konsultasi />} />
          <Route path="/dashboard/user" element={<User />} />
          <Route path="/dashboard/dokter" element={<Dokter />} />
          <Route path="/dashboard/produk" element={<Produk />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
