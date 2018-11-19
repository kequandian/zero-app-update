import React from 'react';

import styles from './Title.css'

import arrowIcon from '../../icons/arrow.png';

// const arrowIcon = require('../../icons/arrow.png');

const title = ({
  goBack,
  titleName,
  showSaveBtnStatus=false,
  saveBtnName='',
  onSave=()=>{},
  showImgBtnStatus=false,
  imgClick=()=>{}
}) => {

  return(
    <div className={styles.title}>
      <img src={arrowIcon} className={styles.titleIcon} onClick={() => goBack()}/>
      <div className={styles.titleText}>{titleName}</div>
      {showSaveBtnStatus ? (
        <div className={styles.complete} onClick={() => onSave()}>{saveBtnName}</div>
      ):showImgBtnStatus ? (
        <div className={styles.complete2} onClick={() => imgClick()}>
          <img/>
        </div>
      ):''}
    </div>
  )
}

export default title;
