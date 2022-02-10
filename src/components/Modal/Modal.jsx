import React from 'react';
import classes from './Modal.module.css';

export const Modal = ({children, show, close}) => {
    const styleModal = [classes['modal-crs']];
if (!show) {
    styleModal.push(classes['hide']);
}


  return   (
  <div className={styleModal.join(' ')} onClick={close}>
     <div onClick={(e)=>e.stopPropagation()}>{children}</div> 
      </div>
      );
};
