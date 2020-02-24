import React from 'react';
import router from 'umi/router';
import { removeToken } from 'zero-element/lib/utils/request/token';
import { Icon, Avatar, Menu, Dropdown } from 'antd';

function handleLogOut() {
  router.push('/login');
  removeToken();
}
function handleRouteToProfile() {
  router.push('/profile/baseInfo');
}

const menu = (
  <Menu>
    <Menu.Item onClick={handleRouteToProfile}>
      <Icon type="appstore" />
      <span className="ZEleA-margin-left">个人中心</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={handleLogOut}>
      <Icon type="logout" />
      <span className="ZEleA-margin-left">退出账号</span>
    </Menu.Item>
  </Menu>
);

export default (props) => {
  return <Dropdown overlay={menu} placement="bottomRight">
    <Avatar icon="user" />
  </Dropdown>
}