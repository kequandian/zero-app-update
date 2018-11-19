import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import router from 'umi/router';

import styles from './TitleBarTextBtn.css';

const TitleBarTextBtn = ({
  title,
  children,
  onAction=()=>{},
  onGoBack,
  actionText='',
}) => {

  let actionList = [
    <span key="0" className={styles.textBtn} onClick={() => onAction()}>{actionText}</span>,
  ]

  const onGBClick =()=>{
    router.goBack();
    if(onGoBack){
      onGoBack()
    }
  }

  return(
    <>
      <div className={styles.titleContainer}>
        <NavBar
          mode="light"
          icon={<Icon type="left" style={{ color:"#000" }} />}
          onLeftClick={() => onGBClick()}
          rightContent={actionList}
        >{title}</NavBar>
      </div>
      <div className={ styles.contentBox }>
        { children }
      </div>
    </>
  )
}

export default TitleBarTextBtn;
