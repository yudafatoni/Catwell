import React from "react";
import { useState } from "react";
import ButtonAdmin from "./ButtonAdmin";
import "../ButtonLogin.css";
import { Modal } from "react-bootstrap";
import Hapus from "./Hapus";

const KonfirmasiHapus = () => {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirm = () => {
    setView(true);
    setShow(false);
    setTimeout(() => {
      setView(false);
    }, 2000);
  };

  return (
    <>
      <button onClick={handleShow} className="mx-2 btn btn-hapus rounded-pill" style={{ fontFamily: "inter", fontSize: 12 }}>
        Hapus
      </button>

      <Modal show={show} onHide={handleClose} dialogClassName="modalPage" size="lg">
        <div className="d-flex justify-content-center align-items-center position-absolute" style={{ flexdirection: "column", width: "100%", height: " 100vh" }}>
          <div className="borderHapus text-center"></div>
          <div style={{ textAlign: "center", color: "black", fontSize: 20, fontFamily: "Poppins", fontWeight: "400", wordWrap: "break-word", position: "absolute", marginTop: 250 }}>
            Apakah Anda yakin ingin <br />
            menghapus data ini?
            <div style={{ position: "absolute", marginTop: 150 }}>
              <div className="d-flex justify-content-center position-absolute">
                <button onClick={handleClose} className="customBtnAdmin2 me-2" style={{ width: "120px", height: "46px", textAlign: "center", fontSize: 16, fontFamily: "Poppins", fontWeight: "700", wordWrap: "break-word", boxShadow: "" }}>
                  Tidak
                </button>
                <button onClick={handleConfirm} className="customBtnAdmin1 ms-2" style={{ width: "120px", height: "46px", textAlign: "center", fontSize: 16, fontFamily: "Poppins", fontWeight: "700", wordWrap: "break-word", boxShadow: "" }}>
                  Ya
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {view && <Hapus />}
    </>
  );
};

export default KonfirmasiHapus;
