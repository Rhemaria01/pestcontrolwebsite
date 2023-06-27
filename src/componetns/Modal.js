import React,{useContext} from 'react'
import { ModalContext } from '../context/ModalContext';
const Modal = () => {
    const modal = useContext(ModalContext);

  return (
    <div className={`modal `}>
        <div className='modal-box rounded-2xl'>
            <p className='modal-text'>{modal.message}</p>
            <button onClick={()=>{modal.setModalOpen(false);document.body.style.overflow = "visible"}} className='modal-btn '>X</button>
        </div>
    </div>
  )
}

export default Modal