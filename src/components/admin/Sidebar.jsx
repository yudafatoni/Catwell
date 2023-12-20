import React from "react";
import "../../style/admin/Sidebar.css";
import logoImage from "../../assets/LogoCatwell.svg";
import IconDashboard from "../../assets/admin/iconDashboard.svg";
import IconUser from "../../assets/admin/iconUser.svg";
import IconEdukasi from "../../assets/admin/iconEdukasi.svg";
import IconProduk from "../../assets/admin/iconProduk.svg";
import IconKonsultasi from "../../assets/admin/iconKonsul.svg";
import IconVet from "../../assets/admin/iconVet.svg";
import IconDiskusi from "../../assets/admin/iconDiskusi.svg";
import IconLogout from "../../assets/admin/Logout.svg";
import Icon from "../../assets/admin/Icon.svg";
import NavBar from "./Navbar";
import { Image, Dropdown, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();

  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 col-lg-2 d-none d-md-block bg-white sidebar">
          <div className="logo d-flex justify-content-center py-lg-1">
            <Image src={logoImage} alt="logo" width="248" height="52" />
          </div>
          <ul className="nav flex-column mt-4 mx-2">
            <li className="nav-item py-1 ">
              <Link to="/dashboard" className="no-underline">
                <a className={`nav-link d-flex text align-left ${isNavLinkActive("/dashboard") ? "active" : ""}`} href="#">
                  <Image src={Icon} alt="Dashboard" className="mx-2" style={{ width: "24px", height: "24px", color: isNavLinkActive("/dashboard") ? "#ffffff" : "", filter: isNavLinkActive("/dashboard") ? "invert(100%)" : "none" }} />
                  Dashboard
                </a>
              </Link>
            </li>
            <li className="nav-item py-1">
              <Dropdown>
                <Dropdown.Toggle className="nav-link d-flex text align-left" variant="transparent" id="dropdown-user">
                  {/* <Link to="/dashboard/pengguna" className="no-underline"> */}
                  <Image src={IconUser} alt="Pengguna" className="mx-2" style={{ width: "24px", height: "24px" }} />
                  Pengguna
                  {/* </Link> */}
                </Dropdown.Toggle>{" "}
                <Dropdown.Menu>
                  <Link to="/dashboard/user" className="no-underline">
                    <li className="nav-item py-1">
                      <a className={`nav-link d-flex text align-left ${isNavLinkActive("/dashboard/user") ? "active" : ""}`} href="#">
                        <Image
                          src={IconUser}
                          alt="Pengguna"
                          className="mx-2"
                          style={{ width: "24px", height: "24px", color: isNavLinkActive("/dashboard/user") ? "#ffffff" : "", filter: isNavLinkActive("/dashboard/user") ? "invert(100%)" : "none" }}
                        />
                        User
                      </a>
                    </li>
                  </Link>
                  <li className="nav-item py-1">
                    <Link to="/dashboard/dokter" className="no-underline">
                      <a className={`nav-link d-flex text align-left ${isNavLinkActive("/dashboard/dokter") ? "active" : ""}`} href="#">
                        <Image
                          src={IconUser}
                          alt="Pengguna"
                          className="mx-2"
                          style={{ width: "24px", height: "24px", color: isNavLinkActive("/dashboard/dokter") ? "#ffffff" : "", filter: isNavLinkActive("/dashboard/dokter") ? "invert(100%)" : "none" }}
                        />
                        Dokter
                      </a>
                    </Link>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item py-1">
              <Link to="/dashboard/konsultasi" className="no-underline">
                <a className={`nav-link d-flex text align-left ${isNavLinkActive("/dashboard/konsultasi") ? "active" : ""}`} href="#">
                  <Image
                    src={IconKonsultasi}
                    alt=""
                    className="mx-2"
                    style={{ width: "24px", height: "24px", color: isNavLinkActive("/dashboard/konsultasi") ? "#ffffff" : "", filter: isNavLinkActive("/dashboard/konsultasi") ? "invert(100%)" : "none" }}
                  />
                  Konsultasi
                </a>
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/dashboard/edukasi" className="no-underline">
                <a className={`nav-link d-flex text align-left ${isNavLinkActive("/dashboard/edukasi") ? "active" : ""}`} href="#">
                  <Image
                    src={IconEdukasi}
                    alt=""
                    className="mx-2"
                    style={{ width: "24px", height: "24px", color: isNavLinkActive("/dashboard/edukasi") ? "#ffffff" : "", filter: isNavLinkActive("/dashboard/edukasi") ? "invert(100%)" : "none" }}
                  />
                  Edukasi
                </a>
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/dashboard/diskusi" className="no-underline">
                <a className={`nav-link d-flex text align-left ${isNavLinkActive("/dashboard/diskusi") ? "active" : ""}`} href="#">
                  <Image
                    src={IconDiskusi}
                    alt=""
                    className="mx-2"
                    style={{ width: "24px", height: "24px", color: isNavLinkActive("/dashboard/diskusi") ? "#ffffff" : "", filter: isNavLinkActive("/dashboard/diskusi") ? "invert(100%)" : "none" }}
                  />
                  Diskusi
                </a>
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link to="/dashboard/produk" className="no-underline">
                <a className={`nav-link d-flex text align-left ${isNavLinkActive("/dashboard/produk") ? "active" : ""}`} href="#">
                  <Image
                    src={IconProduk}
                    alt=""
                    className="mx-2"
                    style={{ width: "24px", height: "24px", color: isNavLinkActive("/dashboard/produk") ? "#ffffff" : "", filter: isNavLinkActive("/dashboard/produk") ? "invert(100%)" : "none" }}
                  />
                  Produk
                </a>
              </Link>
            </li>
            <li className="nav-item py-1 ">
              <Link to="/dashboard/infoVet" className="no-underline">
                <a className={`nav-link d-flex text align-left ${isNavLinkActive("/dashboard/infoVet") ? "active" : ""}`} href="#">
                  <Image
                    src={IconVet}
                    alt=""
                    className="mx-2"
                    style={{ width: "24px", height: "24px", color: isNavLinkActive("/dashboard/infoVet") ? "#ffffff" : "", filter: isNavLinkActive("/dashboard/infoVet") ? "invert(100%)" : "none" }}
                  />
                  Info Vet
                </a>
              </Link>
            </li>
          </ul>

          <div className="logout mx-auto" style={{ marginTop: 125 }}>
            <hr />
            <a href="/" className="d-flex align-items-end" aria-expanded="false" style={{ color: "#F28705", textDecoration: "none" }}>
              <Image src={IconLogout} alt="" className="mx-2" style={{ width: "24px", height: "24px", color: "#F28705" }} />
              <strong style={{ color: "#F28705" }}>Logout</strong>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
