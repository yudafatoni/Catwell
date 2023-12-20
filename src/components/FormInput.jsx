import React from "react";
import "../style/Login.css";

const FormInput = () => {
  return (
    <div className="form">
      <div className="login-container">
        <div className="form-group">
          <label htmlFor="email" className="label-email">
            Email :
          </label>
          <input className="form-control text-start" name="email" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="email" placeholder="Masukkan email anda" />
        </div>
        <div className="form-group ">
          <label htmlFor="password" className="label-password">
            Password :
          </label>
          <input className="form-control text-start" name="password" style={{ borderRadius: 9, border: "1px #F28705 solid" }} type="password" placeholder="Masukkan kata sandi anda" />
        </div>
        <div className="forgetPassword d-flex justify-content-end">
          <a href="/LupaPassword" className="text-dark text-decoration-none">
            Lupa Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
