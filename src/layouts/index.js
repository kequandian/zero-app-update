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

  window.MC.PLATFORM_TYPE = checkUserAgent.androidOrIos();

  //这里save token
  saveToken(locationToken)
}


function Index({ children, location, dispatch,loading }) {

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
        // loading: state.loading.global
    };
}
export default connect(mapStateToProps)(withRouter(Index));
