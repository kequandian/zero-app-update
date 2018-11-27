import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './index.css';
import withRouter from 'umi/withRouter';
import 'antd/dist/antd.css';
import { saveToken } from 'kqd-utils/lib/token';

import checkUserAgent from '../utils/checkUserAgent';

import '../css/editAntCss.css';

if (process.env.NODE_ENV === 'development') {
  const locationToken = {
    token:"eyJsb2dpbl9uYW1lIjoiMTgyMTkyMjY4NzkiLCJpZCI6IjIwIiwidG9rZW4iOiJlMWIyYTdmYTUyNTFlZDYyMDg3Y2Q5ZTVkNDdmNGUzNDdiNDQ2MjNkIn0=",
    perms:[]
  }
  window.MC = { HOST: ""};
  // window.MC.HOST = 'http://192.168.31.232:8081'
  // window.MC.HOST = 'http://120.79.77.207:8080';
  // window.MC.HOST = 'http://112.74.26.228:10080';
  window.MC.SOBOT = '84fee9dfe79842d3b41a15dd4f079eda';

  window.MC.PLATFORM_TYPE = checkUserAgent.androidOrIos();

  //这里save token
  saveToken(locationToken)
}else{
  window.MC.SOBOT = '84fee9dfe79842d3b41a15dd4f079eda';
  window.MC.PLATFORM_TYPE = checkUserAgent.androidOrIos();
}


function Index({ children, location, dispatch, personalCenter,loading }) {

  const layoutProps = {
    children,
    location,
    dispatch,
  }

  return (
    <Layout {...layoutProps}/>
  );
}

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data:{}
    };
  }

  componentWillMount(){

  }

  componentWillReceiveProps(newProps){

  }

  render(){

    const { children, location } = this.props;

    return(
      <>
        <div className={styles.normal}>
          <div className={styles.content}>
            <div className={styles.main}>
              {children}
            </div>
          </div>
        </div>

      </>
    )

  }

}

const mapStateToProps = (state) => {
    return {
        personalCenter:state.personalCenter,
        // loading: state.loading.global,
    };
}
export default connect(mapStateToProps)(withRouter(Index));
