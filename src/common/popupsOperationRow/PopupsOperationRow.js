import React,{Component} from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './PopupsOperationRow.css';
import { List,Modal,WingBlank,WhiteSpace,Button,Icon } from 'antd-mobile';
import {createForm} from 'rc-form';

const operation = Modal.operation;

class PopupsOperationRow extends Component {

  constructor(props){
    super(props);
    this.state = {
      v :'',
    }
  }

  sublime = (value) =>{
    console.log(value)
    this.setState({ v: value })
    this.props.onSave(value)
  }

  render() {

    const {popupsHead, labelName,PopupsDefaults,displayDefaults,unit,onSave} = this.props;

    return (

          <div className={styles.popups}
            onClick={
              () => operation([
                { text: '保密', onPress: () => this.sublime('保密')},
                { text: '男', onPress: () => this.sublime('男')},
                { text: '女' ,onPress: () => this.sublime('女')},
              ], 'plain-text', PopupsDefaults )
            }
          >
            <div className={styles.label}>
              {labelName}
            </div>
            <div className={styles.itemCount}>
              {displayDefaults}
            </div>
            <div className={styles.itemArrow}>
              <Icon type='right' size="md" color='#C7C7C7' style={{width:'27px', height:'35px'}} />
            </div>

          </div>

    );
  }

}

const PopupsOperationRowWrapper = createForm()(PopupsOperationRow);

export default connect()(PopupsOperationRowWrapper);
