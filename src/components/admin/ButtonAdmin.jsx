import React from "react";
import "../../style/admin/ButtonAdmin.css";

const ButtonAdmin = () => {
  return (
    <div className="d-flex justify-content-center position-absolute">
      <button a href="/infovet" className="customBtnAdmin2 me-2" style={{ width: "120px", height: "46px", textAlign: "center", fontSize: 16, fontFamily: "Poppins", fontWeight: "700", wordWrap: "break-word", boxShadow: "" }}>
        Tidak
      </button>
      <button className="customBtnAdmin1 ms-2" style={{ width: "120px", height: "46px", textAlign: "center", fontSize: 16, fontFamily: "Poppins", fontWeight: "700", wordWrap: "break-word", boxShadow: "" }}>
        Ya
      </button>
    </div>
  );
};

export default ButtonAdmin;
