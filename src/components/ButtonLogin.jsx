import React from "react";
import "./ButtonLogin.css";

const ButtonLogin = () => {
  return (
    <div>
      <button className="customBtn" style={{ width: "120px", height: "46px", textAlign: "center", color: "white", fontSize: 16, fontFamily: "Poppins", fontWeight: "700", wordWrap: "break-word", textDecoration: "none" }}>
        Masuk
      </button>
    </div>
  );
};

export default ButtonLogin;
