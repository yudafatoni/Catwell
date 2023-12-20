import React from "react";
import LogoHapus from "../../assets/admin/Delete.svg";
import "../../style/admin/Hapus.css"; // Buatlah file CSS terpisah untuk styling

const Hapus = () => {
  return (
    <div className="edit-hapus-container">
      <div className="borderHapus text-center d-flex align-items-center"></div>
      <div className="position-absolute img-container">
        <img src={LogoHapus} alt="LogoDelete"></img>
      </div>
      <div className="text-container">Data berhasil dihapus</div>
    </div>
  );
};

export default Hapus;
