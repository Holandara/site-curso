import React from "react";
import "./Modal.css";

export default function Modal({ isOpen, setIsOpen }) {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Estamos quase lá!</h2>
          <button className="modal-close" onClick={handleCloseModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>Preencha os campos obrigatórios</p>
          {/* Adicione um formulário aqui */}
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={handleCloseModal}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
