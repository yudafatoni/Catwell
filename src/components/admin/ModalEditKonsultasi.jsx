import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../style/admin/ModalEditKonsultasi.css";
import EditSukses from "./EditSukses";

const ModalEditKonsultasi = () => {
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
    <>
      <button onClick={handleShow} className="btn btn-edit rounded-pill" style={{ fontFamily: "inter", fontSize: 12 }}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose} dialogClassName="modalPage" size="lg">
        <div className="container">
          <Modal.Header closeButton>
            <Modal.Title className="">Edit Konsultasi</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
            <form className="container px-5 mt-2 mb-2" action="">
              <div className="form-group row">
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  ID Konsultasi
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="text" placeholder="Masukkan ID Konsultasi disini" />
                </div>
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  Nama Pengguna
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="text" placeholder="Masukkan nama pengguna disini" />
                </div>
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  Nama Dokter
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="date" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="text" placeholder="Masukkan nama dokter disini" />
                </div>
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  Waktu Konsultasi
                </label>
                <div className="col-sm-3">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="time" placeholder="Waktu Mulai" />
                </div>
                <div className="col-sm-3">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="time" placeholder="Waktu Selesai" />
                </div>
                <div className="col-sm-3">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="text" placeholder="Durasi" />
                </div>

                <label htmlFor="status" className="col-sm-3 col-form-label">
                  Status
                </label>
                <div className="col-sm-7">
                  <Form.Select className="form-control" name="status" style={{ borderRadius: 9, border: "1px #F28705 solid" }}>
                    <option value="" disabled selected>
                      Pilih Status
                    </option>
                    <option value="aktif">Aktif</option>
                    <option value="tidakAktif">Tidak Aktif</option>
                    {/* Tambahkan opsi status lainnya sesuai kebutuhan */}
                  </Form.Select>
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
            <button onClick={handleSave} className="customBtnEdit1 ms-2" style={{ width: "120px", height: "46px", textAlign: "center", fontSize: 16, fontFamily: "Poppins", fontWeight: "700", wordWrap: "break-word", boxShadow: "" }}>
              Simpan
            </button>
          </Modal.Footer>
        </div>
      </Modal>
      {view && <EditSukses/>}
    </>
  );
};

export default ModalEditKonsultasi;
