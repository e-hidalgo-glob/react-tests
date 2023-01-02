import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  const correctPercentage = ((correct / questions.length) * 100).toFixed(0);
  const modalClassName = isModalOpen
    ? "modal-container isOpen"
    : "modal-container";

  return (
    <div className={modalClassName}>
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>You answered {correctPercentage}% of questions correctly</p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
