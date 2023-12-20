import React from "react";
import LogoCheck from "../../assets/admin/Check.svg";
import "../../style/admin/EditSukses.css"; // Buat file CSS untuk styling

const EditSukses = () => {
  return (
    <div className="edit-sukses-container">
      <div className="borderSukses text-center d-flex align-items-center"></div>
      <div className="position-absolute img-container ">
        <img src={LogoCheck} alt="LogoCheck"></img>
      </div>
      <div className="text-container">Perubahan berhasil disimpan</div>
    </div>
  );
};

export default EditSukses;
