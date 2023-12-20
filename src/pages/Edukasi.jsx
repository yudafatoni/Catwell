import React from "react";
import "../style/admin/Table.css";
import KonfirmasiHapus from "../components/admin/KonfirmasiHapus";
import ModalEditEdukasi from "../components/admin/ModalEditEdukasi";
import ModalTambah from "../components/admin/ModalTambah";

const Edukasi = () => {
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
        <div style={{ fontSize: "14" }}> Semua Konten Edukasi</div>
        <hr style={{ width: "98%" }} />
      </div>

      <div className="container">
        <div className="d-flex flex-column flex-md-row">
          <div className="col-10 col-md-9 mb-2 mb-md-0">
            <div className="search-bar d-flex">
              <form className="search-form d-flex align-items-center" method="POST" action="#">
                <i className="bi bi-search d-flex py-2 px-2 position-absolute"></i>
                <input type="text" name="query" placeholder=" Pencarian" title="Enter search keyword" style={{ background: "white" }} />
              </form>
            </div>
          </div>
          <div className="col-2 col-md-3">
            <ModalTambah />
          </div>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <div className="datatable-top">
            <div className="table-responsive" style={{ maxHeight: "350px", overflowY: "auto", overflowX: "auto" }}>
              <table className="table mt-3 table-hover table-responsive">
                <thead className="sticky-top">
                  <tr>
                    <th scope="col" style={commonTextStyle}>
                      ID Edukasi
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Judul
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Tipe Konten
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Penulis
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Tanggal Publikasi
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
                    <th scope="row">KSL_7821</th>
                    <td style={commonTextStyle}>Cara merawat Kucing Bagi Pemula</td>
                    <td style={commonTextStyle}>Artikel</td>
                    <td style={commonTextStyle}>sea</td>
                    <td style={commonTextStyle}>20/11/2023</td>

                    <td style={commonTextStyle}>Aktif</td>
                    <td>
                      <ModalEditEdukasi />
                      <KonfirmasiHapus />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">KSL_7821</th>
                    <td style={commonTextStyle}>Cara merawat Kucing Bagi Pemula</td>
                    <td style={commonTextStyle}>Artikel</td>
                    <td style={commonTextStyle}>sea</td>
                    <td style={commonTextStyle}>20/11/2023</td>

                    <td style={commonTextStyle}>Aktif</td>
                    <td>
                      <ModalEditEdukasi />
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

export default Edukasi;
