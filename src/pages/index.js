import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';


function IndexPage() {

  router.push("/wechat")

  return (
    <p>跳转中</p>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
