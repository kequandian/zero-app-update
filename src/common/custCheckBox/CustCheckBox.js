import React from 'react';

import styles from './CustCheckBox.css';

class CustCheckBox extends React.Component {

  constructor(props) {
    super(props);
    console.log('......... ptops',props);
    this.state = {
      data: '',
      checkedValue: props.checked != undefined ? props.checked : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps===", nextProps);
    this.setState({
      checkedValue: nextProps.checked != undefined ? nextProps.checked : false,
    })
  }

  componentDidMount() {
    const { checked } = this.props;
    this.setState({
      checkedValue : checked
    })
  }


  componentWillReceiveProps(nextProps){
    const { checked } = nextProps;
    this.setState({
      checkedValue : checked
    })
  }

  checkedClick(value, itemId){
    const checkedValue = !value;
    this.setState({
      checkedValue
    })
    if(this.props.onViewClick){
      this.props.onViewClick(checkedValue, itemId);
    }

  }

  render(){

    // const { checkedValue } = this.state;
    const { labelName, itemId, checked } = this.props;

    return(
      <div className={styles.checkbox} onClick={() => this.checkedClick(checked, itemId)}>
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
}

export default CustCheckBox;
