import React, { PropTypes } from 'react';
import { connect } from 'dva';
import styles from './Btn.css';

const contomsBtn = ({
  textValue,
  onOk,
}) => {

  return(
    <div className={styles.btnContent}>
      <div className={styles.btn} onClick={() => onOk()}>{textValue}</div>
    </div>
  )
}

contomsBtn.propTypes = {
};

export default connect()(contomsBtn);
