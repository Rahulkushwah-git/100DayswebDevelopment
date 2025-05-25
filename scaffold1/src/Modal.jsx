import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { useRef,useEffect } from 'react';

const Modal = () => {
  const {isModalOpen, closeModal} = useGlobalContext();
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(modalRef.current && !modalRef.current.contains(e.target)){
        closeModal();
      }
    };
    if(isModalOpen){
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },[isModalOpen, closeModal]);

  return (
    <div className={`modal-overlay ${isModalOpen ? 'show-modal' : ''}`}>
      <div className='modal-container' ref={modalRef}>
        <h3>modal content</h3>
        <button className='close-modal-btn'onClick={closeModal} >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
