import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../style/admin/ModalEditVet.css";
import EditSukses from "./EditSukses";

function ModalTambah() {
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
      {/* {setView && <EditSukses />} */}
      {/* <button onClick={handleShow} className="btn btn-edit rounded-pill" style={{ fontFamily: "inter", fontSize: 12 }}>
        Edit
      </button> */}

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
            <Modal.Title className="">Tambah Data</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
            <form className="container px-5 mt-2 mb-2" action="">
              <div className="form-group row">
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  ID Vet
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="teks" placeholder="Masukkan ID" />
                </div>
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  Nama Tempat
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="teks" placeholder="Masukkan nama tempat" />
                </div>
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  Alamat
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="teks" placeholder="Masukkan alamat Vet" />
                </div>
                <label htmlFor="text" className="col-sm-3 col-form-label">
                  Jam Kerja
                </label>
                <div className="col-sm-9">
                  <input className="form-control text-start" name="text" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="time" placeholder="Masukkan jam kerja disini" />
                </div>
                <label htmlFor="phoneNumber" className="col-sm-3 col-form-label">
                  Nomor Telepon
                </label>
                <div className="col-sm-7">
                  <input className="form-control text-start" name="phoneNumber" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="tel" placeholder="Masukkan nomor telepon" />
                </div>
              </div>
            </form>
          </Modal.Body>

          <Modal.Footer className="d-flex justify-content-center">
            <button onClick={handleClose} className="customBtnEdit2 me-2" style={{ width: "120px", height: "46px", textAlign: "center", fontSize: 16, fontFamily: "Poppins", fontWeight: "700", wordWrap: "break-word", boxShadow: "" }}>
              Batal
            </button>
            <button onClick={handleSave} className="customBtnEdit1 ms-2" style={{ width: "120px", height: "46px", textAlign: "center", fontSize: 16, fontFamily: "Poppins", fontWeight: "700", wordWrap: "break-word", boxShadow: "" }}>
              Simpan
            </button>
          </Modal.Footer>
        </div>
      </Modal>
      {view && <EditSukses />}
    </>
  );
}

export default ModalTambah;
