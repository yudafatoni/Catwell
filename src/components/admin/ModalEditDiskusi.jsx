import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../style/admin/ModalEditDiskusi.css";
import EditSukses from "./EditSukses";

const ModalEditDiskusi = () => {
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
            <Modal.Title className="">Edit Diskusi</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
            <form className="container px-5 mt-2 mb-2" action="">
              <div className="form-group row">
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  ID Diskusi
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="text" placeholder="Masukkan ID diskusi disini" />
                </div>
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  Pembuat
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="text" placeholder="Masukkan Pembuat diskusi" />
                </div>
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  Tanggal Pembuatan
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="date" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="date" placeholder="Masukkan tanggal pembuatan diskusi" />
                </div>
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  Jumlah Balasan
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="text" placeholder="Balasan" />
                </div>

                <label htmlFor="phoneNumber" className="col-sm-3 col-form-label">
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

export default ModalEditDiskusi;
