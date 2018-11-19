import React from 'react';
import { ActionSheet } from 'antd-mobile';

import styles from './PayTypeModal.css';

const  dataList = [
  // { url: 'OpHiXAcYzmPQHcdlLFrc', title: '支付宝' },
  { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信' },
  { url: 'cTTayShKtEIdQVEMuiWt', title: '零钱支付' },
].map(obj => ({
  icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
  title: obj.title,
}));

class PayTypeModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      status:false
    };
  }

  componentDidMount() {
    const { status } = this.props;
    console.log('status11',status);
    this.setState({
      status
    })
  }


  componentWillReceiveProps(newProps){
    const { status } = newProps;
    console.log('status',status);
    // this.setState({
    //   status
    // })
    if(status){
      this.showShareActionSheet()
    }
  }

  showShareActionSheet(){
    ActionSheet.showShareActionSheetWithOptions({
      options: dataList,
      // title: 'title',
      message: '请选择支付方式',
    },
    (buttonIndex) => {
      // this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        // Toast.info('');
        if(buttonIndex !== -1){
          // console.log('data', dataList[buttonIndex].title);
          let payType = dataList[buttonIndex].title;
          // console.log(payType);
          if(payType === '微信'){
            payType = 'WECHAT';
          }
          console.log('payType',payType);

        }else{
          // console.log('buttonIndex', buttonIndex);
          setTimeout(resolve, 1000);
        }

      });
    });
  }

  render(){
    const { data, status } = this.state;
    console.log('status22',status);
    return(
      <div>
      </div>
    )
  }
}

export default PayTypeModal;
