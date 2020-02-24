import React from 'react';
import { Icon } from 'antd';

export default (props) => {
  const { data: { text = '' } } = props;
  if (text) {
    return <Icon type={text} />;
  }
  return null;
}