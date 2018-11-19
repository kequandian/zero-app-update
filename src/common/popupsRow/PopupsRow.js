import React,{Component} from 'react';
import styles from './PopupsRow.css'
import { List,Modal,Icon } from 'antd-mobile';
import {createForm} from 'rc-form';

import './editAntdCss.css';

const prompt = Modal.prompt;

class PopupsRow extends Component {

  constructor(props){
    super(props);
    this.state = {
      v :'',
      isNumber: props.isNumber || false
    }
  }

  sublime = (value) =>{
    if(this.state.isNumber){
      if(isNaN(value)){
        
      }
    } else {
      this.setState({ v: value })
    }
    console.log(value)
    this.props.onSave(value)
  }

  render() {

    const {popupsHead, labelName,PopupsDefaults,displayDefaults,onSave} = this.props;

    const displayValue = () => {

    }

    return (

          <div className={styles.popups}
            onClick={
            () => prompt(popupsHead, '', [
            { text: '取消' },
            { text: '提交',
            onPress: value => this.sublime(value)
             },
          ], 'plain-text', PopupsDefaults)
          }
            >
            <div className={styles.label}>
              {labelName}
            </div>

            <div className={styles.display}>
              {this.state.v?this.state.v:displayDefaults}
            </div>
            <div className={styles.itemArrow}>
              <Icon type='right' size="md" color='#C7C7C7' style={{width:'27px', height:'35px'}} />
            </div>
          </div>

    );
  }

}

const PopupsRowWrapper = createForm()(PopupsRow);

export default PopupsRowWrapper;
