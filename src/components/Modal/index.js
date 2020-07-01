import React,{useEffect} from 'react';
import './styles.scss';

const JSX_MODAL = ({ content, handleClose }) => (
  <div className="modal-wrapper" onClick={handleClose}>
    <div className="modal-content" >
      <p> {"You have selected " + content}</p>
    </div>
  </div>
);

function Modal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setModalShow(false);
    }, props.TimeoutTime);
});
  return (
  <>
    <button style={{backgroundColor:'#86BC25',border:0,padding:'0.5em',color:'white',fontWeight:600}} onClick={() => setModalShow(true)}>
    Select
    </button>
    {modalShow && <JSX_MODAL content={props.Modaltext} handleClose={()=>setModalShow(false)} />}
</>
  );
}

export default Modal;
