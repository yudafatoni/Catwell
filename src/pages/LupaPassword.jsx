import React from "react";
import CardComponent from "../components/CardLogin";
import Button1 from "../components/ButtonLogin";
import Button from "../components/Button";

const LupaPassword = () => {
  return (
    <div className="d-flex align-items-center justify-content-center myBg">
      <div className="position-absolute">
        <CardComponent />
      </div>
      <div className="text-center position-relative d-flex flex-column align-items-center">
        <p className="mb-2 " style={{ marginTop: 70 }}>
          Masukkan Alamat E-mail anda untuk
          <br />
          mendapatkan kode
        </p>
        <div>
          <input className="form-control mb-2 mt-4" name="email" style={{ height: 40, width: 363, borderRadius: 9, border: "1px #F28705 solid" }} type="email" placeholder="Masukkan alamat email anda" />
        </div>

        <div className="button  " style={{ marginTop: 5 }}>
          <a href="/verification" style={{ textDecoration: "none" }}>
            <Button label="Kirim" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LupaPassword;
