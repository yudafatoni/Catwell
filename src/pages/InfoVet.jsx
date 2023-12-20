import React from "react";
import "../style/admin/Table.css";
import ModalEditVet from "../components/admin/ModalEditVet";
import KonfirmasiHapus from "../components/admin/KonfirmasiHapus";
import ModalTambah from "../components/admin/ModalTambah";

const InfoVet = () => {
  const commonTextStyle = {
    color: "#1E1E1E",
    fontSize: 12,
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    lineHeight: 1.5,
  };

  return (
    <div className="container px-4 mt-4">
      <div className="col-12 col-md-12 col-sm-12 mb-1">
        <div style={{ fontSize: "14" }}> Semua Info Vet</div>
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
          <div className="datatable-top ">
            <div className="table-responsive" style={{ maxHeight: "360px", overflowY: "auto", overflowX: "auto" }}>
              <table className="table table-responsive mt-3 table-hover">
                <thead className="">
                  <tr>
                    <th scope="col" style={commonTextStyle}>
                      ID Vet
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Nama Tempat
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Alamat
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Jam Kerja
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Nomor Kontak
                    </th>
                    <th scope="col" style={commonTextStyle}>
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="table-light">
                  <tr>
                    <th scope="row">VET_001</th>
                    <td style={commonTextStyle}>Klinik hewan sehat</td>
                    <td style={commonTextStyle}>Jl. Sitarda No.45 Surabaya</td>
                    <td style={commonTextStyle}>08.00 - 16.00 WIB</td>
                    <td style={commonTextStyle}>031 987355</td>
                    <td>
                      <ModalEditVet />
                      <KonfirmasiHapus />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">VET_001</th>
                    <td style={commonTextStyle}>Klinik hewan sehat</td>
                    <td style={commonTextStyle}>Jl. Sitarda No.45 Surabaya</td>
                    <td style={commonTextStyle}>08.00 - 16.00 WIB</td>
                    <td style={commonTextStyle}>031 987355</td>
                    <td>
                      <ModalEditVet />
                      <KonfirmasiHapus />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">VET_001</th>
                    <td style={commonTextStyle}>Klinik hewan sehat</td>
                    <td style={commonTextStyle}>Jl. Sitarda No.45 Surabaya</td>
                    <td style={commonTextStyle}>08.00 - 16.00 WIB</td>
                    <td style={commonTextStyle}>031 987355</td>
                    <td>
                      <ModalEditVet />
                      <KonfirmasiHapus />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">VET_001</th>
                    <td style={commonTextStyle}>Klinik hewan sehat</td>
                    <td style={commonTextStyle}>Jl. Sitarda No.45 Surabaya</td>
                    <td style={commonTextStyle}>08.00 - 16.00 WIB</td>
                    <td style={commonTextStyle}>031 987355</td>
                    <td>
                      <ModalEditVet />
                      <KonfirmasiHapus />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">VET_001</th>
                    <td style={commonTextStyle}>Klinik hewan sehat</td>
                    <td style={commonTextStyle}>Jl. Sitarda No.45 Surabaya</td>
                    <td style={commonTextStyle}>08.00 - 16.00 WIB</td>
                    <td style={commonTextStyle}>031 987355</td>
                    <td>
                      <ModalEditVet />
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

export default InfoVet;
