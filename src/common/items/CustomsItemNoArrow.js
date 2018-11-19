import React from 'react';
import styles from './CustomsItemNoArrow.css';

const CustomsItemNoArrow = ({
  label,
  text,
  onOk=()=>{}
}) => {

  return (
    <div className={styles.content} onClick={()=>onOk()}>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
      <div className={styles.display}>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default CustomsItemNoArrow;
