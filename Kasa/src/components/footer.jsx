import React from "react";
import logoFooter from "../assets/icons/footer-logo.svg";
import "../css/footer.css";

const footer = () => {
  return (
    <div className="footer-kasa">
      <img src={logoFooter} alt="logo kasa footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default footer;
