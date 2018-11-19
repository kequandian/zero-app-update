import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd-mobile';
import styles from './CustomsItemNoIcon.css';

const customslItem = ({
  textName,
  onOk=()=>{},
}) => {

  return(
      <div className={styles.listItem} onClick={() => onOk()}>
        <div className={styles.itemText}>
          {textName}
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
