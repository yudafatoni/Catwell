import React from "react";
import { BsArchiveFill } from "react-icons/bs";
import "../style/admin/Dashboard.css";
import IconPendapatan from "../assets/dashboard/pendapatan.svg";
import IconDokter from "../assets/dashboard/dokter.svg";
import IconEdukasi from "../assets/dashboard/Edukasi.svg";
import IconInfoVet from "../assets/dashboard/InfoVet.svg";
import IconKonsultasi from "../assets/dashboard/konsultasi.svg";
import IconProduk from "../assets/dashboard/Produk.svg";
import IconUser from "../assets/dashboard/user.svg";
import IconDiskusi from "../assets/dashboard/Diskusi.svg";
import { Image } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="Bg">
        <div className="main-container">
          <div className="main-cards ">
            <div
              className="card"
              style={{ width: "100%", height: "100%", background: "rgba(255, 255, 255, 0.75)", boxShadow: "0px 12px 16px -4px rgba(12, 26, 36, 0.04)", borderRadius: 6, border: "1px white solid", backdropFilter: "blur(27.20px)" }}
            >
              <div className="card-inner">
                <Image src={IconPendapatan} alt="icon" className="Bord" style={{ width: "48px", height: "48px" }} />
                <p>Total Pendapatan</p>
                <h4>1.270.000</h4>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "100%", height: "100%", background: "rgba(255, 255, 255, 0.75)", boxShadow: "0px 12px 16px -4px rgba(12, 26, 36, 0.04)", borderRadius: 6, border: "1px white solid", backdropFilter: "blur(27.20px)" }}
            >
              <div className="card-inner">
                <Image src={IconUser} alt="icon" className="Bord" style={{ width: "48px", height: "48px" }} />
                <p>Total Pengguna</p>
                <h4>115</h4>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "100%", height: "100%", background: "rgba(255, 255, 255, 0.75)", boxShadow: "0px 12px 16px -4px rgba(12, 26, 36, 0.04)", borderRadius: 6, border: "1px white solid", backdropFilter: "blur(27.20px)" }}
            >
              <div className="card-inner">
                <Image src={IconDokter} alt="icon" className="Bord" style={{ width: "48px", height: "48px" }} />
                <p>Total Dokter</p>
                <h4>47</h4>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "100%", height: "100%", background: "rgba(255, 255, 255, 0.75)", boxShadow: "0px 12px 16px -4px rgba(12, 26, 36, 0.04)", borderRadius: 6, border: "1px white solid", backdropFilter: "blur(27.20px)" }}
            >
              <div className="card-inner">
                <Image src={IconKonsultasi} alt="icon" className="Bord" style={{ width: "48px", height: "48px" }} />
                <p>Total Konsultasi</p>
                <h4>129</h4>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <Image src={IconEdukasi} alt="icon" className="Bord" style={{ width: "48px", height: "48px" }} />
                <p>Total Konten Edukasi</p>
                <h4>17</h4>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <Image src={IconDiskusi} alt="icon" className="Bord" style={{ width: "48px", height: "48px" }} />
                <p>Total Kiriman Diskusi</p>
                <h4>197</h4>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <Image src={IconProduk} alt="icon" className="Bord" style={{ width: "48px", height: "48px" }} />
                <p>Total Produk Rekomendasi</p>
                <h4>38</h4>
              </div>
            </div>
            <div className="card">
              <div className="card-inner">
                <Image src={IconInfoVet} alt="icon" className="Bord" style={{ width: "48px", height: "48px" }} />
                <p>Total Info Vet</p>
                <h4>17</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
