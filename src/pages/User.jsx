import React from "react";
import "../style/admin/Table.css";
import KonfirmasiHapus from "../components/admin/KonfirmasiHapus";
import ModalEditDiskusi from "../components/admin/ModalEditDiskusi";

const User = () => {
  const commonTextStyle = {
    color: "#1E1E1E",
    fontSize: 12,
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    lineHeight: 1.5,
  };

  return (
    <div className="container px-4 mt-4">
      <div className="col-12 col-md-12 col-sm-12 mb-3">
        <div style={{ fontSize: "14" }}> Pengguna</div>
        <hr style={{ width: "98%" }} />
      </div>

      <div className="container d-flex">
        <div className="col-10">
          <div className="search-bar d-flex ">
            <form className="search-form d-flex align-items-center mb-3" method="POST" action="#">
              <i className="bi bi-search d-flex py-2 px-2 position-absolute "></i>
              <input type="text" name="query" placeholder=" Pencarian" title="Enter search keyword" style={{ background: "white" }} />
            </form>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="datatable-top">
            <div className="table-responsive" style={{ maxHeight: "350px", overflowY: "auto", overflowX: "auto" }}>
              <table className="table mt-3 table-hover">
                <thead>
                  <tr>
                    <th scope="col" style={commonTextStyle}>
                      Nama Pengguna
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      E-mail
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Peran
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Status
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="table-light">
                  <tr>
                    <th scope="row">Anya Karina</th>
                    <td style={commonTextStyle}>anyaaay@gmail</td>
                    <td style={commonTextStyle}>Admin</td>
                    <td style={commonTextStyle}>Aktif</td>
                    <td>
                      <ModalEditDiskusi />
                      <KonfirmasiHapus />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">rina </th>
                    <td style={commonTextStyle}>aay@gmail</td>
                    <td style={commonTextStyle}>Admin</td>
                    <td style={commonTextStyle}>Aktif</td>
                    <td>
                      <ModalEditDiskusi />
                      <KonfirmasiHapus />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
