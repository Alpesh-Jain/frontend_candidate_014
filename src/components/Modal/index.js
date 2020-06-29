import React from 'react';
import './styles.scss';


const JSX_MODAL = ({ content, handleClose }) => (
  <div className="modal-wrapper" onClick={handleClose}>
    <div className="modal-content" >
      <p> {"You have selected " + content}</p>
    </div>
  </div>
);

function Modal() {
  return (

  );
}

export default Modal;
