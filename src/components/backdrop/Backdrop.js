import React from "react";
import "./Backdrop.css";

const Backdrop = ({ show, onClick }) => {
  return show ? <div className="backdrop" onClick={onClick} /> : null;
};

export default Backdrop;
