import React from "react";
import "../style/admin/Table.css";
import ModalEditVet from "../components/admin/ModalEditVet";
import KonfirmasiHapus from "../components/admin/KonfirmasiHapus";
import ModalEditEdukasi from "../components/admin/ModalEditEdukasi";
import ModalEditProduk from "../components/admin/ModalEditProduk";
import ModalEditDiskusi from "../components/admin/ModalEditDiskusi";

const Diskusi = () => {
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
        <div style={{ fontSize: "14" }}> Semua Diskusi</div>
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
                      ID Diskusi
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Pembuat
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Tanggal Pembuatan
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Balasan
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
                    <th scope="row">DIS_23</th>
                    <td style={commonTextStyle}>Anya Karina</td>
                    <td style={commonTextStyle}>20/11/2023</td>
                    <td style={commonTextStyle}>15</td>
                    <td style={commonTextStyle}>Aktif</td>
                    <td>
                      <ModalEditDiskusi />
                      <KonfirmasiHapus />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">DIS_23</th>
                    <td style={commonTextStyle}>rina</td>
                    <td style={commonTextStyle}>29/12/2023</td>
                    <td style={commonTextStyle}>15</td>
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

export default Diskusi;
