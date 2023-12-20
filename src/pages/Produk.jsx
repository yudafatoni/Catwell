import React from "react";
import "../style/admin/Table.css";
import KonfirmasiHapus from "../components/admin/KonfirmasiHapus";
import ModalEditProduk from "../components/admin/ModalEditProduk";
import ModalTambah from "../components/admin/ModalTambah";

const Produk = () => {
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
        <div style={{ fontSize: "14" }}> Semua Rekomendasi Produk</div>
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
              <table className="table mt-3 table-hover">
                <thead className="sticky-top">
                  <tr>
                    <th scope="col" style={commonTextStyle}>
                      ID Produk
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Nama Produk
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Merek
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Harga
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Daftar Keingingan
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="table-light">
                  <tr>
                    <th scope="row">PRD_37</th>
                    <td style={commonTextStyle}>Makanan Kering 600gr</td>
                    <td style={commonTextStyle}>Royal Canin</td>
                    <td style={commonTextStyle}>Rp. 60.000</td>
                    <td style={commonTextStyle}>20</td>
                    <td>
                      <ModalEditProduk />
                      <KonfirmasiHapus />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">PRD_38</th>
                    <td style={commonTextStyle}>Makanan Kering 250gr</td>
                    <td style={commonTextStyle}>Royal </td>
                    <td style={commonTextStyle}>Rp. 30.000</td>
                    <td style={commonTextStyle}>20</td>
                    <td>
                      <ModalEditProduk />
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

export default Produk;
