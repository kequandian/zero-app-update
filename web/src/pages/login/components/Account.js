import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import styles from '../index.less';

export default class AccountForm extends Component {
  render() {
    const { onRePW, onSubmit, loading } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={onSubmit} className={styles.Form}>
        <Form.Item>
          {getFieldDecorator('account', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名/邮箱"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>自动登录</Checkbox>)}
          <Button type="link" className={styles.forgot}
            onClick={onRePW}
          >
            忘记密码
          </Button>
          <Button type="primary" htmlType="submit" className={styles.Button}
            loading={loading}
          >
            登陆
          </Button>
        </Form.Item>
      </Form>
    );
  }
}