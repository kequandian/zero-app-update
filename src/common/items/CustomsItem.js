import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd-mobile';
import styles from './CustomsItem.css';

const customslItem = ({
  icon='',
  textName='',
  onOk=()=>{},
  count=0,
}) => {

  const formatCount = (count) => {
    if(count){
      let newCount = count;
      if(newCount > 99){
        newCount = '99+';
      }
      return (
        <div>{newCount}</div>
      )
    }
  }


  return(
      <div className={styles.listItem} onClick={() => onOk()}>
        <div className={styles.itemIcon}>
          <img src={icon} className={styles.itemImg}/>
        </div>
        <div className={styles.itemText}>
          {textName}
        </div>
        <div className={styles.itemCount}>
          {formatCount(count)}
        </div>
        <div className={styles.itemArrow}>
          <Icon type='right' size='md' color='#6A6A6A' />
        </div>
      </div>
  )
}

customslItem.propTypes = {
};

export default connect()(customslItem);
