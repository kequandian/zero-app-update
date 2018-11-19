import React from 'react';
import { ActionSheet } from 'antd-mobile';

class PayPanel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dataList: props.dataList || '',
      title: props.title || '',
      visible: props.visible || false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps===", nextProps);
    this.setState({
      visible: nextProps.visible,
    })
  }

  onSelect = (value) => {
    console.log('kkkkk value = ',value);
    if(this.props.onSelect){
      this.props.onSelect(value)
    }
  }

  onBack = () => {
    if(this.props.onCancel){
      this.props.onCancel()
    }
  }


  render(){

    const { dataList,title,visible } = this.state;
    console.log('uuuuuuuuuuu pri',this.props.visible);
    console.log('lllllllkkkkkkkkkk visible = ',visible);

    return (
      <div>
        {
          visible ?
          <div>
            {
              ActionSheet.showShareActionSheetWithOptions({
                options: dataList,
                title: title,
                message: '请选择支付方式',
              },
              (buttonIndex) => {
                return new Promise((resolve) => {
                  if(buttonIndex !== -1){
                    let payType = dataList[buttonIndex].title;
                    this.onSelect(payType);
                    ActionSheet.close()
                  }else{
                    ActionSheet.close()
                    console.log('点击取消1');
                    this.onBack()
                  }
                    ActionSheet.close()
                    console.log('点击取消');
                    this.onBack()
                })
              })
            }
          </div>
          :
          <div>
            {
              ActionSheet.close()
            }
          </div>
        }
      </div>
    )

  }

}


export default PayPanel;
