import React from 'react';

import styles from './CustCheckBox.css';

const CustCheckBox = ({
  labelName,
  itemId,
  checked=false,
  onViewClick,
}) => {


  const checkedClick = (value, itemId) => {
    const checkedValue = !value;
    // const checkedValue = !this.props.checked
    // this.setState({
    //   checkedValue
    // })
    if(onViewClick){
      onViewClick(checkedValue, itemId);
    }
  }

  return(
    <div className={styles.checkbox} onClick={() => checkedClick(checked, itemId)}>
      <input
        type="checkbox"
        style={{display:'none'}}
        id={`myCheck_${itemId}`}
        className={styles.myCheck}
        checked={checked}
        readOnly="readOnly"
        ></input>
      <span></span>
      {/* <span
        htmlFor={`myCheck_${itemId}`}
      ></span> */}
      {labelName ? (
        <span style={{fontSize:'1em', padding:'0 0.4em'}}>{labelName}</span>
      ):''}
    </div>

  )

}

export default CustCheckBox;
