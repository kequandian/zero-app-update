import React from 'react';
import styles from './IsBindPhoneNum.css';

import closeIcon from './close.png';

const IsBindPhoneNum = ({
  onViewClick=()=>{},
  onViewClose=()=>{},
}) => {

  return (
    <div className={styles.container}>

      <div className={styles.cbody}>
        <div className={styles.titleText}>绑定手机号</div>

        <div className={styles.contenText}>
          为了给您提供更好的产品体验，需要您绑定一个常用的手机号
        </div>

        <div className={styles.btns} onClick={() => onViewClick()}>
          <span>立即绑定</span>
        </div>

        <div className={styles.closeBtn} onClick={() => onViewClose()}>
          <img src={closeIcon} alt=""/>
        </div>
      </div>

    </div>
  );
}

export default IsBindPhoneNum ;
