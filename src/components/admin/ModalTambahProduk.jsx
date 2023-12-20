import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../style/admin/ModalEditProduk.css";
import ModalEditProduk from "./ModalEditProduk";

function ModalTambahProduk() {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    handleClose();
    setView(true);
    setTimeout(() => {
      setView(false);
    }, 2000);
  };

  return (
    <div>
      <>
        <Button
          onClick={handleShow}
          className="btn-tambah"
          style={{
            marginLeft: "50%",
            backgroundColor: "#F28705",
            color: "white",
            transition: "background-color 0.3s ease",
            border: "none",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#FFA500")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#F28705")}
        >
          Tambah
        </Button>

        <Modal show={show} onHide={handleClose} dialogClassName="modalPage" size="lg">
          <div className="container">
            <Modal.Header closeButton>
              <Modal.Title className="">Edit Rekomendasi Produk</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
              <form className="container px-5 mt-2 mb-2" action="">
                <div className="form-group row">
                  <label htmlFor="text" className="col-sm-3 col-form-label">
                    ID Rekomendasi
                  </label>
                  <div className="col-sm-9">
                    <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="teks" placeholder="Masukkan ID rekomendasi" />
                  </div>
                  <label htmlFor="text" className="col-sm-3 col-form-label">
                    Nama Produk
                  </label>
                  <div className="col-sm-9">
                    <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="teks" placeholder="Masukkan nama produk disini" />
                  </div>
                  <label htmlFor="text" className="col-sm-3 col-form-label">
                    Merek Produk
                  </label>
                  <div className="col-sm-9">
                    <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="teks" placeholder="Masukkan merek produk disini" />
                  </div>
                  <label htmlFor="text" className="col-sm-3 col-form-label">
                    Harga Produk
                  </label>
                  <div className="col-sm-9">
                    <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="text" placeholder="Masukkan harga produk disini" />
                  </div>
                  <label htmlFor="phoneNumber" className="col-sm-3 col-form-label">
                    Daftar Keinginan
                  </label>
                  <div className="col-sm-7">
                    <input className="form-control text-start" name="phoneNumber" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="number" placeholder="Masukkan jumlah daftar keinginan" />
                  </div>
                  <label htmlFor="phoneNumber" className="col-sm-3 col-form-label">
                    Gambar Produk
                  </label>
                  <div className="col-sm-7">
                    <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                  </div>
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center">
              <button
                a
                href="/infovet"
                onClick={handleClose}
                className="customBtnEdit2 me-2"
                style={{ width: "120px", height: "46px", textAlign: "center", fontSize: 16, fontFamily: "Poppins", fontWeight: "700", wordWrap: "break-word", boxShadow: "" }}
              >
                Batal
              </button>
              <button onClick={handleShow} className="customBtnEdit1 ms-2" style={{ width: "120px", height: "46px", textAlign: "center", fontSize: 16, fontFamily: "Poppins", fontWeight: "700", wordWrap: "break-word", boxShadow: "" }}>
                Simpan
              </button>
            </Modal.Footer>
          </div>
        </Modal>
      </>
    </div>
  );
}

export default ModalTambahProduk;
