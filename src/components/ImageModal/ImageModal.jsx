import Modal from 'react-modal'
import css from '../ImageModal/ImageModal.module.css'
Modal.setAppElement('#root');
export default function ImageModal ({children,onClose}){
   const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
   return<>
   <Modal 
     isOpen={true}
     onRequestClose={onClose}
     onAfterOpen={() => window.addEventListener('keydown', handleKeyDown)}
     onAfterClose={() => window.removeEventListener('keydown', handleKeyDown)}
     className={css.modal}
     overlayClassName={css.overlay}> {children}  {/* Вміст модального вікна передається через пропси */}
      <button onClick={onClose} className={css.closeBtn}>X</button></Modal>
   </>
}