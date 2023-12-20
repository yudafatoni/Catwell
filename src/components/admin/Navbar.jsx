import React from "react";
import { useState } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import "../../style/admin/Navbar.css";
import profile from "../../assets/Avatar.png";
import { Outlet } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Sidebar from "./Sidebar";

const NavbarScoll = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="myDashboard bg-light">
        <div className="d-flex">
          <div className={`col-2 ${isSidebarOpen ? "" : "sidebar-closed"}`}>
            <Sidebar />
          </div>
          <div className="col-10">
            <Navbar expand="lg" className="bg-white">
              <Container>
                <Navbar.Brand href="#">
                  <h4>Hi Yuda!</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <div className="search-bar d-flex ms-auto ">
                    <form className="search-form  d-flex align-items-center ms-5" method="POST" action="#">
                      <i className="bi bi-search d-flex py-2 px-2 position-absolute "></i>
                      <input type="text" name="query" placeholder=" Pencarian" title="Enter search keyword" />
                    </form>
                  </div>

                  <Nav className="ms-auto" navbarScroll>
                    <ul className="d-flex align-items-center list">
                      <li className="nav-item dropdown ms-auto ">
                        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                          <i className="bi bi-envelope postition-relative">
                            <div className="circleBadge d-flex position-absolute top-50 start-50 "></div>
                          </i>
                        </a>
                        {/* Tambahkan konten dropdown notifikasi */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">{/* Isi dengan elemen-elemen dropdown notifikasi */}</ul>
                      </li>

                      <li className="nav-item dropdown ms-auto me-5">
                        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                          <i className="bi bi-bell position-relative"></i>
                          <div className="circleBadge position-absolute top-50 start-50"></div>
                        </a>
                        {/* Tambahkan konten dropdown pesan */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">{/* Isi dengan elemen-elemen dropdown pesan */}</ul>
                      </li>

                      <li>
                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                          <Image src={profile} className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                          <span>
                            Yuda <br />
                            <span style={{ fontSize: "0.8em", color: "#999" }}>Admin</span>
                          </span>
                        </a>

                        {/* Tambahkan konten dropdown profil */}
                      </li>
                    </ul>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarScoll;
