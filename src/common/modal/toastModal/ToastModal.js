import React from 'react';
import styles from './ToastModal.css';

const ToastModal = ({
  showViewStatus=true,
  children
}) => {

  // console.log('showViewStatus',showViewStatus);

  return (
    <div className={styles.showView} style={{display:`${showViewStatus ? "block":"none"}`}}>
      {children}
    </div>
  );
}

export default ToastModal ;
