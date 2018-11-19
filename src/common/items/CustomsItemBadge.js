import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd-mobile';
import styles from './CustomsItemBadge.css';

const CustomslItemBadge = ({
  icon='',
  textName='',
  onOk=()=>{},
  overflowText='',
  overflowTextColor=''
}) => {


  return(
      <div className={styles.listItem} onClick={() => onOk()}>
        <div className={styles.itemIcon}>
          <img src={icon} className={styles.itemImg}/>
        </div>
        <div className={styles.itemText}>
          <span>{textName}</span>
        </div>
        <div className={styles.itemCount} style={{color:overflowTextColor}}>
          {overflowText}
        </div>
        <div className={styles.itemArrow}>
          <Icon type='right' size='md' color='#6A6A6A' />
        </div>
      </div>
  )
}

export default connect()(CustomslItemBadge);
