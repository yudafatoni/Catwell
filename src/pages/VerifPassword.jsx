import React from "react";
import CardComponent from "../components/CardLogin";
import Button from "../components/Button";
import "../style/VerifPassword.css";

const VerifPassword = () => {
  return (
    <div className="d-flex align-items-center justify-content-center myBg">
      <div className="position-absolute">
        <CardComponent />
      </div>

      <div className="text-center position-relative d-flex flex-column align-items-center">
        <p className="teks" style={{ marginTop: 50 }}>
          Masukkan kode yang dikirimkan ke E-mail Anda
        </p>

        <div className="input-container mt-4 d-flex flex-row justify-content-center mt-2">
          <input type="text" className="m-1 text-center form-control rounded" maxLength="1" />
          <input type="text" className="m-1 text-center form-control rounded" maxLength="1" />
          <input type="text" className="m-1 text-center form-control rounded" maxLength="1" />
          <input type="text" className="m-1 text-center form-control rounded" maxLength="1" />
        </div>

        <div className="button " style={{ marginTop: 5 }}>
          <a href="/newpassword" style={{ textDecoration: "none" }}>
            <Button label="Kirim" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifPassword;
