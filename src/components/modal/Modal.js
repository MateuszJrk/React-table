import React from "react";
import "./Modal.css";
import Backdrop from "../backdrop/Backdrop";

const Modal = ({ show, modalClose, children }) => {
  return (
    <>
      <Backdrop show={show} onClick={modalClose} />
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh",
          opacity: show ? "1" : "0"
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
