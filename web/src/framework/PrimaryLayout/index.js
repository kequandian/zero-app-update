import React, {
  useContext, useEffect,
  // useMemo
} from 'react';
import { Layout } from 'antd';
// import Breadcrumb from './Breadcrumb';
// import Login from './Login';
// import styles from './index.less';

import GlobalContext from '@/framework/GlobalContext';

// import selectNavStyle from './utils/selectNavStyle';
import { init, changeTheme } from './theme';
init();

const {
  // Header,
  Content } = Layout;

export default function PrimaryLayout({
  children,
  // location,
  // menuData,
  // breadcrumb,
}) {
  const { style } = useContext(GlobalContext);
  const {
    // nav,
    theme } = style;

  // const [
  //   TopNav, TopNavData,
  //   LeftNav, LeftNavData
  // ] = useMemo(_ => {
  //   return selectNavStyle(nav, menuData, location.pathname);
  // }, [nav, menuData, location.pathname]);
  useEffect(_ => {
    changeTheme(theme);
  }, [theme]);

  // const aloneView = location.pathname === '/login';

  return <Layout>
    <Layout id="contentContainer">
      <Content>
        {children}
      </Content>
    </Layout>
  </Layout>
}