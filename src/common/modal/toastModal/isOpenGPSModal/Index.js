import React from 'react';
import styles from './style.css';

import closeIcon from './close.png';

const IsBindPhoneNum = ({
  onViewClick=()=>{},
  onViewClose=()=>{},
}) => {

  return (
    <div className={styles.container}>

      <div className={styles.cbody}>
        <div className={styles.titleText}>提示</div>

        <div className={styles.contenText}>
          未开启定位服务
        </div>

        <div className={styles.btns} onClick={() => onViewClick()}>
          <span>前往</span>
        </div>

        <div className={styles.closeBtn} onClick={() => onViewClose()}>
          <img src={closeIcon} alt=""/>
        </div>
      </div>

    </div>
  );
}

export default IsBindPhoneNum ;
